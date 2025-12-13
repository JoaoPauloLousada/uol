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

        // Second query: Get all tickets for these events
        const tickets = await new Promise((resolve, reject) => {
            const TICKETS_QUERY = `
                SELECT ticket_id, event_id, ticket_type, quantity, price 
                FROM tickets 
                WHERE event_id IN (${placeholders})
            `;
            global.db.all(TICKETS_QUERY, this.eventIdList, function (err, rows) {
                if (err) {
                    return reject(err);
                } else {
                    const _tickets = rows.map(row => new Ticket(row.ticket_id, row.event_id, row.ticket_type, row.quantity, row.price));
                    return resolve(_tickets);
                }
            });
        });

        return tickets;
    }
}

module.exports.GetTicketsByEventIdList = GetTicketsByEventIdList;