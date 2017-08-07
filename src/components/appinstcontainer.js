import React from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss';

const styles = {
    container: {
        height: '100%',
        textAlign:'center'
    },
    partitionedContainer: {
        width:'50%',
        height: '100%',
        display:'inline-block',
        textAlign:'center'
    }

}

export class AppInstContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render(props) {
        const classes = this.props.classes;

        return this.props.partitioned ? (
            <div style={
                {backgroundColor: this.props.app.application.color}
            }
                 className={classes.partitionedContainer}>
                {this.props.app.application.label}
            </div>
        ) : (
            <div style={
                {backgroundColor: this.props.app.application.color}
            } className={classes.container}>
                {this.props.app.application.label}
            </div>
        )
    }
}

export default connect()(
    injectSheet(styles)(AppInstContainer)
);