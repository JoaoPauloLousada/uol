/**
 * get-event-by-id.action.js
 * Module for getting a single event by ID with tickets
 * 
 * Purpose: Retrieve a single event from the database by event_id
 * Inputs: eventId (number)
 * Outputs: Event object with tickets array
 */

const { Event } = require("./event");
const { GetTicketsByEventIdList } = require("../tickets/get-tickets-by-event-id-list.action");
const { Ticket } = require("../tickets/ticket");

class GetEventById {
    constructor(eventId) {
        this.eventId = eventId;
    }

    /**
     * Execute the query to get the event by ID
     * @returns {Promise<Event|null>} - Promise that resolves to the event or null if not found
     */
    async execute() {
        try {
            // First query: Get the event by ID
            const event = await new Promise((resolve, reject) => {
                const EVENT_QUERY = `
                    SELECT event_id, title, description, event_date, published_date, created_date, updated_date, status 
                    FROM events 
                    WHERE event_id = ?
                `;
                global.db.get(EVENT_QUERY, [this.eventId], function (err, row) {
                    if (err) {
                        return reject(err);
                    } else {
                        return resolve(row);
                    }
                });
            });

            // If event not found, return null
            if (!event) {
                throw new Error('Event not found');
            }

            // Get tickets for this event
            const getTicketsByEventIdList = new GetTicketsByEventIdList([this.eventId]);
            const tickets = await getTicketsByEventIdList.execute();

            // Separate tickets by type
            const ticketsFull = tickets.find(t => t.ticketType === 'full') || null;
            const ticketsConcession = tickets.find(t => t.ticketType === 'concession') || null;

            // Return Event object with Ticket instances
            return new Event(
                event.event_id,
                event.title,
                event.description,
                event.event_date,
                event.published_date,
                event.created_date,
                event.updated_date,
                event.status,
                ticketsFull,
                ticketsConcession
            );
        } catch (error) {
            console.error('Error getting event by ID:', error.message);
            throw error;
        }
    }
}

module.exports.GetEventById = GetEventById;

