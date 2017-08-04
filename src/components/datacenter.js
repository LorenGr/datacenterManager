import React from 'react';

//App Components
import ServerCanvas from './servercanvas';
import ServerCreator from './servercreator';
import AppInstCreator from './appinstcreator';

const DataCenter = () => (
    <div>
        <header>
            <h1>DataCenter Management</h1>
        </header>
        <aside>
            <nav>
                <ServerCreator/>
                <AppInstCreator/>
            </nav>
        </aside>
        <section>
            <ServerCanvas/>
        </section>
    </div>
)

export default DataCenter;