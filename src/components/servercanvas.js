import React from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss'

//Application Components
import ServerContainer from './servercontainer';

const styles = {
    canvas: {
        backgroundColor: 'black'
    }
};

export class ServerCanvas extends React.Component {

    constructor(props) {
        super(props);
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                this.props.dispatch({type: 'ADD_SERVER'});
            }, i * 150);
        }
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.canvas}>
                {Object.keys(this.props.servers).map(key => {
                    let server = this.props.servers[key];
                    return (<ServerContainer key={server.id} server={server}/> )
                })}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return ({
        servers: state.datacenter.servers
    });
}

export default connect(mapStateToProps)(
    injectSheet(styles)(ServerCanvas)
);
