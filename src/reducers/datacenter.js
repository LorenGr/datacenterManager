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
        sorted_servers.map((server) => {
            if (server.apps.length < 2) {
                availableServer = server.id;
                return false;
            }
        });
        return availableServer;
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
            let sorted_servers = sortBy(new_state.servers, 'created').reverse();
            let purgedAppInstances = new_state.servers[sorted_servers[0].id].apps;
            delete new_state.servers[sorted_servers[0].id];
            if (purgedAppInstances.length) {
                purgedAppInstances.forEach(instance => {
                        let nextServer = getNextAvailableServer();

                        if (nextServer) {
                            new_state.servers[nextServer].apps.push(instance);

                        } else {
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
            if (!new_state.apps[action.app.id]) new_state.apps[action.app.id] = [];
            new_state.apps[action.app.id].push(app);
            new_state.servers[server].apps.push(app);
            return new_state;

        case 'DESTROY_APP_INST' :
            if (!new_state.apps[action.app.id].length) return new_state;
            let lastInstance = new_state.apps[action.app.id].pop();
            findIndexAndRemove(
                new_state.servers[lastInstance.server].apps,
                (app) => app.id === lastInstance.id
            );
            return new_state;

        default :
            return state;
    }
}