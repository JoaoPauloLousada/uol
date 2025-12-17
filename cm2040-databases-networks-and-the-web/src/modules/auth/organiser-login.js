const { GetOrganiserByEmail } = require('../organiser/get-organiser-by-email');
const { Password } = require('./password');
const { NotFoundError } = require('../errors/not-found');

class OrganiserLogin {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    async execute() {
        const getOrganiser = new GetOrganiserByEmail(this.email);
        const organiser = await getOrganiser.execute();
        const passwordMatch = await Password.compare(this.password, organiser.password_hash);
        if (!passwordMatch) {
            throw new NotFoundError('Invalid username or password');
        }
        return organiser;
    }
}

module.exports.OrganiserLogin = OrganiserLogin;