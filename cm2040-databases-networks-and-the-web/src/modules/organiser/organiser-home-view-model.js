const { SiteSettings } = require("../site-settings/site-settings");

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

class OrganiserHomeViewModel {
    error = null;
    siteSettings = new SiteSettings(0, 'site name', 'site description');
    event = {
        actions: {
            create: {
                url: '/organiser/event/create',
            },
            publish: {
                url: '/organiser/event/publish',
            },
            delete: {
                url: '/organiser/event/delete',
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