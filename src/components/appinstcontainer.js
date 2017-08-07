import React from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss';
import TimeAgo from 'timeago-react';

const styles = {
    container: {
        height: '100%',
        textAlign: 'center',
        lineHeight: '30px',
    },
    partitionedContainer: {
        width: '50%',
        height: '100%',
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'top',
        lineHeight: '30px',
    },
    appName: {
        fontSize: 11,
        margin: 0,
        lineHeight: '20px'

    },
    appShortName: {
        marginTop: 3,
        marginBottom: 4,
        fontSize: 50
    },
    created: {
        fontSize: 8,
        color: 'black'
    },
    createdDate: {
        marginLeft: 3
    },
    deleteButton: {
        background: 'none',
        border: '1px solid white',
        padding: '6px 10px',
        marginTop: 7,
        color: 'white',
        fontWeight: 'bold',
        marginRight: 7,
        borderRadius: 14,
        cursor: 'pointer',
        opacity: 0.4,
        '&:hover': {
            opacity: 1
        }
    },
    deleteButtonContainer: {
        textAlign: 'right'
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

const AppInstanceDelete = ({onClick, app, classes}) => (
    <div className={classes.deleteButtonContainer}>
        <button onClick={onClick} className={classes.deleteButton}>-
        </button>
    </div>
);

export class AppInstContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    deleteInstance(instance) {
        this.props.dispatch({
            type: 'DESTROY_APP_INST',
            app: instance.application,
            instance
        });

    }

    render(props) {
        const classes = this.props.classes;
        return this.props.partitioned ? (
            <div style={{backgroundColor: this.props.app.application.color}}
                 className={classes.partitionedContainer}>
                <AppInstanceDelete onClick={() => this.deleteInstance(this.props.app)} {...this.props}  />
                <AppInstanceContent {...this.props} />
            </div>
        ) : (
            <div style={{backgroundColor: this.props.app.application.color}
            } className={classes.container}>
                <AppInstanceDelete onClick={() => this.deleteInstance(this.props.app)} {...this.props} />
                <AppInstanceContent {...this.props}/>
            </div>
        )
    }
}

export default connect()(
    injectSheet(styles)(AppInstContainer)
);