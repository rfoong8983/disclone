import React from 'react';
import NewMessageForm from '../../../components/platform/conversations/NewMessageForm';

// const MessageArea = ({
//     conversation: { id, title, messages },
// }) => {
//     return (
//         <div className="messageArea">
//             <h2>{title}</h2>
//             <ul>{orderedMessages(messages)}</ul>
//             <NewMessageForm conversation_id={id} />
//         </div>
//     );
// };
class MessageArea extends React.Component {
    constructor(props) {
        super(props);
        this.id = props.conversation.id;
        this.title = props.conversation.title;
        this.messages = props.conversation.messages;
    }

    render() {
        return (
            <div className="messageArea">
                <ul className="messageUl">{orderedMessages(this.messages)}</ul>
                {/* <NewMessageForm conversation_id={this.id} /> */}
            </div>
        );
    }
}  

const msp = state => {
    return {
        
    }
}

export default MessageArea;

// helpers

const orderedMessages = messages => {
    const sortedMessages = messages.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    let talker;
    return sortedMessages.map(message => {
        if (message.username === talker) {
            return (
                <li className="singleMessage" key={message.id}>
                    <div className="metadata">
                        <div className="timeStampWrap">
                            <span className="timestamp">{new Date(message.created_at).toLocaleTimeString()}</span>
                        </div>
                    </div>
                    <div className="textWrap">
                        <span className="text">{message.text}</span>
                    </div>
                </li>
            )
        } else {
            talker = message.username
            return (
                <div className="badgeMessageWrap" key={message.id}>
                    <div className="userIconWrap">
                        <div className="userIconCircle">
                            <i className="servCo_homeServerLogoIcon fas fa-compact-disc fa-2x"></i>
                        </div>
                    </div>

                    <li className="singleMessage">
                        <div className="metadata">
                            <div className="usernameWrap">
                                <span className="username">{message.username}</span>
                            </div>
                            <div className="timeStampWrap">
                                <span className="timestamp">{new Date(message.created_at).toLocaleTimeString()}</span>
                            </div>
                        </div>
                        <div className="textWrap">
                            <span className="text">{message.text}</span>
                        </div>
                    </li>
                </div>
            )
        }
    });
};