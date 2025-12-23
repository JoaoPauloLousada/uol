# Event Management System

A web application for managing events, tickets, and bookings. Supports two user roles: organisers (create/manage events) and attendees (browse/book tickets).

## Installation

```bash
npm install
```

## Build & Run

**Build database:**
```bash
npm run build-db
```

**Start application:**
```bash
npm start
```

The application runs on `http://localhost:3000`

## seedDB.js

Creates an initial test organiser account for development:
- **Username:** `organiser1`
- **Email:** `organiser@example.com`
- **Password:** `Password123!`

Run manually: `node seedDB.js` (or automatically via `build-db` script)

## Third-Party Libraries

- **express** - Web framework
- **ejs** - Template engine for views
- **express-session** - Session management
- **sqlite3** - SQLite database driver
- **bcrypt** - Password hashing
- **zod** - Schema validation

## Architecture

### File Naming Conventions

- **`.action.js`** - Business logic classes (database operations, validations)
- **`.route.js`** - Express route handlers (HTTP endpoints)
- **`.view-model.js`** - Data structures for view rendering
- **`.js`** (no suffix) - Entity classes or utility classes

### Project Structure

```
src/
├── modules/           # Business logic organized by domain
│   ├── attendee/      # Attendee-related actions and view models
│   ├── auth/          # Authentication actions
│   ├── booking/       # Booking actions
│   ├── event/         # Event management actions
│   ├── organiser/     # Organiser-related actions and view models
│   ├── site-settings/ # Site configuration
│   └── tickets/       # Ticket entities
├── routes/            # Express route definitions
├── middleware/        # Authentication middleware
├── views/             # EJS templates
└── public/            # Static assets
```

## Routes & Features

### Public Routes
- `GET /` - Home page with routes for organiser and attendee section

### Authentication (`/auth`)
- `GET /auth/organiser/login` - Organiser login page
- `POST /auth/organiser/login` - Organiser authentication
- `POST /auth/organiser/logout` - Organiser logout
- `GET /auth/attendee/login` - Attendee login page
- `POST /auth/attendee/login` - Attendee authentication
- `POST /auth/attendee/logout` - Attendee logout
- `GET /auth/attendee/signup` - Attendee registration page
- `POST /auth/attendee/signup` - Create attendee account

### Organiser Routes (`/organiser`) - Requires authentication
- `GET /organiser` - Dashboard (published & draft events)
- `GET /organiser/event/new` - Create new event
- `GET /organiser/event/edit/:id` - Edit event page
- `POST /organiser/event/edit/:id` - Update event
- `POST /organiser/event/publish/:id` - Publish event
- `POST /organiser/event/unpublish/:id` - Unpublish event
- `POST /organiser/event/delete/:id` - Delete event
- `GET /organiser/site-settings` - Site settings page
- `POST /organiser/site-settings` - Update site settings
- `GET /organiser/attendees` - Manage attendees
- `POST /organiser/attendees/toggle-special/:attendee_id` - Toggle attendee special status

### Attendee Routes (`/attendee`)
- `GET /attendee` - Browse published events
- `GET /attendee/event/:id` - View event details
- `POST /attendee/event/book/:event_id` - Create booking
- `GET /attendee/my-bookings` - View bookings (requires authentication)

## Features

- **Event Management:** Create, edit, publish/unpublish, and delete events
- **Ticket Management:** Full and concession ticket types with pricing
- **Booking System:** Attendees can book tickets for published events
- **Special Attendees:** Organisers can grant special status (concession ticket access)
- **Site Settings:** Customizable site name and description
- **Session-based Authentication:** Separate login for organisers and attendees
- **Password Security:** Bcrypt hashing with validation rules

