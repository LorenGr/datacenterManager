import React from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss';
import TimeAgo from 'timeago-react';

const styles = {
    container: {
        height: '100%',
        textAlign: 'center',
        paddingTop: 25,
        lineHeight: '30px',
    },
    partitionedContainer: {
        width: '50%',
        height: '100%',
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'top',
        lineHeight: '30px',
        paddingTop: 25
    },
    appName: {
        fontSize: 11,
        margin: 0,

    },
    appShortName: {
        marginTop: 3,
        marginBottom: 4,
        fontSize: 50
    },
    created: {
        fontSize: 8,
        color:'black'
    },
    createdDate: {
        marginLeft: 3
    }
};

const AppInstanceContent = ({app, classes}) => (
    <div>
        <h2 className={classes.appName}>{app.application.label}</h2>
        <h1 className={classes.appShortName}>{app.application.short}</h1>
        <small className={classes.created}>Added
            <TimeAgo className={classes.createdDate} live={false} datetime={app.created}/>
        </small>
    </div>
);


export class AppInstContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render(props) {
        const classes = this.props.classes;
        return this.props.partitioned ? (
            <div style={{backgroundColor: this.props.app.application.color}}
                 className={classes.partitionedContainer}>
                <AppInstanceContent {...this.props} />
            </div>
        ) : (
            <div style={{backgroundColor: this.props.app.application.color}
            } className={classes.container}>
                <AppInstanceContent {...this.props}/>
            </div>
        )
    }
}

export default connect()(
    injectSheet(styles)(AppInstContainer)
);