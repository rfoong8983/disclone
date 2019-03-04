import React from 'react';

class ServerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={isActive: false};
        this.defaultFocus = this.defaultFocus.bind(this);
    }

    defaultFocus(serverId) {
        if (serverId.constructor.name === "Number") {
            serverId = JSON.stringify(serverId);
        }
        // debugger
        
        if (this.props.location.pathname.slice(10) === serverId) {
            return "selectedServer";
        }
    }
    
    updateStoreServerId(serverId) {
        const currentPath = this.props.location.pathname;
        return (e) => {
            e.preventDefault();
            this.state.isActive = true;
            // USE REGEX TO ONLY CAPTURE /channels/serverId
            if (currentPath !== `/channels/${serverId}`) {
                this.props.receiveCurrentServerId(serverId);
                this.props.history.push(`/channels/${serverId}`);
            }
        };
    }

    updateStoreHomeId() {
        // debugger
        const homeServerPath = "@me";
        const currentPath = this.props.location.pathname;
        return (e) => {
            e.preventDefault();
            // USE REGEX TO ONLY CAPTURE /channels/serverId
            if (currentPath !== `/channels/${homeServerPath}`) {
                this.props.receiveCurrentServerId(homeServerPath);
                this.props.history.push(`/channels/@me`);
            }
        };
    }

    renderIcon(serverName) {
        if (serverName === `${this.props.currentUser.id}_@me_home`) {
            return (
                <i className="servCo_homeServerLogoIcon fas fa-compact-disc fa-2x"></i>
            );
        } else {
            return (
                <div className="servCo_serverIcon normFont" draggable="false">
                    {serverName[0].toLowerCase()}
                </div>
            );
        }
    }
    
    render() {
        const server = this.props.server;
        // debugger
        return (
            <div 
                className={`servCo_server`} 
                id={server.server_name === `${this.props.currentUser.id}_@me_home` ? "homeServer" : ""}
            >
                <div draggable="true">
                    {/* replace with next div with comment */}
                    {/* <div className={`servCo_innerListIcon`}> */}
                        {/* server & channel ids are hashed */}
                        {/* <a aria-label = {`${server.server_name}`} href={`/channels/${server.id}/${server[server.id].channels.first}`}/></a> */}
                    <a aria-label="testChan" href="" 
                        id={server.server_name === `${this.props.currentUser.id}_@me_home` ? this.defaultFocus('@me') : this.defaultFocus(server.id)} 
                        onClick={server.server_name === `${this.props.currentUser.id}_@me_home` ? this.updateStoreHomeId() : this.updateStoreServerId(server.id)}
                    >
                    {/* <a key={server.id} aria-label="testChan" href={`/#/channels/${server.id}`}></a> */}
                        {/* {this.state.isActive ? <div class="servCo_serverActive"></div> : ""} */}
                        {this.renderIcon(server.server_name)}
                        {/* <div className="servCo_serverIcon normFont" draggable="false">
                            {server.server_name[0].toLowerCase()}
                        </div> */}
                    </a>

                    {/* </div> */}
                </div>
            </div>
        );
    }
};

export default ServerItem;