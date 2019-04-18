import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../../../constants/constants';
import NewConversationForm from './NewConversationForm';
import NewMessageForm from './NewMessageForm';
import MessageArea from '../../platform/conversations/MessageArea';
import Cable from './Cable';

class ConversationsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            conversations: [],
            activeConversation: null
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleReceivedConversation = this.handleReceivedConversation.bind(this);
        this.handleReceivedMessage = this.handleReceivedMessage.bind(this);
    }

    componentDidUpdate(prevProps) {
        const prevChan = prevProps.match.params.channelId;
        const currChan = this.props.match.params.channelId;
        if (prevChan !== currChan) {
            fetch(`${API_ROOT}/api/conversations?channel_id=${parseInt(currChan)}`)
                .then(res => res.json())
                .then(conversations => this.setState({ conversations }))
                .then(el => {
                    const a = document.getElementsByClassName('currConversation');
                    // debugger
                    if (a.length > 0) a[0].click();
                });
        }
    }

    componentDidMount () {
        const currServerId = parseInt(this.props.match.params.serverId);
        const currChannelId = parseInt(this.props.match.params.channelId);
        
        fetch(`${API_ROOT}/api/conversations?channel_id=${currChannelId}`)
            .then(res => res.json())
            .then(conversations => this.setState({ conversations }))
            .then(el => {
                const a = document.getElementsByClassName('currConversation');
                
                if (a.length > 0) a[0].click();
            });

        this.state.activeConversation = null;
    }

    handleClick (id) {
        this.setState({ activeConversation: id });
    }

    handleReceivedConversation (response) {
        const { conversation } = response;
        this.setState({
            conversations: [...this.state.conversations, conversation]
        });
    }

    handleReceivedMessage (response) {
        const { message } = response;
        const conversations = [...this.state.conversations];
        const conversation = conversations.find(
            conversation => conversation.channel_id === message.conversation_id
        );
        // debugger

        // conversation.messages = [...conversation.messages, message];
        if (conversation.messages.every(msg => msg.id !== message.id)) {
            conversation.messages.push(message);
            this.setState({ conversations });
        }
    }

    render () {
        const { conversations, activeConversation } = this.state;
        
        return (
            <div className="conversationsList">
                <ActionCable
                    channel={{ channel: 'ConversationsChannel' }}
                    onReceived={this.handleReceivedConversation}
                />
                {/* {this.state.conversations.length ? ( */}
                {this.state.conversations[0] !== null ? (
                    <Cable
                        conversations={conversations}
                        handleReceivedMessage={this.handleReceivedMessage}
                    />
                ) : null}
                <div className="conversations normFont">
                    {conversations[0] === null ? "" : <ul className="conv_channelId">{mapConversations(conversations, this.handleClick)}</ul>}
                    {/* <NewConversationForm /> */}
                    {activeConversation && conversations[0] !== null && conversations[0].id === activeConversation ? (
                        <div className="messagesWrap">
                            <MessageArea
                                conversation={findActiveConversation(
                                    conversations,
                                    activeConversation
                                )}
                            />
                            <NewMessageForm conversation_id={conversations[0].id} />
                        </div>
                    ) : null}
                </div>
            </div>
        );
    };
}

export default withRouter(ConversationsList);

// helpers

const findActiveConversation = (conversations, activeConversation) => {
    // debugger
    return conversations.find(
        conversation => conversation.id === activeConversation
    );
};

const mapConversations = (conversations, handleClick) => {
    return conversations.map(conversation => {
        return (
            <li className='currConversation' key={conversation.id} onClick={() => handleClick(conversation.id)}>
                {conversation.channel_id}
            </li>
        );
    });
};