/**
 * seedDB.js
 * Script to seed the database with initial organiser data
 * 
 * Purpose: Create a test organiser account for development/testing
 * Usage: node seedDB.js
 */

const sqlite3 = require('sqlite3').verbose();
const { RegisterOrganiser, RegisterOrganiserParams } = require('./modules/auth/register-organiser.action');

// Database connection
const dbPath = './database.db';

/**
 * Connect to the database and set up global.db
 * @returns {Promise} - Promise that resolves when database is connected
 */
function connectDatabase() {
    return new Promise((resolve, reject) => {
        global.db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error connecting to database:', err);
                reject(err);
            } else {
                console.log('Database connected');
                // Enable foreign key constraints
                global.db.run("PRAGMA foreign_keys=ON", (err) => {
                    if (err) {
                        console.error('Error enabling foreign keys:', err);
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            }
        });
    });
}

/**
 * Close the database connection
 */
function closeDatabase() {
    return new Promise((resolve, reject) => {
        if (global.db) {
            global.db.close((err) => {
                if (err) {
                    console.error('Error closing database:', err);
                    reject(err);
                } else {
                    console.log('Database connection closed');
                    resolve();
                }
            });
        } else {
            resolve();
        }
    });
}

/**
 * Seed the database with an organiser
 */
async function seedOrganiser() {
    try {
        // Connect to database
        await connectDatabase();

        // Create organiser parameters
        // Using test credentials that meet validation requirements
        const organiserParams = new RegisterOrganiserParams(
            'organiser1',                    // username
            'organiser@example.com',          // email
            'Password123!'                    // password (meets all requirements)
        );

        // Register the organiser
        const registerOrganiser = new RegisterOrganiser();
        const organiserId = await registerOrganiser.execute(organiserParams);

        console.log(`✓ Successfully created organiser with ID: ${organiserId}`);
        console.log(`  Username: ${organiserParams.username}`);
        console.log(`  Email: ${organiserParams.email}`);

    } catch (error) {
        console.error('✗ Error seeding organiser:', error.message);

        // Check if it's a unique constraint violation (organiser already exists)
        if (error.message.includes('UNIQUE constraint failed') ||
            error.message.includes('already exists')) {
            console.log('  Note: Organiser may already exist in the database');
        }

        throw error;
    } finally {
        // Close database connection
        await closeDatabase();
    }
}

// Run the seed script
if (require.main === module) {
    seedOrganiser()
        .then(() => {
            console.log('\n✓ Seed script completed successfully');
            process.exit(0);
        })
        .catch((error) => {
            console.error('\n✗ Seed script failed:', error.message);
            process.exit(1);
        });
}

module.exports = { seedOrganiser, connectDatabase, closeDatabase };

