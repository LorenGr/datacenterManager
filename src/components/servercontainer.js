import React from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss';

//Application Components
import AppInstContainer from './appinstcontainer';

const styles = {
    container: {
        backgroundColor: 'darkGray',
        width: 200,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        display: 'inline-block',
        height: 150,
        verticalAlign: 'top'
    },
    emptyContainer: {
        opacity: 0.3
    }
}

export class ServerContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render(props) {

        const classes = this.props.classes;
        let app_instances;
        let apps = this.props.server.apps;

        if (!apps.length) {
            app_instances = <div className={
                [classes.container, classes.emptyContainer].join(' ')}></div>;
        }

        if (apps.length === 1) {
            app_instances = <div className={classes.container}>
                <AppInstContainer partitioned={false} app={apps[0]}/>
            </div>;
        }

        if (apps.length === 2) {
            app_instances = <div className={classes.container}>
                <AppInstContainer partitioned={true} app={apps[0]}/>
                <AppInstContainer partitioned={true} app={apps[1]}/>
            </div>;
        }

        return (app_instances);

    }
}

export default connect()(
    injectSheet(styles)(ServerContainer)
);