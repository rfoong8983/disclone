import React from 'react';

class ChannelItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={isActive: false};
        this.defaultFocus = this.defaultFocus.bind(this);
    }

    // add in state to track current selected channel
    defaultFocus(channelId) {
        // debugger
        let currChannelPath = this.props.location.pathname;
        const currChannelPathRegExp = new RegExp("/[1-9]$");
        currChannelPath = currChannelPath.match(currChannelPathRegExp)[0];
        debugger
        if (this.props.location.pathname.slice(-2) === JSON.stringify(channelId)) {
            return "channelContentSelected boldFont";
        } else {
            return "channelContent";
        }
    }

    updateStoreChannelId(channelId, channelName) {
        const currentChannelPath = this.props.location.pathname;
        return (e) => {
            e.preventDefault();
            this.state.isActive = true;

            // if (currentChannelPath !== JSON.stringify(channelId)) {
            //     this.props.receiveCurrentChannelId(channelId, channelName);
            //     //this.props.fetchMessages(channelId)
                
            // }
        }
    }

    render () {
        // debugger
        return (
            // channelItemWrapper = containerDefault-17nADq
            <div className="channelItemWrapper">
                <div className="channelInnerWrapper">
                    <div className={this.defaultFocus(this.props.channel.id)}>
                        <div className="channelHashSVGWrapper">
                            {/* hash svg */}
                            <svg className="channelHashSVG" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path className="channelHashPath" fill="currentColor" d="M2.27333333,12 L2.74666667,9.33333333 L0.08,9.33333333 L0.313333333,8 L2.98,8 L3.68666667,4 L1.02,4 L1.25333333,2.66666667 L3.92,2.66666667 L4.39333333,0 L5.72666667,0 L5.25333333,2.66666667 L9.25333333,2.66666667 L9.72666667,0 L11.06,0 L10.5866667,2.66666667 L13.2533333,2.66666667 L13.02,4 L10.3533333,4 L9.64666667,8 L12.3133333,8 L12.08,9.33333333 L9.41333333,9.33333333 L8.94,12 L7.60666667,12 L8.08,9.33333333 L4.08,9.33333333 L3.60666667,12 L2.27333333,12 L2.27333333,12 Z M5.02,4 L4.31333333,8 L8.31333333,8 L9.02,4 L5.02,4 L5.02,4 Z" transform="translate(1.333 2)"></path>
                            </svg>
                        </div>
                        
                        {/* channel name */}
                        <div className="channelName medFont">{this.props.channel.channel_name}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChannelItem