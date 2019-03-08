import React from 'react';

class ServerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={isActive: false};
        this.defaultFocus = this.defaultFocus.bind(this);
        this.updateStoreServerId = this.updateStoreServerId.bind(this);
    }

    componentDidMount() {
        

        
        this.props.fetchChannels(this.props.match.params.serverId);
        // const defaultChannelId = Object.values(this.props.channels)[0].id;
        // const defaultChannelName = Object.values(this.props.channels)[0].channel_name;
        // this.props.receiveCurrentChannelId(defaultChannelId, defaultChannelName);
        // this.props.history.push(`/channels/${this.props.match.params.serverId}/${defaultChannelId}`);
        
        
        // this.props.receiveCurrentChannelId()
    }

    defaultFocus(serverId, alias) {
        const currentServerId = this.props.match.params.serverId;

        if (currentServerId === JSON.stringify(serverId)) {
            // this.props.receiveCurrentServerId(alias === "@me" ? homeId : serverId, alias);
            // this.props.receiveCurrentServerId(serverId, alias);
            return "selectedServer";
        }
    }
    
    updateStoreServerId(serverId, serverName) {
        
        const currentServerId = this.props.match.params.serverId;
        const currentServerName = this.props.defaultServer.server_name;
        
        // receive server
        return (e) => {
            e.preventDefault();
            if (currentServerId !== JSON.stringify(serverId)) {
                // this.props.receiveCurrentServerId(serverId, currentServerName);
                this.props.receiveCurrentServerId(serverId, currentServerName);
                // this.props.receiveCurrentUser({currentUserInfo: {server: {id: serverId, server_name: currentServerName, owner_id: this.props.currentUser.id }}});
                // const defaultChannelId = this.props.defaultChannel.id;
                // this.props.fetchChannels(serverId);
                this.props.fetchChannels(serverId).then((channels) => {
                    
                    const defaultChannelId = Object.values(channels.channels)[0].id;
                    const defaultChannelName = Object.values(channels.channels)[0].channel_name;
                    this.props.receiveCurrentChannelId(defaultChannelId, defaultChannelName);
                    this.props.history.push(`/channels/${serverId}/${defaultChannelId}`);
                });

            }
        };
    }

    renderIcon(serverName) {
        
        if (serverName === `${this.props.currentUser.id}_@me_home`) {
            return (
                <i className="servCo_homeServerLogoIcon fas fa-compact-disc fa-2x"></i>
            );
        } else if (serverName === undefined) {
            return ""
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
        
        return (
            <div 
                key={`${server.id}_item`}
                className={`servCo_server`} 
                id={server.server_name === `${this.props.currentUser.id}_@me_home` ? "homeServer" : ""}
            >
                <div key={`${server.id}_item`} draggable="true">
                    {/* replace with next div with comment */}
                    {/* <div className={`servCo_innerListIcon`}> */}
                        {/* server & channel ids are hashed */}
                        {/* <a aria-label = {`${server.server_name}`} href={`/channels/${server.id}/${server[server.id].channels.first}`}/></a> */}
                    <a key={`${server.id}_item`} aria-label="testChan" href="" 
                        id={server.server_name === `${this.props.currentUser.id}_@me_home` ? this.defaultFocus(server.id, '@me') : this.defaultFocus(server.id, server.server_name)} 
                        // onClick={server.server_name === `${this.props.currentUser.id}_@me_home` ? this.updateStoreHomeId(server.id) : this.updateStoreServerId(server.id, server.server_name)}
                        onClick={
                            this.updateStoreServerId(server.id, server.server_name)
                        }
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