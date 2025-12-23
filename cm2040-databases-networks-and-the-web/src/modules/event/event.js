/**
 * Event
 *
 * Entity class representing an event in the system.
 * Encapsulates event data including tickets and status information.
 * 
 * author: Joao Paulo Lousada
 */
const { Ticket } = require("../tickets/ticket");

/**
 * Entity class representing an event.
 *
 * Represents an event with its details, status, and associated tickets
 * for both full and concession ticket types.
 */
class Event {
    /**
     * Creates a new Event instance.
     *
     * @param {number} eventId - Unique identifier for the event
     * @param {string} title - Title of the event
     * @param {string} description - Description of the event
     * @param {string} eventDate - Date when the event will occur (ISO date string)
     * @param {string|null} publishedDate - Date when the event was published (ISO date string or null)
     * @param {string} createdDate - Date when the event was created (ISO date string)
     * @param {string} updatedDate - Date when the event was last updated (ISO date string)
     * @param {string} status - Status of the event ('draft' or 'published')
     * @param {Ticket|null} ticketsFull - Full ticket information or null if not available
     * @param {Ticket|null} ticketsConcession - Concession ticket information or null if not available
     */
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

