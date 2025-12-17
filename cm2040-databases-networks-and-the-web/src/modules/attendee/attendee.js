class Attendee {
    constructor(attendee_id, username, email, password_hash, is_special, created_date, updated_date) {
        this.id = attendee_id;
        this.username = username;
        this.email = email;
        this.password_hash = password_hash;
        this.is_special = is_special;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }
}

module.exports = Attendee;

