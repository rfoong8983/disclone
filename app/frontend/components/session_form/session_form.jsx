import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={email:"", username:"", password:""};
    }

    componentDidUpdate(nextProps) {
        if (nextProps.history.location !== this.props.history.location) {

        }
    }

    displayAliasSignup() {
        if (this.props.formType === "signup") {
            return (
                <label>
                    username: 
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.update("username")}
                    />
                </label>
            );
        } else {
            return ("")
        }
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            // .then((user) => this.props.history.push("/"));
    }

    displayErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`err_${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
            )       
        }

    

    render() {
        const wrapperStyles = {
            opacity: '1',
            transform: 'scale(1) translateY(0px) translateZ(0px)'
        }

        return (
            <div className="applicationMount">
                <div className="innerDivMount">
                    <div className="formBackground">
                        <div className="rightBackground">
                            <img className="colorBackgorund" width="1460" height="821" src="https://discordapp.com/assets/fd91131ea693096d6be5e8aa99d18f9e.jpg">
                            </img>
                        </div>

                        {/* <canvas>canvas would go here for animations</canvas> */}
                        <div className="leftBackground">
                            <div className="logoWrapper">
                                <a className="logo" rel="noopener" style={wrapperStyles}></a>
                            </div>

                            <div 
                                className="lsFormWrapper" 
                                style={wrapperStyles}>

                                {this.displayErrors()}
                                <form className="lsFormBox" onSubmit={this.handleSubmit.bind(this)}>
                                    <label>Email:
                                    <input
                                            type="text"
                                            value={this.state.email}
                                            onChange={this.update('email')}
                                        />
                                    </label>

                                    {this.displayAliasSignup()}

                                    <label>Password:
                                    <input
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                        />
                                    </label>

                                    <input type="submit" value={this.props.formType} />
                                </form>
                                {/* <p>or maybe you'd prefer to... </p> */}
                                {/* {this.props.navLink}; */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;