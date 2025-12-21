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

