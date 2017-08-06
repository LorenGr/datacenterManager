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
    createAppInstance(app) {
        this.props.dispatch({
            type: 'ADD_APP_INST', app
        })
    }

    destroyAppInstance(app) {
        this.props.dispatch({
            type: 'DESTROY_APP_INST', app
        })
    }

    constructor(props) {
        super(props);
        this.createAppInstance = this.createAppInstance.bind(this);
        this.destroyAppInstance = this.destroyAppInstance.bind(this);
    }


    render() {
        return (
            <ul>
                {applications.map(app => {
                    return (
                        <li key={app.id}>
                            {app.label}
                            <div>
                                <button onClick={() => {
                                    this.createAppInstance(app)
                                }}>+
                                </button>
                                <button onClick={() => {
                                    this.destroyAppInstance(app)
                                }}>-
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
};

export default connect()(AppInstCreator);