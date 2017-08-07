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
        color: 'white',
        marginTop : 40
    },
    aside: {
        color: 'white',
        width: 200,
        marginLeft: 40,
        backgroundColor: 'dimgrey',
        position: 'fixed',
        top: 0,
        height: '100%'
    },
    asideTitle: {
        fontSize: 13,
        margin: 20,
        display: 'block',
        paddingTop: 22,
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
                <small className={classes.asideTitle}>Available apps</small>
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