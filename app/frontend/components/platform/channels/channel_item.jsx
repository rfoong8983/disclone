import React from 'react';

class ChannelItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={isActive: false};
        this.defaultWrapperFocus = this.defaultWrapperFocus.bind(this);
        this.defaultLabelFocus = this.defaultLabelFocus.bind(this);
        this.updateStoreChannelId = this.updateStoreChannelId.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.receiveCurrentChannelId(this.props.channel.id, this.props.channel.channel_name);
        // debugger
    }
    
    componentDidUpdate() {
        debugger
    }

    // add in state to track current selected channel
    defaultWrapperFocus(channelId) {
        // let currChannelPath = this.props.location.pathname;
        let currChannelPath = this.props.match.params.channelId;
        // const currChannelRegExp = new RegExp("/[0-9]+$");
        // currChannelPath = currChannelPath.match(currChannelRegExp);
        // debugger
        
        if (currChannelPath === JSON.stringify(channelId)) {
            return "channelContentSelected";
        } else {
            return "channelContent";
        }
    }

    defaultLabelFocus(channelId) {
        // debugger
        // let currChannelPath = this.props.match.params.channelId;
        let currentChannelPath;
        currentChannelPath = this.props.match.params.channelId;
        // if (this.props.currentChannelId === undefined) {
        //     currentChannelPath = this.props.match.params.channelId;
        // } else {
        //     currentChannelPath = JSON.stringify(this.props.currentChannelId);
        // }

        // const currChannelRegExp = new RegExp("/[0-9]+$");
        // currChannelPath = currChannelPath.match(currChannelRegExp);

        // if (currChannelPath) {
        //     currChannelPath = currChannelPath[0].replace("/", "");
        // } else {
        //     return "channelContent";
        // }

        if (currentChannelPath === JSON.stringify(channelId)) {
            return "labelSelected";
            return "";
        } else {
            // return "";
            return "";
        }
    }

    updateStoreChannelId(channelId, channelName) {
        // const currentChannelPath = this.props.match.params.channelId;
        let currentChannelPath;
        currentChannelPath = this.props.match.params.channelId;
        // let currentChannelPath;
        // if (this.props.currentChannelId === undefined) {
        //     currentChannelPath = this.props.currentChannelId;
        // }   else {
        //     currentChannelPath = this.props.match.params.channelId;
        // }
        
        // const currChannelRegExp = new RegExp("/[0-9]+$");
        // debugger
        return (e) => {
            e.preventDefault();
            // this.state.isActive = true;
            // debugger
            // if (currentChannelPath.match(currChannelRegExp)[0].replace("/","") !== JSON.stringify(channelId)) {
            if (currentChannelPath !== JSON.stringify(channelId)) {
                this.props.receiveCurrentChannelId(channelId, channelName);

                // this.props.fetchMessages(channelId) ADD MESSAGES ON CHANNEL SWITCH
                // this.props.receiveCurrentChannelId(channelId, channelName);
                this.props.history.push(`/channels/${this.props.currentServer.id}/${channelId}`);
            }
        };
    }

    render () {
        const channel = this.props.channel;
        // debugger
        
        return (
            <div 
                className="channelItemWrapper"
                onClick={this.updateStoreChannelId(this.props.currentChannelId, this.props.currentChannelName)}
            >
                <div className="channelInnerWrapper">
                    <div className={this.defaultWrapperFocus(this.props.currentChannelId)}>
                        <div className="channelHashSVGWrapper">
                            {/* hash svg */}
                            <svg className="channelHashSVG" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path className="channelHashPath" fill="currentColor" d="M2.27333333,12 L2.74666667,9.33333333 L0.08,9.33333333 L0.313333333,8 L2.98,8 L3.68666667,4 L1.02,4 L1.25333333,2.66666667 L3.92,2.66666667 L4.39333333,0 L5.72666667,0 L5.25333333,2.66666667 L9.25333333,2.66666667 L9.72666667,0 L11.06,0 L10.5866667,2.66666667 L13.2533333,2.66666667 L13.02,4 L10.3533333,4 L9.64666667,8 L12.3133333,8 L12.08,9.33333333 L9.41333333,9.33333333 L8.94,12 L7.60666667,12 L8.08,9.33333333 L4.08,9.33333333 L3.60666667,12 L2.27333333,12 L2.27333333,12 Z M5.02,4 L4.31333333,8 L8.31333333,8 L9.02,4 L5.02,4 L5.02,4 Z" transform="translate(1.333 2)"></path>
                            </svg>
                        </div>
                        
                        {/* channel name */}
                        <div className="channelName medFont" id={this.defaultLabelFocus(this.props.currentChannelId)}>{this.props.currentChannelName}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChannelItem