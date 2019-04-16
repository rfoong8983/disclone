import React from 'react';
import { withRouter } from 'react-router';
import { API_ROOT, HEADERS } from '../../../constants/constants';

class NewConversationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    

    handleChange (e) {
        this.setState({ title: e.target.value });
    }

    handleSubmit (e) {
        e.preventDefault();
        const channelId = this.props.match.params.channelId;
        const body = {
            conversation: {
                channel_id: parseInt(channelId)
            }
        };
        
        fetch(`${API_ROOT}/api/conversations`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(body)
        });
        this.setState({ title: '' });
    }

    render () {
        return (
            <div className="newConversationForm">
                <form onSubmit={this.handleSubmit}>
                    <label>New Conversation:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    };
}

export default withRouter(NewConversationForm);