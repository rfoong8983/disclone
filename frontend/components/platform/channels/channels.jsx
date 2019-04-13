import React from 'react';
import ChannelItem from './channel_item';
import ChannelItemContainer from './channel_item_container';

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.displayCurrentServerName = this.displayCurrentServerName.bind(this);
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
        channels = channels.filter(chan => JSON.stringify(chan.server_id) === this.props.match.params.serverId);
        
        return channels.map((channel) => (
            <ChannelItemContainer
                key={channel.id}
                channel={channel}
            />
        ));
    }

    render () {
        const channels = this.props.channels;
        
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
                                            {this.props.displayAddChannelButton}
                                            {/* <button className="ch_createChannelButton">
                                                <div className="ch_createChannelIcon normFont"><span>+</span></div>
                                            </button> */}
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