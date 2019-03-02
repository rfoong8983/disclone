import React from 'react';
import { fetchServers } from '../../../actions/servers_actions';
import ServerItem from './server_item_container';
import { receiveCurrentServerId } from '../../../actions/ui_actions';

class Servers extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchServers();
        // debugger
    }

    serverItems(servers) {
        // use object.values outside ?
        // debugger
        return servers.map((server) => (
            <ServerItem
                key={server.id}
                server={server}
                receiveCurrentServerId={receiveCurrentServerId}
            />
        ));
    }

    render() {
        // handle rendering by servId/chanId in component vs in app.jsx routes
        return (
            <div className="servCo_outerWrapper">
                <div className="servCo_innerWrapper">
                    <div className="serveCo_homeServerIconOuter">
                        {/* ::before in className above, on focus */}
                        <div className="servCo_homeServerIconInner">
                            <a draggable="false" className="servCo_homeServerLogoLink" href="/#/channels/@me">
                                <i className="servCo_homeServerLogoIcon fas fa-compact-disc fa-2x"></i>
                            </a>
                        </div>
                    </div>

                    <div className="servCo_friendsOnline"></div>
                    <span className="servCo_topBarWrapper"></span>
                    <div className="servCo_topBarSep">{/* ::after in className */}</div>
                    

                    {/* START SERVERS HERE */}
                    <div>
                        <ul>
                            {/* render server_item_container here for each server? */}
                            {/* <li>{Object.values(this.props.servers).map((server) => server.server_name)}</li> */}
                            {this.serverItems(Object.values(this.props.servers))}
                        </ul>
                    </div>

                    {/* Use below block in server index item and place in UL above */}
                    {/* <div className="servCo_STARTSERVERSHERE"> */}
                        {/* <div draggable="true"> */}
                            {/* replace with next div with comment */}
                            {/* <div className={`servCo_innerListIcon${server.id}`}> */}
                            {/* <div className={`servCo_innerListIcon${server.id}`}> */}
                                {/* server & channel ids are hashed */}
                                {/* <a aria-label = {`${server.server_name}`} href={`/channels/${server.id}/${server[server.id].channels.first}`}/></a> */}
                                {/* <a aria-label="testChan" href={`/channels/${server.id}`}>
                                    <div className="servCo_serverIcon"></div>
                                </a> */}

                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                    {/* END SERVERS */}

                    
                    

                    {/* START OF ADD BUTTON (MODAL) */ }
                    <button className="servCo_AddServerButton">
                        <span className="servCo_AddServerText">+</span>
                    </button>



                    {/* LIKE THE APP? DOWNLOAD THE REAL DISCORD HERE */ }
                </div>
            </div>
        );
    }
}

export default Servers;