/**
 * edit-event-view-model.js
 * View model for the edit event page
 */

class EditEventViewModel {
    error = null;
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
    }
}

module.exports.EditEventViewModel = EditEventViewModel;

