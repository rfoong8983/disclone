import React from 'react';

class Platform extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pf_platformWrapper">
                <p>MAIN PLATFORM PIECES WILL BE RENDERED INSIDE HERE</p>
                <div className="pf_serversWrapper">

                </div>
                <div className="pf_channelsAndLogoutWrapper">
                    <div className="pf_channelsWrapper">
                    </div>

                    <div className="pf_logoutWrapper">

                    </div>
                </div>
            </div>
        )
    }
}

export default Platform