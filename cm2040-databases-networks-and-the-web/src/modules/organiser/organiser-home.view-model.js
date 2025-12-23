/**
 * OrganiserHomeViewModel
 *
 * View model for the organiser home page.
 * Contains data structure for displaying published and draft events with action URLs.
 * 
 * author: Joao Paulo Lousada
 */
const { SiteSettings } = require("../site-settings/site-settings");

/**
 * View model class for individual event display in organiser home.
 *
 * Provides data structure for rendering event information
 * including ticket details and action URLs.
 */
class EventViewModel {
    id = '';
    title = '';
    date = '';
    createdDate = '';
    publishedDate = '';
    tickets = [
        {
            id: 0,
            type: '',
            quantity: '',
            price: '',
            url: '',
            tickets: {
                full: {
                    quantity: '',
                    price: '',
                },
                concession: {
                    quantity: '',
                    price: '',
                }
            }
        }
    ]
}

/**
 * View model class for organiser home page.
 *
 * Provides data structure containing site settings, event lists
 * (published and draft), and action URLs for event management.
 */
class OrganiserHomeViewModel {
    error = null;
    siteSettings = new SiteSettings(0, 'site name', 'site description');
    event = {
        actions: {
            create: {
                url: '/organiser/event/new',
            },
            edit: {
                url: '/organiser/event/edit/',
            },
            publish: {
                url: '/organiser/event/publish/',
            },
            unpublish: {
                url: '/organiser/event/unpublish/',
            },
            delete: {
                url: '/organiser/event/delete/',
            },
            view: {
                url: '/attendee/event/',
            }
        },
        published: {
            list: [new EventViewModel()]
        },
        draft: {
            list: [new EventViewModel()]
        }
    }
}

module.exports.OrganiserHomeViewModel = OrganiserHomeViewModel;

