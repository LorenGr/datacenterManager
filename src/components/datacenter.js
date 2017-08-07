import React from 'react';
import injectSheet from 'react-jss';

//App Components
import ServerCanvas from './servercanvas';
import ServerCreator from './servercreator';
import AppInstCreator from './appinstcreator';

const styles = {
    container: {
        display: 'flex',
        backgroundColor: 'black',
        margin: 0,
        fontFamily: 'Open Sans',
        color: 'white'
    },
    aside: {
        color: 'white',
        width: 200,
        marginLeft: 40,
        backgroundColor: 'dimgrey'
    },
    section: {
        flex: 1,
        marginLeft: 40
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