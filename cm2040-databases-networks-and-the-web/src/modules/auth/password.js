const bcrypt = require('bcrypt');

class Password {
    static DEFAULT_SALT_ROUNDS = 5;

    static async hash(plainTextPassword) {
        if (!plainTextPassword) {
            throw new Error('Password is required');
        }

        if (typeof plainTextPassword !== 'string') {
            throw new Error('Password must be a string');
        }

        try {
            const hashedPassword = await bcrypt.hash(plainTextPassword, Password.DEFAULT_SALT_ROUNDS);
            return hashedPassword;
        } catch (error) {
            throw new Error(`Failed to hash password: ${error.message}`);
        }
    }

    static async compare(plainTextPassword, hashedPassword) {
        if (!plainTextPassword) {
            throw new Error('Password is required');
        }

        if (!hashedPassword) {
            throw new Error('Hashed password is required');
        }

        if (typeof plainTextPassword !== 'string') {
            throw new Error('Password must be a string');
        }

        if (typeof hashedPassword !== 'string') {
            throw new Error('Hashed password must be a string');
        }

        try {
            const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
            return isMatch;
        } catch (error) {
            throw new Error(`Failed to compare password: ${error.message}`);
        }
    }
}

module.exports.Password = Password;
