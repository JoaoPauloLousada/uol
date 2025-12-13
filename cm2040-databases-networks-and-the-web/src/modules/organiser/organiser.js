class Organiser {
    constructor(organiser_id, username, email, password_hash, created_date, updated_date) {
        this.id = organiser_id;
        this.username = username;
        this.email = email;
        this.password_hash = password_hash;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }
}

module.exports = Organiser;