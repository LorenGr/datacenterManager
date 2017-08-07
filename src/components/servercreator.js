import React from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss';

const styles = {
    button: {
        border: '2px solid darkgrey',
        background: 'none',
        color: 'darkgrey',
        width: 43,
        height: 44,
        fontSize: 30,
        cursor: 'pointer',
        borderRadius: 20,
        marginRight: 7,
        fontWeight: 'bold'
    },
    buttonLabel: {
        marginTop: 20,
        display: 'block',
        fontSize:11,
        margin:8
    },
    col : {
        display:'inline-block'
    },

    container: {
        marginTop: 15,
        marginBottom: 20,
        textAlign: 'center',
        height: 70
    }
}

export class ServerCreator extends React.Component {

    constructor(props) {
        super(props);
        this.addServer = this.addServer.bind(this);
        this.destroyServer = this.destroyServer.bind(this);
    }

    addServer() {
        this.props.dispatch({type: 'ADD_SERVER'});
    }

    destroyServer() {
        this.props.dispatch({type: 'DESTROY_SERVER'});
    }

    render() {
        let classes = this.props.classes;
        return (
            <div className={classes.container}>

                <div className={classes.col}>
                    <button className={classes.button}
                            onClick={this.addServer}>+
                    </button>
                    <label className={classes.buttonLabel}>
                        Add Server</label>
                </div>

                <div className={classes.col}>
                    <button className={classes.button}
                            onClick={this.destroyServer}>-
                    </button>
                    <label className={classes.buttonLabel}>
                        Destroy</label>
                </div>
            </div>
        )
    }
}

export default connect()(
    injectSheet(styles)(ServerCreator)
);