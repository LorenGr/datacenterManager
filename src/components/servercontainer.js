import React from 'react';
import {connect} from 'react-redux';

//Application Components
import AppInstContainer from './appinstcontainer';

export class ServerContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let app_instanes;
        let apps = this.props.server.apps;

        if (!apps.length) {
            app_instanes = <span>[]</span>;
        }

        if (apps.length == 1) {
            app_instanes = <div>
                [<AppInstContainer app={apps[0]} />]
            </div>;
        }

        if (apps.length == 2) {
            app_instanes = <div className='partitioned'>
                [<AppInstContainer app={apps[0]}  />
                |<AppInstContainer app={apps[1]} />
                ]
            </div>;
        }

        return (app_instanes);

    }
}

export default connect()(ServerContainer);