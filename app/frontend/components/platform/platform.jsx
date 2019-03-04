import React from 'react';
import ServersContainer from './servers/servers_container';

class Platform extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pf_platformWrapper">
                <div className="pf_serversWrapper">
                    <ServersContainer />
                </div>
                <div className="pf_channelsAndLogoutWrapper">
                    <div className="pf_channelsWrapper">
                        {/* two main wrappers in channels wrapper */}
                        <div className="pf_serverNameChannelsWrapper">
                            <div className="pf_serverNameWrapper">

                            </div>
                        </div>

                        <div className="pf_usernameSignoutWrapper">
                            
                        </div>
                    </div>

                    <div className="pf_logoutWrapper">

                    </div>
                </div>
            </div>
        )
    }
}

export default Platform