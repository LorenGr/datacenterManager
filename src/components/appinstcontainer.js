import React from 'react';
import {connect} from 'react-redux';

export class AppInstContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
               APP
            </div>
        )
    }
}

export default connect()(AppInstContainer);