const { Ticket } = require("../tickets/ticket");

class Event {
    constructor(eventId, title, description, eventDate, publishedDate, createdDate, updatedDate, status, ticketsFull, ticketsConcession) {
        this.id = eventId;
        this.title = title;
        this.description = description;
        this.eventDate = eventDate;
        this.publishedDate = publishedDate;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.status = status;
        this.tickets = {
            full: ticketsFull,
            concession: ticketsConcession
        };
    }
}

module.exports.Event = Event;

