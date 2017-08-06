import sortBy from 'lodash.sortby';

export default function datacenter(state = {
    servers: {}, apps: {}
}, action) {
    let new_state = JSON.parse(JSON.stringify(state));
    const generateID = () => new Date().getTime();
    let unique_id, sorted_servers;

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
            sorted_servers = sortBy(new_state.servers, 'created').reverse();
            delete new_state.servers[sorted_servers[0].id];
            return new_state;

        case "ADD_APP_INST" :

            if (!Object.keys(new_state.servers).length) return new_state;
            sorted_servers = sortBy(new_state.servers, 'created').reverse();
            let available_server = false;

            sorted_servers.map((server) => {
                if (server.apps.length < 2) {
                    available_server = server.id;
                    return false;
                }
            });
            if (!available_server) return new_state;

            unique_id = generateID();
            let app = {
                'created': unique_id,
                'id': unique_id,
                'application': action.app,
                'server': available_server
            };
            if (!new_state.apps[action.app.id]) new_state.apps[action.app.id] = [];
            new_state.apps[action.app.id].push(app);
            new_state.servers[available_server].apps.push(app);
            return new_state;

        case 'DESTROY_APP_INST' :
            if (!new_state.apps[action.app.id].length) return new_state;
            let last_instance = new_state.apps[action.app.id].pop();
            let purged_index = new_state.servers[last_instance.server].apps.findIndex(
                (app) => app.id === last_instance.id
            );
            new_state.servers[last_instance.server].apps.splice(purged_index, 1);
            return new_state;

        default :
            return state;
    }
}