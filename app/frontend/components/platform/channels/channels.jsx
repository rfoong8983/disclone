import React from 'react';
import ChannelItem from './channel_item';
import ChannelItemContainer from './channel_item_container';

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.displayCurrentServerName = this.displayCurrentServerName.bind(this);
    }

    componentDidMount() {
        this.props.fetchChannels(this.props.currentServerId);
        // this.props.receiveCurrentChannel
    }

    // import delete channel for onClick of X
    // NEED ACCESS TO CURRENT SERVER, CURRENT USER, LOGOUT

    componentDidUpdate() {
        // debugger
        if ((this.props.currentServerId !== undefined) && (Object.values(this.props.channels).length === 0)) {
            this.props.fetchChannels(this.props.currentServerId);
        } else if ((this.props.currentServerId !== undefined) && (Object.values(this.props.channels > 0))) {
            const defaultChannel = Object.values(this.props.channels)[0];
            // debugger
            if (!this.props.currentChannelId) {
                this.props.receiveCurrentChannelId(defaultChannel.id, defaultChannel.channel_name);
            }
            
        } 
        
        // logic below stays for now 
        if ((this.props.currentServerId !== undefined) && 
                    (this.props.currentChannelId !== undefined) && 
                    (this.props.location.pathname !== `/channels/${this.props.currentServerId}/${this.props.currentChannelId}`))
        {
            // debugger
            if (this.props.location.pathname !== `/channels/${this.props.currentServerId}/${this.props.currentChannelId}`) {
                this.props.history.push(`/channels/${this.props.currentServerId}/${this.props.currentChannelId}`);
            }
        }
    }

    displayCurrentServerName() {
        const currentServerName = this.props.currentServerName;
        if ("@me".indexOf(currentServerName)) {
            return "@me";
        } else {
            return currentServerName;
        }
    }

    channelItems(channels) {
        // debugger
        return channels.map((channel) => (
            <ChannelItemContainer
                key={channel.id}
                channel={channel}
            />
        ));
    }

    render () {
        const channels = this.props.channels;
        // debugger
        return (
            // <div className="pf_channelsAndLogoutWrapper">
            <div className="ch_channelsWrapper">
                {/* two main wrappers in channels wrapper */}
                <div className="ch_serverNameChannelsWrapper">

                    {/* Servername Header, don't show delete button on homeServer */}
                    <div className="ch_serverNameWrapper">
                        <div className="ch_serverNameInner">
                            <span className="ch_serverName normFont">{this.displayCurrentServerName()}</span>
                            {/* on hover of ch_serverNameWrapper, display button */}
                            <button className="ch_deleteServerButton" onClick={this.props.logout}></button>
                        </div>
                    </div>

                    {/* Direct messages / text channels here */}
                    <div className="ch_channelDisplayWrapper">
                        <div className="ch_channelDisplayScroller">
                            <div className="ch_textChannelItemsContainer">

                                {/* Header wrapper */}
                                <div className="ch_textChannelItemsHeaderWrapper">
                                    <div className="ch_textChannelItemsHeaderInner">
                                        <div className="ch_channelHeaderContentWrapper">
                                            
                                        <div className="ch_channelDropdownPlaceholder"></div>

                                        <div className="ch_channelItemsTitle semiFont">Text Channels</div>
                                        <div className="ch_channelItemsCreateButton">
                                            {/* RENDER CREATE CHANNEL MODAL HERE */}
                                            <button className="ch_createChannelButton">
                                                <div className="ch_createChannelIcon normFont"><span>+</span></div>
                                            </button>
                                        </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Channel Items - in discord: class=containerDefault-17nADq... <- this is inside item component*/}
                                {this.channelItems(Object.values(channels))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                
            // </div>
        );
    }
}

export default Channels