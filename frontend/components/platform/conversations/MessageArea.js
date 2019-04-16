import React from 'react';
import NewMessageForm from '../../../components/platform/conversations/NewMessageForm';

const MessageArea = ({
    conversation: { id, title, messages },
}) => {
    return (
        <div className="messageArea">
            <h2>{title}</h2>
            <ul>{orderedMessages(messages)}</ul>
            <NewMessageForm conversation_id={id} />
        </div>
    );
};

export default MessageArea;

// helpers

const orderedMessages = messages => {
    const sortedMessages = messages.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    return sortedMessages.map(message => {
        return <li key={message.id}>{message.text}</li>;
    });
};