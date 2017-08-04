import React from 'react';

//App Components
import ServerCanvas from './server';
import ServerCreator from './servercreator';
import AppInstCreator from './appinstcreator';

export default class Datacenter extends React.Component {
    render() {
        return (
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
        );
    }
}