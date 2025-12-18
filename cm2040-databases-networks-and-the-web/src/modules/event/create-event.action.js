/**
 * create-event.action.js
 * Module for creating a new draft event
 * 
 * Purpose: Create a new draft event in the database
 * Inputs: None (creates event with default values)
 * Outputs: event_id of the newly created event
 */

class CreateEvent {
    /**
     * Execute the event creation process
     * Creates a new draft event with default values
     * @returns {Promise<number>} - The event_id of the newly created event
     */
    async execute() {
        try {
            const title = 'New Event';
            const description = '';
            const eventDate = new Date().toISOString().split('T')[0]; // Today's date in YYYY-MM-DD format
            const createdDate = new Date().toISOString();
            const status = 'draft'; // New events are created as drafts

            // Define the query to insert new event
            const query = `
                INSERT INTO events (title, description, event_date, created_date, status) 
                VALUES (?, ?, ?, ?, ?)
            `;
            const queryParameters = [title, description, eventDate, createdDate, status];

            // Execute the query to create the event
            const eventId = await new Promise((resolve, reject) => {
                global.db.run(query, queryParameters, function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve(this.lastID);
                    }
                });
            });

            // Create default tickets for the event (full and concession with 0 quantity and price)
            const fullTicketQuery = `
                INSERT INTO tickets (event_id, ticket_type, quantity, price) 
                VALUES (?, 'full', 0, 0)
            `;
            const concessionTicketQuery = `
                INSERT INTO tickets (event_id, ticket_type, quantity, price) 
                VALUES (?, 'concession', 0, 0)
            `;

            // Create full ticket
            await new Promise((resolve, reject) => {
                global.db.run(fullTicketQuery, [eventId], function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve();
                    }
                });
            });

            // Create concession ticket
            await new Promise((resolve, reject) => {
                global.db.run(concessionTicketQuery, [eventId], function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve();
                    }
                });
            });

            return eventId;
        } catch (error) {
            console.error('Error creating event:', error.message);
            throw error;
        }
    }
}

module.exports.CreateEvent = CreateEvent;

