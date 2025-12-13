const { Ticket } = require("../tickets/ticket");

class Events {
    constructor(eventId, title, description, eventDate, publishedDate, createdDate, updatedDate, status, tickets) {
        this.id = event_id;
        this.title = title;
        this.description = description;
        this.eventDate = eventDate;
        this.publishedDate = publishedDate;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.status = status;
        this.tickets = tickets;
    }
}

module.exports.Events = Events;