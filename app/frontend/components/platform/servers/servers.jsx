import React from 'react';
import { fetchServers } from '../../../actions/servers_actions';

class Servers extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchServers();
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{Object.values(this.props.servers).map((server) => server.server_name)}</li>
                </ul>
            </div>
            // <h1>{this.state.userServers}</h1>
        );
    }
}

export default Servers;