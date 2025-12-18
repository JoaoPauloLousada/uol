/**
 * update-event.action.js
 * Module for updating an existing event and its tickets
 * 
 * Purpose: Update event details and ticket information in the database
 * Inputs: eventId, title, description, eventDate, fullQuantity, fullPrice, concessionQuantity, concessionPrice
 * Outputs: Promise that resolves when update is complete
 */

class UpdateEvent {
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
     * Execute the event update process
     * Updates event details and ticket information
     * @returns {Promise<void>} - Promise that resolves when update is complete
     */
    async execute() {
        try {
            const updatedDate = new Date().toISOString();

            // Update the event
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

            // Update or insert full ticket
            const fullTicketQuery = `
                INSERT INTO tickets (event_id, ticket_type, quantity, price)
                VALUES (?, 'full', ?, ?)
                ON CONFLICT(event_id, ticket_type) DO UPDATE SET
                    quantity = excluded.quantity,
                    price = excluded.price
            `;

            // SQLite doesn't support ON CONFLICT with multiple columns in the same way
            // So we'll use a different approach: DELETE and INSERT, or UPDATE if exists
            // First, check if ticket exists and update, otherwise insert
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
                // Update existing full ticket
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
                // Insert new full ticket
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

            // Update or insert concession ticket
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
                // Update existing concession ticket
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
                // Insert new concession ticket
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

