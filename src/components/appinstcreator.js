import React from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss';

const applications = [
    {id: 0, label: "Hadoop", short: "Hd", color: 'pink'},
    {id: 1, label: "Rails", short: "Rl", color: 'orange'},
    {id: 2, label: "Chronos", short: "Ch", color: 'red'},
    {id: 3, label: "Storm", short: "St", color: 'blue'},
    {id: 4, label: "Spark", short: "Sp", color: 'green'},
];

const styles = {
    ul: {
        margin: 0,
        padding: 0,
        marginBottom: 50
    },
    li: {
        listStyle: 'none',
        width: 200,
        clear: 'right',
        borderLeftStyle: 'solid',
        borderLeftWidth: 4,
        height: 40,
        lineHeight: '37px',
        textIndent: 16,
        marginTop: 1,
        backgroundColor: 'grey',

    },
    buttonsContainer: {
        display: 'inline-block',
        float: 'right',
        right: -18,
        position: 'relative'
    },
    button: {
        border: '2px solid darkgrey',
        background: 'none',
        color: 'darkgrey',
        width: 26,
        height: 27,
        cursor: 'pointer',
        borderRadius: 20,
        marginRight: 7,
        fontWeight: 'bold',
        '&:hover': {
            border: '2px solid white',
            color: 'white'
        }
    },
    creatorButton: {
        border: 'none',
        color: 'white'
    },
    amount : {
        color : 'darkgrey',
        fontSize : 12,
        marginLeft:7,
        fontWeight:'bold'
    }

};

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

    render(props) {
        const classes = this.props.classes;
        return (
            <ul className={classes.ul}>
                {applications.map(app => {
                    let appInstancesAmount = this.props.apps[app.id] && this.props.apps[app.id].length;
                    return (
                        <li style={{borderLeftColor: app.color}}
                            className={classes.li} key={app.id}>
                            {app.label}
                            {appInstancesAmount > 0 ?
                                (<span className={classes.amount}>
                                    ({appInstancesAmount})
                                </span>) : <span/>}
                            <div className={classes.buttonsContainer}>

                                <button className={classes.button} onClick={() => {
                                    this.destroyAppInstance(app)
                                }}>-
                                </button>

                                <button style={{background: app.color}} className={
                                    [classes.button, classes.creatorButton].join(' ')
                                } onClick={() => {
                                    this.createAppInstance(app)
                                }}>+
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
};

function mapStateToProps(state) {
    return {
        apps: state.datacenter.apps
    }
}

export default connect(mapStateToProps)(
    injectSheet(styles)(AppInstCreator)
);