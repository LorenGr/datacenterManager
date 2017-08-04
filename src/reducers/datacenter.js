export default function datacenter(state = {
    servers: [], apps: []
}, action) {
    let new_state = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "ADD_SERVER" :
            new_state.servers.push(
                {
                    'created': new Date(),
                    'id': new Date().getTime(),
                    'partitioned': false
                }
            );
            return new_state;

        case "DESTROY_SERVER" :
            new_state.servers.pop();
            return new_state;

        default :
            return state;
    }
}