/**
 * UpdateEvent
 *
 * Action class for updating events.
 * Updates event details and manages ticket information for both ticket types.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Action class for updating events.
 *
 * Updates event information and manages ticket quantities and prices
 * for both full and concession ticket types.
 */
class UpdateEvent {
    /**
     * Creates a new UpdateEvent action instance.
     *
     * @param {number} eventId - Unique identifier of the event to update
     * @param {string} title - New title for the event
     * @param {string} description - New description for the event
     * @param {string} eventDate - New date when the event will occur (ISO date string)
     * @param {number} fullQuantity - Quantity of full tickets available
     * @param {number} fullPrice - Price for full tickets
     * @param {number} concessionQuantity - Quantity of concession tickets available
     * @param {number} concessionPrice - Price for concession tickets
     */
    constructor(eventId, title, description, eventDate, fullQuantity, fullPrice, concessionQuantity, concessionPrice) {
        this.eventId = eventId;
        this.title = title;
        this.description = description;
        this.eventDate = eventDate;
        this.fullQuantity = fullQuantity;
        this.fullPrice = fullPrice;
        this.concessionQuantity = concessionQuantity;
        this.concessionPrice = concessionPrice;
    }

    /**
     * Updates an event and its ticket information in the database.
     *
     * @returns {Promise<void>} Resolves when event and tickets are successfully updated
     * @throws {Error} Throws error if database operation fails
     */
    async execute() {
        try {
            const updatedDate = new Date().toISOString();

            const updateEventQuery = `
                UPDATE events 
                SET title = ?, description = ?, event_date = ?, updated_date = ?
                WHERE event_id = ?
            `;
            const eventParams = [this.title, this.description, this.eventDate, updatedDate, this.eventId];

            await new Promise((resolve, reject) => {
                global.db.run(updateEventQuery, eventParams, function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve();
                    }
                });
            });

            const checkFullTicketQuery = `SELECT ticket_id FROM tickets WHERE event_id = ? AND ticket_type = 'full'`;
            const fullTicketExists = await new Promise((resolve, reject) => {
                global.db.get(checkFullTicketQuery, [this.eventId], function (err, row) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve(row);
                    }
                });
            });

            if (fullTicketExists) {
                const updateFullTicketQuery = `
                    UPDATE tickets 
                    SET quantity = ?, price = ?
                    WHERE event_id = ? AND ticket_type = 'full'
                `;
                await new Promise((resolve, reject) => {
                    global.db.run(updateFullTicketQuery, [this.fullQuantity, this.fullPrice, this.eventId], function (err) {
                        if (err) {
                            return reject(err);
                        } else {
                            resolve();
                        }
                    });
                });
            } else {
                const insertFullTicketQuery = `
                    INSERT INTO tickets (event_id, ticket_type, quantity, price)
                    VALUES (?, 'full', ?, ?)
                `;
                await new Promise((resolve, reject) => {
                    global.db.run(insertFullTicketQuery, [this.eventId, this.fullQuantity, this.fullPrice], function (err) {
                        if (err) {
                            return reject(err);
                        } else {
                            resolve();
                        }
                    });
                });
            }

            const checkConcessionTicketQuery = `SELECT ticket_id FROM tickets WHERE event_id = ? AND ticket_type = 'concession'`;
            const concessionTicketExists = await new Promise((resolve, reject) => {
                global.db.get(checkConcessionTicketQuery, [this.eventId], function (err, row) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve(row);
                    }
                });
            });

            if (concessionTicketExists) {
                const updateConcessionTicketQuery = `
                    UPDATE tickets 
                    SET quantity = ?, price = ?
                    WHERE event_id = ? AND ticket_type = 'concession'
                `;
                await new Promise((resolve, reject) => {
                    global.db.run(updateConcessionTicketQuery, [this.concessionQuantity, this.concessionPrice, this.eventId], function (err) {
                        if (err) {
                            return reject(err);
                        } else {
                            resolve();
                        }
                    });
                });
            } else {
                const insertConcessionTicketQuery = `
                    INSERT INTO tickets (event_id, ticket_type, quantity, price)
                    VALUES (?, 'concession', ?, ?)
                `;
                await new Promise((resolve, reject) => {
                    global.db.run(insertConcessionTicketQuery, [this.eventId, this.concessionQuantity, this.concessionPrice], function (err) {
                        if (err) {
                            return reject(err);
                        } else {
                            resolve();
                        }
                    });
                });
            }
        } catch (error) {
            console.error('Error updating event:', error.message);
            throw error;
        }
    }
}

module.exports.UpdateEvent = UpdateEvent;

