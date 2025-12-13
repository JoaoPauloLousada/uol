# Event Manager Implementation Plan

## Project Overview
Create an Event Manager web application with two main interfaces:
- **Organiser page**: Set up and publish events
- **Attendee page**: Browse and book published events

## Technical Stack
- **Node.js** with **Express.js** (server framework)
- **SQLite** (database)
- **EJS** (Embedded JavaScript Templates for server-side rendering)
- **express-session** (session management for authentication)
- **bcrypt** (password hashing)

## Authentication Requirements

### Organiser Authentication
- Organisers must sign in to access organiser pages
- All organiser routes are protected (require authentication)
- Organisers can register and login
- Session-based authentication

### Attendee Authentication
- Attendees must sign in to book tickets
- Attendee home page and event viewing are public
- Booking functionality requires authentication
- Attendees can be marked as "special" for concession ticket access
- Special attendees (`is_special = 1`) can purchase concession tickets
- Regular attendees can only purchase full-price tickets

---

## Phase 1: Database Design (START HERE)

### Database Schema Design

Design the database schema in `db_schema.sql`:

#### 1. Site Settings Table
```sql
CREATE TABLE IF NOT EXISTS site_settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    site_name TEXT NOT NULL,
    site_description TEXT NOT NULL
);
```

#### 2. Events Table
```sql
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
```

#### 3. Tickets Table
```sql
CREATE TABLE IF NOT EXISTS tickets (
    ticket_id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER NOT NULL,
    ticket_type TEXT NOT NULL, -- 'full' or 'concession'
    quantity INTEGER NOT NULL,
    price INTEGER NOT NULL,
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);
```

#### 4. Organisers Table
```sql
CREATE TABLE IF NOT EXISTS organisers (
    organiser_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL, -- Store hashed password, never plain text
    created_date TEXT NOT NULL
);
```

#### 5. Attendees Table
```sql
CREATE TABLE IF NOT EXISTS attendees (
    attendee_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL, -- Store hashed password, never plain text
    is_special INTEGER DEFAULT 0, -- 0 = false, 1 = true (for concession ticket access)
    created_date TEXT NOT NULL
);
```

**Note:** The `is_special` flag determines if an attendee can purchase concession-priced tickets. Only attendees with `is_special = 1` should be allowed to book concession tickets.

#### 6. Bookings Table
```sql
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
```

---

## Phase 2: Route Structure

### Route Files to Create

#### 1. `routes/auth.js` - Authentication Routes
- `GET /auth/organiser/login` - Organiser login page
- `POST /auth/organiser/login` - Process organiser login
- `GET /auth/organiser/logout` - Organiser logout
<!-- - `GET /auth/organiser/register` - Organiser registration page -->
- `POST /auth/organiser/register` - Process organiser registration
- `GET /auth/attendee/login` - Attendee login page
- `POST /auth/attendee/login` - Process attendee login
- `GET /auth/attendee/logout` - Attendee logout
- `GET /auth/attendee/register` - Attendee registration page
- `POST /auth/attendee/register` - Process attendee registration

#### 2. `routes/organiser.js` - Organiser Routes (Protected)
- `GET /organiser` - Organiser home page (requires authentication)
- `GET /organiser/settings` - Site settings page (requires authentication)
- `POST /organiser/settings` - Update site settings (requires authentication)
- `GET /organiser/event/new` - Create new event (requires authentication)
- `GET /organiser/event/:id/edit` - Edit event page (requires authentication)
- `POST /organiser/event/:id/edit` - Save event changes (requires authentication)
- `POST /organiser/event/:id/publish` - Publish event (requires authentication)
- `POST /organiser/event/:id/delete` - Delete event (requires authentication)

#### 3. `routes/attendee.js` - Attendee Routes
- `GET /attendee` - Attendee home page (public, but login available)
- `GET /attendee/event/:id` - View event details (public)
- `POST /attendee/event/:id/book` - Create booking (requires authentication)

#### 4. Update `index.js`
- Update the home route (`/`) to show links to organiser and attendee pages
- Add route handlers for auth, organiser, and attendee
- Add authentication middleware to protect organiser routes
- Add session management (using express-session)

---

## Phase 3: View Files (EJS Templates)

### Templates to Create

1. **`views/main.ejs`** - Main home page with links
2. **`views/auth/organiser-login.ejs`** - Organiser login form
3. **`views/auth/organiser-register.ejs`** - Organiser registration form
4. **`views/auth/attendee-login.ejs`** - Attendee login form
5. **`views/auth/attendee-register.ejs`** - Attendee registration form
6. **`views/organiser/home.ejs`** - Organiser dashboard
7. **`views/organiser/settings.ejs`** - Site settings form
8. **`views/organiser/edit-event.ejs`** - Event creation/editing form
9. **`views/attendee/home.ejs`** - Attendee event listing
10. **`views/attendee/event.ejs`** - Event details and booking form

---

## Phase 4: Implementation Order

### Step-by-Step Implementation Checklist

1. ✅ **Database Schema** - Create all tables in `db_schema.sql` (including organisers and attendees)
2. ✅ **Authentication System** - Implement login/register for organisers and attendees
3. ✅ **Session Management** - Set up express-session for maintaining login state
4. ✅ **Authentication Middleware** - Protect organiser routes
5. ✅ **Main Home Page** - Simple links page (`/`)
6. ✅ **Site Settings** - CRUD for site name/description (protected)
7. ✅ **Organiser Home Page** - List published and draft events (protected)
8. ✅ **Event Creation** - Create draft events (protected)
9. ✅ **Event Editing** - Update event details (protected)
10. ✅ **Event Publishing** - Change status from draft to published (protected)
11. ✅ **Attendee Home Page** - List published events (public)
12. ✅ **Event Booking** - Allow ticket purchases (requires attendee login)
13. ✅ **Concession Ticket Logic** - Validate special attendee status for concession tickets
14. ✅ **Delete Functionality** - Remove events (protected)

---

## Phase 5: Important Implementation Considerations

### 1. Date Handling
- Use ISO format (`YYYY-MM-DD`) or timestamps for dates
- Consider using `date-fns` library for date formatting
- Store dates as TEXT in SQLite (ISO format recommended)

### 2. Form Validation
- **Server-side validation is REQUIRED**
- Consider using `express-validator` or `Joi` for validation
- Validate all inputs before database operations

### 3. Ticket Availability Logic
- Check available tickets before allowing booking
- Calculate available tickets: `total_quantity - sum(booked_tickets)`
- Update ticket quantities when bookings are made
- Prevent booking more tickets than available

### 4. Error Handling
- Add error handling middleware in `index.js`
- Provide user-friendly error messages
- Log errors for debugging

### 5. Authentication & Sessions
- Use `express-session` for session management
- Store organiser_id and attendee_id in session after login
- Create authentication middleware to protect organiser routes
- Hash passwords using bcrypt (or similar) before storing
- Validate login credentials against database
- Redirect unauthenticated users to login pages

### 6. Concession Ticket Access
- Check `is_special` flag in attendees table
- Only allow attendees with `is_special = 1` to purchase concession tickets
- Validate concession ticket eligibility before booking
- Display appropriate ticket options based on attendee status

### 7. Styling
- Add CSS to `public/main.css`
- Consider Bootstrap for quick styling (if justified)
- Ensure responsive design

### 8. Code Organization Tips
- **Comments**: Comment each route (purpose, inputs, outputs)
- **Database Queries**: Comment database queries
- **Naming**: Use consistent naming conventions
  - camelCase for variables
  - kebab-case for routes
  - Meaningful function names
- **Database Queries**: Always use parameterized queries (prevent SQL injection)
- **Error Handling**: Handle errors properly in all database operations

---

## Phase 6: Base Requirements Checklist

### Main Home Page (`/`)
- [ ] Link to Organiser Home Page (or login if not authenticated)
- [ ] Link to Attendee Home Page
- [ ] Links to login/register pages

### Authentication Pages
- [ ] Organiser login page (`/auth/organiser/login`)
- [ ] Organiser registration page (`/auth/organiser/register`)
- [ ] Attendee login page (`/auth/attendee/login`)
- [ ] Attendee registration page (`/auth/attendee/register`)
- [ ] Logout functionality for both user types
- [ ] Session management (maintain login state)
- [ ] Password hashing before storage

### Organiser Home Page (`/organiser`) - Protected Route
- [ ] Require authentication (redirect to login if not authenticated)
- [ ] Display logged-in organiser username
- [ ] Logout button
- [ ] Heading indicating "Organiser Home Page"
- [ ] Display site name and description
- [ ] Link to Site Settings Page
- [ ] "Create New Event" button (creates draft and redirects to edit page)
- [ ] List of published events with:
  - Title, date, created date, published date
  - Number of each ticket type for sale
  - Sharing link to Attendee Event Page
  - Delete button
- [ ] List of draft events with:
  - Title, date, created date, published date
  - Number of each ticket type for sale
  - Link to edit page
  - Publish button
  - Delete button

### Site Settings Page (`/organiser/settings`) - Protected Route
- [ ] Require authentication (redirect to login if not authenticated)
- [ ] Heading indicating "Site Settings Page"
- [ ] Form with text inputs for name and description
- [ ] Form dynamically populated with current settings
- [ ] Submit button (updates settings, redirects to Organiser Home)
- [ ] Form validation (all fields required)
- [ ] Back button to Organiser Home Page

### Organiser Edit Event Page (`/organiser/event/:id/edit`) - Protected Route
- [ ] Require authentication (redirect to login if not authenticated)
- [ ] Heading indicating "Organiser Edit Event Page"
- [ ] Display event creation date
- [ ] Form with fields:
  - Event title
  - Event description
  - Number and price of full-price tickets
  - Number and price of concession-priced tickets
- [ ] Submit changes button
- [ ] Form populated with current event data when editing
- [ ] Update last modified date on submit
- [ ] Back button to Organiser Home Page

### Attendee Home Page (`/attendee`)
- [ ] Heading indicating "Attendee Home Page"
- [ ] Display site name and description
- [ ] List of published events
- [ ] Each event shows title and date
- [ ] Events ordered by event date (next event at top)
- [ ] Clicking event takes user to Attendee Event Page

### Attendee Event Page (`/attendee/event/:id`)
- [ ] Heading indicating "Attendee Event Page"
- [ ] Display single event (determined by URL)
- [ ] Display event information:
  - Title
  - Description
  - Date
  - Ticket types and prices
- [ ] Show login prompt if not authenticated
- [ ] If authenticated, show booking form:
  - Form to select number of each ticket type
  - Display logged-in attendee name (from session)
  - Book button
  - Validation: only allow booking available tickets
  - Concession ticket option only visible if attendee is_special = 1
- [ ] Validation: prevent non-special attendees from booking concession tickets
- [ ] Back button to Attendee Home Page

---

## Phase 7: Extension Ideas

Consider implementing an extension that demonstrates:
- Server-side functionality understanding
- Database relationships and queries
- Express.js routing and middleware
- Data validation and error handling

**Possible Extension Ideas:**
- Event search/filtering functionality
- Booking history/confirmation system (for authenticated attendees)
- Email notifications
- Event categories/tags
- Booking cancellation system
- Waitlist functionality
- Analytics/reporting dashboard
- Profile management for organisers and attendees
- Password reset functionality
- Event favorites/wishlist for attendees

---

## Phase 8: Testing Checklist

Before submission, test:
- [ ] All routes work correctly
- [ ] Authentication works (login/logout for both user types)
- [ ] Protected routes redirect to login when not authenticated
- [ ] Sessions persist correctly
- [ ] Password hashing works
- [ ] Concession ticket access restricted to special attendees
- [ ] Database operations succeed
- [ ] Form validations work
- [ ] Ticket availability calculations are correct
- [ ] Delete operations work
- [ ] Publish/unpublish functionality works
- [ ] Navigation between pages works
- [ ] Error handling displays properly
- [ ] Run `npm install` from scratch
- [ ] Run `npm run build-db` successfully
- [ ] Run `npm run start` and test all functionality

---

## Phase 9: Submission Preparation

### Files to Remove Before Submission
- [ ] `node_modules/` directory
- [ ] `.git/` directory (hidden)
- [ ] `database.db` file

### Files to Include
- [ ] All source code files
- [ ] `package.json` with all dependencies listed
- [ ] `db_schema.sql` (complete and tested)
- [ ] `README.md` (updated with setup instructions and library list)

### Documentation Requirements
- [ ] Architecture diagram (3-tier architecture)
- [ ] ER diagram (database schema with relationships)
- [ ] Extension description and explanation
- [ ] Code snippets with file names and line numbers

### Video Requirements
- [ ] Maximum 2.5 minutes
- [ ] Demonstrate all functionality including extension
- [ ] Talk through what you're showing
- [ ] MP4 format recommended

---

## Notes

- All database tables must be created in `db_schema.sql`
- Do NOT create tables through other means
- Use parameterized queries to prevent SQL injection
- Comment all routes and database queries
- Ensure code is human-readable
- Test thoroughly before submission
- Use `express-session` for session management (add to package.json)
- Use `bcrypt` or similar for password hashing (add to package.json)
- Store password hashes, never plain text passwords
- Validate all user inputs before database operations

