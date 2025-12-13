const { Events } = require("./events");
const { GetTicketsByEventIdList } = require("../tickets/get-tickets-by-event-id-list");


class GetDraftEvents {
    async execute() {
        // First query: Get all published events
        const events = await new Promise((resolve, reject) => {
            const PUBLISHED_EVENTS_QUERY = `
                SELECT event_id, title, description, event_date, published_date, created_date, updated_date, status 
                FROM events 
                WHERE status = 'draft'
            `;
            global.db.all(PUBLISHED_EVENTS_QUERY, function (err, rows) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(rows);
                }
            });
        });

        // If no events, return empty array
        if (events.length === 0) {
            return [];
        }

        // Extract event IDs for the tickets query
        const eventIds = events.map(event => event.event_id);
        const getTicketsByEventIdList = new GetTicketsByEventIdList(eventIds);
        const tickets = await getTicketsByEventIdList.execute();
        // Group tickets by event_id
        const ticketsByEventId = new Map();
        for (const ticket of tickets) {
            if (!ticketsByEventId.has(ticket.eventId)) {
                ticketsByEventId.set(ticket.eventId, []);
            }
            ticketsByEventId.get(ticket.eventId).push({
                ticket_id: ticket.id,
                ticket_type: ticket.type,
                quantity: ticket.quantity,
                price: ticket.price
            });
        }

        // Join tickets to events
        return events.map(event => {
            const tickets = ticketsByEventId.get(event.event_id) || [];
            return new Events(event.event_id, event.title, event.description, event.event_date, event.published_date, event.created_date, event.updated_date, event.status, tickets);
        });
    }
}

module.exports.GetDraftEvents = GetDraftEvents;