const { GetAttendeeByEmail } = require('../attendee/get-attendee-by-email');
const { Password } = require('./password');
const { NotFoundError } = require('../errors/not-found');

class AttendeeLogin {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    async execute() {
        const getAttendee = new GetAttendeeByEmail(this.email);
        const attendee = await getAttendee.execute();
        const passwordMatch = await Password.compare(this.password, attendee.password_hash);
        if (!passwordMatch) {
            throw new NotFoundError('Invalid username or password');
        }
        return attendee;
    }
}

module.exports.AttendeeLogin = AttendeeLogin;

