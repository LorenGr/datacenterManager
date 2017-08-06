import React from 'react';
import {connect} from 'react-redux';

//Application Components
import AppInstContainer from './appinstcontainer';

export class ServerContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(<AppInstContainer partitioned={this.props.server.partitioned} />)
    }
};

export default connect()(ServerContainer);