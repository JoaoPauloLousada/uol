-- This makes sure that foreign_key constraints are observed and that errors will be thrown for violations
PRAGMA foreign_keys=ON;

BEGIN TRANSACTION;

-- Create your tables with SQL commands here (watch out for slight syntactical differences with SQLite vs MySQL)

-- Site Settings Table
-- Stores the site name and description that appear on both organiser and attendee pages
CREATE TABLE IF NOT EXISTS site_settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    site_name TEXT NOT NULL,
    site_description TEXT NOT NULL
);

-- Events Table
-- Stores all events (both draft and published)
-- status: 'draft' or 'published'
CREATE TABLE IF NOT EXISTS events (
    event_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    event_date TEXT NOT NULL,
    published_date TEXT,
    created_date TEXT NOT NULL,
    updated_date TEXT,
    status TEXT NOT NULL DEFAULT 'draft' -- 'draft' or 'published'
);

-- Tickets Table
-- Stores ticket types and pricing for each event
-- ticket_type: 'full' or 'concession'
CREATE TABLE IF NOT EXISTS tickets (
    ticket_id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER NOT NULL,
    ticket_type TEXT NOT NULL, -- 'full' or 'concession'
    quantity INTEGER NOT NULL,
    price INTEGER NOT NULL,
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

-- Organisers Table
-- Stores organiser account information for authentication
-- password_hash: Store hashed password, never plain text
CREATE TABLE IF NOT EXISTS organisers (
    organiser_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL, -- Store hashed password, never plain text
    created_date TEXT NOT NULL,
    updated_date TEXT NOT NULL
);

-- Attendees Table
-- Stores attendee account information for authentication
-- is_special: 0 = false, 1 = true (determines concession ticket access)
-- password_hash: Store hashed password, never plain text
CREATE TABLE IF NOT EXISTS attendees (
    attendee_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL, -- Store hashed password, never plain text
    is_special INTEGER DEFAULT 0, -- 0 = false, 1 = true (for concession ticket access)
    created_date TEXT NOT NULL,
    updated_date TEXT NOT NULL
);

-- Bookings Table
-- Stores ticket bookings made by attendees
-- Links events to attendees with ticket quantities
CREATE TABLE IF NOT EXISTS bookings (
    booking_id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER NOT NULL,
    attendee_id INTEGER NOT NULL,
    full_tickets INTEGER DEFAULT 0,
    concession_tickets INTEGER DEFAULT 0,
    booking_date TEXT NOT NULL,
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (attendee_id) REFERENCES attendees(attendee_id)
);


-- SEED DATA
-- Insert default site settings
INSERT INTO site_settings (site_name, site_description) VALUES ('Event Manager', 'Your event management system');


COMMIT;
