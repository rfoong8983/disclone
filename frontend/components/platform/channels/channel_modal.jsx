import React from 'react';

class ChannelModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channelInput: ""
        };
        const pat = new RegExp('(channels/[0-9]+)');
        this.serverId = this.props.location.pathname.match(pat)[0].split("/")[1];
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCancel() {
        return (e) => {
            e.preventDefault();
            this.props.closeModal();
        };
    }

    handleFormInput() {
        return (e) => {
            e.preventDefault();
            this.setState({channelInput: e.currentTarget.value});
        };
    }

    handleCreate(state, serverId) {
        return (e) => {
            e.preventDefault();
            const newChannel = { channel: { server_id: serverId, channel_name: state}};
            this.props.createChannel(newChannel);
        };
    }

    render() {
        return (
            <div className="mod_ChannelModalWrap">
                <form className="mod_ChannelFormWrap">
                    <div className="mod_ChannelHeaderWrap">
                        <div className="mod_ChannelHeaderTextWrap">
                            <h4 className="mod_ChannelHeaderTextTitle semiFont">Create Text Channel</h4>
                            <div className="mod_ChannelHeaderTextSubtitle normFont">in Text Channels</div>
                        </div>
                    </div>

                    <div className="mod_ChannelInputWrap">
                        <div className="mod_ChannelInputInnerWrap">
                            <div className="mod_ChannelInputPlaceholder"></div>
                            <div className="mod_ChannelInputInput">
                                <h5 className="mod_ChannelInputInputTitle semiFont">Channel Name</h5>
                                <div className="mod_ChannelInputInputWrap">
                                    <input 
                                        className="mod_ChannelActualInput normFont" 
                                        type="text"
                                        onChange={this.handleFormInput()}
                                    >
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mod_ChannelSubmitWrap">
                        <button 
                            className="mod_ChannelSubmitButton"
                            onClick={this.handleCreate(this.state.channelInput, parseInt(this.serverId))}
                        >
                            <div className="mod_ChannelSubmitButtonText normFont">Create Channel</div>
                        </button>

                        <button 
                            className="mod_ChannelCancelButton"
                            onClick={this.handleCancel()}
                        >
                            <div className="mod_ChannelCancelButtonText normFont">Cancel</div>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ChannelModal;