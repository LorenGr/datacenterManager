import React from 'react';
import injectSheet from 'react-jss';

//App Components
import ServerCanvas from './servercanvas';
import ServerCreator from './servercreator';
import AppInstCreator from './appinstcreator';

const styles = {
    container: {
        margin: 0,
        fontFamily: 'Open Sans',
        color: 'white'
    },
    aside: {
        color: 'white',
        width: 200,
        marginLeft: 40,
        backgroundColor: 'dimgrey',
        position : 'fixed',
        top : 0,
        height: '100%'
    },
    section: {
        marginLeft: 278
    }
};

const DataCenter = ({classes}) => (
    <div className={classes.container}>

        <aside className={classes.aside}>
            <nav>
                <ServerCreator/>
                <AppInstCreator/>
            </nav>
        </aside>
        <section className={classes.section}>
            <header>
                <h1> DataCenter Management</h1>
            </header>
            <ServerCanvas/>
        </section>
    </div>
)

export default injectSheet(styles)(DataCenter);