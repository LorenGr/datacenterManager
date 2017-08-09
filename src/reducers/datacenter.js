import sortBy from 'lodash.sortby';

export default function datacenter(state = {
    servers: {}, apps: {}
}, action) {
    let new_state = JSON.parse(JSON.stringify(state));
    const generateID = () => new Date().getTime(),
        findIndexAndRemove = (arr, callback) => {
            arr.splice(arr.findIndex(callback), 1)
        };
    let unique_id;

    const getNextAvailableServer = () => {
        let sorted_servers = sortBy(new_state.servers, 'created').reverse();
        let availableServer = false;
        const getFirstServerWith = (amount) => {
            //Find empty servers
            sorted_servers.map((server) => {
                if (server.apps.length === amount) {
                    availableServer = server.id;
                    return false;
                }
            });
            return availableServer;
        }
        return getFirstServerWith(0) || getFirstServerWith(1);
    }

    switch (action.type) {
        case "ADD_SERVER" :
            unique_id = generateID();
            new_state.servers[unique_id] = {
                'created': unique_id,
                'id': unique_id,
                'apps': []
            };
            return new_state;

        case "DESTROY_SERVER" :
            if (!Object.keys(new_state.servers).length) return new_state;

            //Find last server created
            let sorted_servers = sortBy(new_state.servers, 'created').reverse();

            //Extract applications from server to be killed
            let purgedAppInstances = new_state.servers[sorted_servers[0].id].apps;

            //Kill server
            delete new_state.servers[sorted_servers[0].id];

            if (purgedAppInstances.length) {
                purgedAppInstances.forEach(instance => {
                        let nextServer = getNextAvailableServer();

                        if (nextServer) {
                            //Point extraced application instances to a new server
                            instance.server = nextServer;
                            new_state.servers[nextServer].apps.push(instance);
                            new_state.apps[instance.application.id].forEach(appInstance => {
                                if (appInstance.id === instance.id)
                                    appInstance.server = nextServer;
                            });
                        } else {
                            //No server to point to, therefore kill application instances
                            findIndexAndRemove(
                                new_state.apps[instance.application.id],
                                (appInstance) => appInstance.id === instance.id
                            );
                        }
                    }
                );
            }
            return new_state;

        case "ADD_APP_INST" :
            if (!Object.keys(new_state.servers).length) return new_state;
            let server = getNextAvailableServer();
            if (!server) return new_state;
            unique_id = generateID();
            let app = {
                'created': unique_id,
                'id': unique_id,
                'application': action.app,
                server
            };
            //Add new application instance
            if (!new_state.apps[action.app.id]) new_state.apps[action.app.id] = [];
            new_state.apps[action.app.id].push(app);
            new_state.servers[server].apps.push(app);
            return new_state;

        case 'DESTROY_APP_INST' :
            if (!new_state.apps[action.app.id] || !new_state.apps[action.app.id].length) return new_state;

            //If an instance not specified then delete last one created
            let lastInstance = action.instance || new_state.apps[action.app.id].pop();

            //If an instance specified then delete it
            if(action.instance) {
                findIndexAndRemove(
                    new_state.apps[action.app.id],
                    (appInstance) => appInstance.id === lastInstance.id
                );
            }

            //Delete application reference on server instance
            findIndexAndRemove(
                new_state.servers[lastInstance.server].apps,
                (app) => app.id === lastInstance.id
            );
            return new_state;

        default :
            return state;
    }
}