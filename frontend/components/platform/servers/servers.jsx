import React from 'react';
import ServerItem from './server_item_container';
import { receiveCurrentServerId } from '../../../actions/ui_actions';
import ServerModal from './server_modal';

class Servers extends React.Component {
    constructor(props) {
        super(props);
        this.defaultFocus = this.defaultFocus.bind(this);
        
    }

    componentDidMount() {
        
        const wildcardPath = this.props.match.params.serverId;
        // let currentPath = this.props.location.pathname;
        // const currentServerRegExp = new RegExp('/[0-9]+/?|/@me');
        // 
        // // => find '/32/' or '/@me', removes "/", and => id
        // currentPath = currentPath.match(currentServerRegExp)[0].replace("/","").slice(0,3);
        


        // call fetch subscriptions here and pass into fetch servers
        // change logic in API fetch servers
        // this.props.fetchSubs()
        //     .then(({ subs }) => {
        //         const serverIds = Object.keys(subs);
        //         this.props.fetchServers(serverIds);
        //         // let serversArray = Object.values(servers.servers);
        //         // serversArray = serversArray.filter((server) => server.id === parseInt(wildcardPath));


        //         // receiveCurrentServerId(serversArray[0].id, serversArray[0].name);
        //     });



        this.props.fetchServers()
            .then((servers) => {
                let serversArray = Object.values(servers.servers);
                serversArray = serversArray.filter((server) => server.id === parseInt(wildcardPath));
                    // receiveCurrentServerId(serversArray[0].id, serversArray[0].name);
                });

        
        // THIS MOUNTS FIRST
    }

    componentDidUpdate() {
        // this.props.closeModal();
        
    }

    serverItems(servers) {
        
        const nonHome = servers.filter((server) => server.server_name !== `${this.props.currentUser.id}_@me_home`);
        // use object.values outside ?
        return nonHome.map((server) => (
            // returning nothing if server_name is _home
            
            <ServerItem
                key={`${server.id}_${this.props.currentUser.id}`}
                server={server}
                receiveCurrentServerId={receiveCurrentServerId}
            />
        ));
    }

    homeServer(servers) {
        
        if (this.props.currentUser === undefined) {
            // this.props.history.push("/");
            return "";
        }

        
        const home = servers.filter((server) => server.server_name === `${this.props.currentUser.id}_@me_home`);
        return home.map((server) => (
            <ServerItem
                key={server.id}
                server={server}
                receiveCurrentServerId={receiveCurrentServerId}
            />
        ));
    };

    defaultFocus(serverId) {
        if (this.props.location.pathname.slice(10, 12) === serverId) {
            return "selectedServer";
        }
    }

    render() {
        
        // handle rendering by servId/chanId in component vs in app.jsx routes
        return (
            <div className="servCo_outerWrapper">
                <div className="servCo_innerWrapper">
                    <div className="serveCo_homeServerIconOuter">
                        {/* ::before in className above, on focus */}
                        {this.homeServer(Object.values(this.props.servers))}
                        
                    </div>

                    <div className="servCo_friendsOnline normFont">0 online</div>
                    <span className="servCo_topBarWrapper"></span>
                    <div className="servCo_topBarSep">{/* ::after in className */}</div>
                    

                    {/* START SERVERS HERE */}

                    {/* render server_item_container here for each server? */}
                    {/* <li>{Object.values(this.props.servers).map((server) => server.server_name)}</li> */}
                    {this.serverItems(Object.values(this.props.servers))}


                    {/* START OF ADD BUTTON (MODAL) */ }
                    {/* <button className="servCo_AddServerButton lightFont">
                        <span className="servCo_AddServerText">+</span>
                    </button> */}
                    {this.props.otherForm}

                    {/* <CreateServer /> */}

                    {/* {<Modal state={{state:{modalActive: true}}}/>} */}
                    
                    <div className="servCo_DownloadButton">
                        
                    </div>
                    


                    {/* LIKE THE APP? DOWNLOAD THE REAL DISCORD HERE */ }
                </div>
            </div>
        );
    }
}

export default Servers;