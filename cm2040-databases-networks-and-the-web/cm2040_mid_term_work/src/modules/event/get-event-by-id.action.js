/**
 * GetEventById
 *
 * Action class for retrieving an event by its unique identifier.
 * Fetches a single event with its associated ticket information.
 * 
 * author: Joao Paulo Lousada
 */
const { Event } = require("./event");
const { GetTicketsByEventIdList } = require("../tickets/get-tickets-by-event-id-list.action");
const { Ticket } = require("../tickets/ticket");

/**
 * Action class for retrieving an event by ID.
 *
 * Executes a database query to fetch a specific event
 * and includes its associated ticket information.
 */
class GetEventById {
    /**
     * Creates a new GetEventById action instance.
     *
     * @param {number} eventId - Unique identifier of the event to retrieve
     */
    constructor(eventId) {
        this.eventId = eventId;
    }

    /**
     * Retrieves an event by its ID from the database.
     *
     * @returns {Promise<Event>} Event instance with associated ticket information
     * @throws {Error} Throws error if event is not found or database operation fails
     */
    async execute() {
        try {
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

            if (!event) {
                throw new Error('Event not found');
            }

            const getTicketsByEventIdList = new GetTicketsByEventIdList([this.eventId]);
            const tickets = await getTicketsByEventIdList.execute();

            const ticketsFull = tickets.find(t => t.ticketType === 'full') || null;
            const ticketsConcession = tickets.find(t => t.ticketType === 'concession') || null;

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

