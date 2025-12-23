/**
 * GetTicketsByEventIdList
 *
 * Action class for retrieving tickets by a list of event IDs.
 * Fetches ticket information including booked quantities for multiple events.
 * 
 * author: Joao Paulo Lousada
 */
const { Ticket } = require("./ticket");

/**
 * Action class for retrieving tickets by event ID list.
 *
 * Executes a database query to fetch tickets for multiple events
 * and includes booked quantity information from bookings.
 */
class GetTicketsByEventIdList {
    /**
     * Creates a new GetTicketsByEventIdList action instance.
     *
     * @param {number[]} eventIdList - Array of event IDs to retrieve tickets for
     */
    constructor(eventIdList) {
        this.eventIdList = eventIdList;
    }

    /**
     * Retrieves tickets for the specified event IDs from the database.
     *
     * @returns {Promise<Ticket[]>} Array of Ticket instances with booked quantity information
     * @throws {Error} Throws error if database operation fails
     */
    async execute() {
        const placeholders = this.eventIdList.map(() => '?').join(',');

        const tickets_data = await new Promise((resolve, reject) => {
            const QUERY = `
                SELECT
                    t.ticket_id,
                    t.event_id,
                    t.ticket_type,
                    t.quantity,
                    t.price,
                    COALESCE(b.booked_quantity, 0) AS booked_quantity
                FROM tickets t
                LEFT JOIN (
                    SELECT ticket_id, SUM(quantity) AS booked_quantity
                    FROM bookings
                    GROUP BY ticket_id
                ) b ON t.ticket_id = b.ticket_id
                WHERE t.event_id IN (${placeholders})
            `;
            global.db.all(QUERY, this.eventIdList, function (err, rows) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(rows);
                }
            });
        });

        const tickets = tickets_data.map(
            ticket => new Ticket(
                ticket.ticket_id,
                ticket.event_id,
                ticket.ticket_type,
                ticket.quantity,
                ticket.price,
                ticket.booked_quantity
            )
        );

        return tickets;
    }
}

module.exports.GetTicketsByEventIdList = GetTicketsByEventIdList;

