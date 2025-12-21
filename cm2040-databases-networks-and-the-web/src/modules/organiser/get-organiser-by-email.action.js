const { NotFoundError } = require('../errors/not-found.js');
const Organiser = require('./organiser.js');

class GetOrganiserByEmail {
    constructor(email) {
        this.email = email;
    }

    async execute() {
        const query = "SELECT * FROM organisers WHERE email = ? LIMIT 1";
        const queryParameters = [this.email];
        const organiser = new Promise((resolve, reject) => {
            global.db.get(query, queryParameters, function (err, row) {
                if (err) {
                    return reject(err);
                } else {
                    if (row) {
                        const organiserInstance = new Organiser(
                            row.organiser_id,
                            row.username,
                            row.email,
                            row.password_hash,
                            row.created_date,
                            row.updated_date
                        );
                        return resolve(organiserInstance);
                    } else {
                        return reject(new NotFoundError('Organiser not found'));
                    }
                }
            });
        });
        return await organiser;
    }
}

module.exports.GetOrganiserByEmail = GetOrganiserByEmail;

