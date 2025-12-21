const { z } = require('zod');
const { Password } = require('./password');

class RegisterOrganiserParams {
    constructor(username, email, password) {
        const validation = this.validate(username, email, password);
    }

    static schema = z.object({
        username: z.string()
            .min(3, 'Username must be at least 3 characters long')
            .max(50, 'Username must be no more than 50 characters')
            .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
        email: z
            .email('Invalid email address')
            .max(255, 'Email must be no more than 255 characters'),
        password: z.string()
            .min(8, 'Password must be at least 8 characters long')
            .max(100, 'Password must be no more than 100 characters')
            .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
            .regex(/[0-9]/, 'Password must contain at least one number')
            .regex(/[!@#$%^&*]/, 'Password must contain at least one special character'),
    });

    validate(username, email, password) {
        try {
            const validatedData = RegisterOrganiserParams.schema.parse({
                username: username,
                email: email,
                password: password
            });
            this.username = validatedData.username;
            this.email = validatedData.email;
            this.password = validatedData.password;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessages = error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join('; ');
                throw new Error(errorMessages);
            }
            throw error
        }
    }
}

class RegisterOrganiser {
    async execute(params) {
        try {
            const passwordHash = await Password.hash(params.password);
            const createdDate = new Date().toISOString();
            const updatedDate = createdDate;
            const query = "INSERT INTO organisers (username, email, password_hash, created_date, updated_date) VALUES (?, ?, ?, ?, ?)";
            const queryParameters = [params.username, params.email, passwordHash, createdDate, updatedDate];
            return new Promise((resolve, reject) => {
                global.db.run(query, queryParameters, function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve(this.lastID);
                    }
                });
            });
        } catch (error) {
            console.error('Error registering organiser:', error.message);
            throw error;
        }
    }
}

module.exports.RegisterOrganiser = RegisterOrganiser;
module.exports.RegisterOrganiserParams = RegisterOrganiserParams;

