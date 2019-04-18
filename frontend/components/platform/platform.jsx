import React from 'react';
import ServersContainer from './servers/servers_container';
import ChannelsContainer from './channels/channels_container';
import ConversationsList from './conversations/ConversationsList';
import MessageArea from './conversations/MessageArea';
import NewMessageForm from './conversations/NewMessageForm';

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

                <div className="pf_conversations">
                    <ConversationsList currentUser={this.props.currentUser}/>
                    {/* fix rendering of conversations */}
                </div>

                {/* <div className="pf_messageForm">
                    <NewMessageForm />
                </div> */}
            </div>
        )
    }
}

export default Platform