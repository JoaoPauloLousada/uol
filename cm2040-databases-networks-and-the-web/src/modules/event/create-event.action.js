class CreateEvent {
    async execute() {
        try {
            const title = 'New Event';
            const description = '';
            const eventDate = new Date().toISOString().split('T')[0];
            const createdDate = new Date().toISOString();
            const status = 'draft';

            const query = `
                INSERT INTO events (title, description, event_date, created_date, status) 
                VALUES (?, ?, ?, ?, ?)
            `;
            const queryParameters = [title, description, eventDate, createdDate, status];

            const eventId = await new Promise((resolve, reject) => {
                global.db.run(query, queryParameters, function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve(this.lastID);
                    }
                });
            });

            const fullTicketQuery = `
                INSERT INTO tickets (event_id, ticket_type, quantity, price) 
                VALUES (?, 'full', 0, 0)
            `;
            const concessionTicketQuery = `
                INSERT INTO tickets (event_id, ticket_type, quantity, price) 
                VALUES (?, 'concession', 0, 0)
            `;

            await new Promise((resolve, reject) => {
                global.db.run(fullTicketQuery, [eventId], function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve();
                    }
                });
            });

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

