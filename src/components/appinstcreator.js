import React from 'react';
import {connect} from 'react-redux';

const applications = [
    {id: 0, label: "Hadoop"},
    {id: 1, label: "Rails"},
    {id: 2, label: "Chronos"},
    {id: 3, label: "Storm"},
    {id: 4, label: "Spark"},
];

export class AppInstCreator extends React.Component {
    createAppInstance(appid) {
        this.props.dispatch({
            type: 'ADD_APP_INST',
            id: appid
        })
    }

    destroyAppInstance(appid) {
        this.props.dispatch({
            type: 'DESTROY_APP_INST',
            id: appid
        })
    }

    constructor(props) {
        super(props);
        this.createApplicationInstance = this.createAppInstance.bind(this);
        this.destroyApplicationInstance = this.destroyAppInstance.bind(this);
    }


    render() {
        return (
            <ul>
                {applications.map(app => {
                    return (
                        <li key={app.id}>
                            {app.label}
                            <div>
                                <button onClick={this.createApplicationInstance(app.id)}>+</button>
                                <button onClick={this.destroyApplicationInstance(app.id)}>-</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
};

export default connect()(AppInstCreator);