import React from 'react';

class Channels extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    // NEED ACCESS TO CURRENT SERVER, CURRENT USER, LOGOUT

    displayCurrentServerName() {

    }

    render () {
        return (
            <div className="pf_channelsAndLogoutWrapper">
                <div className="pf_channelsWrapper">
                    {/* two main wrappers in channels wrapper */}
                    <div className="pf_serverNameChannelsWrapper">

                        {/* Servername Header, don't show delete button on homeServer */}
                        <div className="pf_serverNameWrapper">
                            <div className="pf_serverNameInner">
                                <span className="pf_serverName">{this.displayCurrentServerName()}</span>
                                {/* on hover of pf_serverNameWrapper, display button */}
                                <button className="pf_deleteServerButton"></button>
                            </div>
                        </div>

                        {/* Direct messages / text channels here */}
                        <div className="pf_channelDisplayWrapper">
                            <div className="pf_channelDisplayScroller">
                                <div className="pf_textChannelItemsContainer">

                                    {/* Header wrapper */}
                                    <div className="pf_textChannelItemsHeaderWrapper">
                                        <div className="pf_textChannelItemsHeaderInner">
                                            <div className="pf_channelDropdownPlaceholder"></div>

                                            <div className="pf_channelItemsTitle">Text Channels</div>
                                            <div className="pf_channelItemsCreateButton">
                                                {/* RENDER CREATE CHANNEL MODAL HERE */}
                                                <button className="pf_createChannelButton">
                                                    <div className="pf_createChannelIcon">+</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Channel Items */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pf_logoutWrapper">

                </div>
            </div>
        );
    }
}

export default Channels