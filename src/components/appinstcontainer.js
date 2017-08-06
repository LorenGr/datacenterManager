import React from 'react';
import {connect} from 'react-redux';

export class AppInstContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span> {this.props.app.application.label} </span>
        );
    }
}

export default connect()(AppInstContainer);