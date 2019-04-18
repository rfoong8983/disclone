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
                <ul>{orderedMessages(this.messages)}</ul>
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
                    <div className="metadata"><div className="timestamp">{new Date(message.created_at).toLocaleTimeString()}</div></div>
                    <div className="text">{message.text}</div>
                </li>
            )
        } else {
            talker = message.username
            return (
                <li className="singleMessage" key={message.id}>
                    <div className="metadata">{message.username}&nbsp;<div className="timestamp">{new Date(message.created_at).toLocaleTimeString()}</div></div>
                    <div className="text">{message.text}</div>
                </li>
            )
        }
    });
};