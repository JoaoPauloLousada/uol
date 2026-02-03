/**
 * GetDraftEvents
 *
 * Action class for retrieving all draft events.
 * Fetches events with draft status along with their ticket information.
 * 
 * author: Joao Paulo Lousada
 */
const { Event } = require("./event");
const { GetTicketsByEventIdList } = require("../tickets/get-tickets-by-event-id-list.action");


/**
 * Action class for retrieving draft events.
 *
 * Executes a database query to fetch all events with draft status
 * and includes their associated ticket information.
 */
class GetDraftEvents {
    /**
     * Retrieves all draft events from the database.
     *
     * @returns {Promise<Event[]>} Array of Event instances with draft status, empty array if none found
     * @throws {Error} Throws error if database operation fails
     */
    async execute() {
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

        if (events.length === 0) {
            return [];
        }

        const eventIds = events.map(event => event.event_id);
        const getTicketsByEventIdList = new GetTicketsByEventIdList(eventIds);
        const tickets = await getTicketsByEventIdList.execute();
        const ticketsByEventId = new Map();
        for (const ticket of tickets) {
            if (!ticketsByEventId.has(ticket.eventId)) {
                ticketsByEventId.set(ticket.eventId, []);
            }
            ticketsByEventId.get(ticket.eventId).push(ticket);
        }

        return events.map(event => {
            const eventTickets = ticketsByEventId.get(event.event_id) || [];
            const ticketsFull = eventTickets.find(t => t.ticketType === 'full') || null;
            const ticketsConcession = eventTickets.find(t => t.ticketType === 'concession') || null;
            return new Event(event.event_id, event.title, event.description, event.event_date, event.published_date, event.created_date, event.updated_date, event.status, ticketsFull, ticketsConcession);
        });
    }
}

module.exports.GetDraftEvents = GetDraftEvents;

