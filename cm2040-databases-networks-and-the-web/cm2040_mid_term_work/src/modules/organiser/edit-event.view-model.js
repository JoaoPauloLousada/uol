/**
 * EditEventViewModel
 *
 * View model for the organiser event edit page.
 * Contains data structure for displaying and editing event information.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * View model class for organiser event edit page.
 *
 * Provides data structure containing event details, ticket information,
 * and action URLs for rendering the event edit form.
 */
class EditEventViewModel {
    error = null;
    actions = {
        edit: {
            url: '/organiser/event/edit/',
        },
    };
    event = {
        id: null,
        title: '',
        description: '',
        eventDate: '',
        createdDate: '',
        updatedDate: '',
        status: '',
        tickets: {
            full: {
                quantity: 0,
                price: 0
            },
            concession: {
                quantity: 0,
                price: 0
            }
        }
    };
}

module.exports.EditEventViewModel = EditEventViewModel;

