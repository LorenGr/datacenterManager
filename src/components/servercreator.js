import React from 'react';
import {connect} from 'react-redux';

export class ServerCreator extends React.Component {

    constructor(props) {
        super(props);
        this.addServer = this.addServer.bind(this);
        this.destroyServer = this.destroyServer.bind(this);
    }

    addServer() {
        this.props.dispatch({type: 'ADD_SERVER'});
    }

    destroyServer() {
        this.props.dispatch({type: 'DESTROY_SERVER'});
    }

    render() {
        return (
            <div>
                <button onClick={this.addServer}>Create Server +</button>
                <button onClick={this.destroyServer}>Destroy Server -</button>
            </div>
        )
    }
}

export default connect()(ServerCreator);