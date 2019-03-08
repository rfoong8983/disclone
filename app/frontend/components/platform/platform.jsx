import React from 'react';
import ServersContainer from './servers/servers_container';
import ChannelsContainer from './channels/channels_container';

class Platform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {homeId: null};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="pf_platformWrapper">
                <div className="pf_serversWrapper">
                    <ServersContainer />
                </div>

                <div className="pf_channelsWrapper">
                    {/* RENDER CHANNELS CONTAINER HERE */}
                    <ChannelsContainer />
                    <div className="pf_logoutWrapper">

                    </div>
                </div>
            </div>
        )
    }
}

export default Platform