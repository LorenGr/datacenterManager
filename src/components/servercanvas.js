import React from 'react';
import {connect} from 'react-redux';

//Application Components
import ServerContainer from './servercontainer';

export class ServerCanvas extends React.Component {

    constructor(props) {
        super(props);
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                this.props.dispatch({type: 'ADD_SERVER'});
            }, i * 500);
        }
    }

    render() {
        return (
            <div>
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

export default connect(mapStateToProps)(ServerCanvas);
