const { Ticket } = require("./ticket");

class GetTicketsByEventIdList {
    constructor(eventIdList) {
        this.eventIdList = eventIdList;
    }

    /*
     * Execute the query to get the tickets by event id list
     * @returns {Promise<Ticket[]>} - Promise that resolves to the tickets by event id list
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

