import React from 'react';

class ServerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={isActive: false};
    }
    
    updateStoreServerId(serverId) {
        const currentPath = this.props.location.pathname;
        return (e) => {
            e.preventDefault();
            this.state.isActive = true;
            // USE REGEX TO ONLY CAPTURE /channels/serverId
            if (currentPath !== `/channels/${serverId}`) {
                this.props.updateServerId(serverId);
                this.props.history.push(`/channels/${serverId}`);
            }
        };
    }
    
    render() {
        const server = this.props.server;
        return (
            <div className={`servCo_server`}>
                <div draggable="true">
                    {/* replace with next div with comment */}
                    {/* <div className={`servCo_innerListIcon`}> */}
                        {/* server & channel ids are hashed */}
                        {/* <a aria-label = {`${server.server_name}`} href={`/channels/${server.id}/${server[server.id].channels.first}`}/></a> */}
                    <a aria-label="testChan" href="" onClick={this.updateStoreServerId(server.id)}>
                    {/* <a key={server.id} aria-label="testChan" href={`/#/channels/${server.id}`}></a> */}
                        {/* {this.state.isActive ? <div class="servCo_serverActive"></div> : ""} */}
                        <div className="servCo_serverIcon normFont" draggable="false">
                            {server.server_name[0].toLowerCase()}
                        </div>
                    </a>

                    {/* </div> */}
                </div>
            </div>
        );
    }
};

export default ServerItem;