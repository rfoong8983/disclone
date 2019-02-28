import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={email:"", username:"", password:""};
    }

    formBoxType() {
        if (this.props.formType === "signup") {
            return "suFormBox";
        } else {
            return "liFormBox";
        }
    }

    submitText() {
        if (this.props.formType === "signup") {
            return "Continue";
        } else {
            return "Login";
        }
    }
    
    displayWelcome() {
        if (this.props.formType === "signup") {
            return (
                <div className="greeting">
                    <div className="lsFormTitle lightFont">Create an account</div>
                </div>
            )
        } else {
            return (
                <div className="greeting">
                    <div className="lsFormTitle lightFont">Welcome back!</div>
                    <div className="liFormSubtitle normFont">We're so excited to see you again!</div>
                </div>
            )
        }
    }
    
    displayBelowButton() {
        if (this.props.formType === "signup") {
            return (
                <button className="haveAccountButton" type="button" onClick={this.renderLogin.bind(this)}>
                    <div className="haveAcctText medFont">Already have an account?</div>
                </button>
            )
        } else {
            return (
                <div className="registerWrapper">
                    <span className="needAcctText normFont">Need an account?</span>
                    <button className="registerButton" type="button" onClick={this.renderSignup.bind(this)}>
                        <div className="registerButtonText medFont">Register</div>
                    </button>
                </div>
            )
        }
    }

    displayTerms() {
        if (this.props.formType === "signup") {
            return (
                <div className="termsWrapper normFont">
                    By registering you agree to Disclone's
                    <a className="serviceLinks" href="">Terms of Service</a>
                    &nbsp;and&nbsp;
                    <a className="serviceLinks" href="">Privacy Policy</a>
                    .
                </div>
            )
        }
    }

    displayAliasSignup() {
        if (this.props.formType === "signup") {
            return (
                <div className="lsFormUserWrapper">
                    <h5 className="inputLabel semiFont">Username</h5>
                    <div className="inputWrapper">
                        <input className="actualInput"
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </div>
                </div>
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

    renderSignup(e) {
        e.preventDefault();
        this.props.history.push("/signup")
        this.props.errors = [];
    }

    renderLogin(e) {
        e.preventDefault();
        this.props.history.push("/login")
        this.props.errors = [];
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
                                className="lsFormBoxWrapper" 
                                style={wrapperStyles}>

                                {this.displayErrors()}
                                {/* <form className="lsFormBox" onSubmit={this.handleSubmit.bind(this)}> */}
                                <form className={this.formBoxType()} onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="lsFormWelcomeWrapper">
                                        {this.displayWelcome()}
                                        {/* <div className="lsFormTitle lightFont">Welcome back!</div>
                                        <div className="lsFormSubtitle normFont">We're so excited to see you again!</div> */}

                                        <div className="lsFormContentWrapper">

                                            <div className="lsFormEmailWrapper">
                                                <h5 className="inputLabel semiFont">Email</h5>
                                                <div className="inputWrapper">
                                                    <input className="actualInput"
                                                        type="text"
                                                        value={this.state.email}
                                                        onChange={this.update('email')}
                                                    />
                                                </div>
                                            </div>
                                            

                                            {this.displayAliasSignup()}

                                            <div className="lsPassWrapper">
                                                <h5 className="inputLabel semiFont">Password</h5>
                                                <div className="inputWrapper">
                                                    <input className="actualInput"
                                                        type="password"
                                                        value={this.state.password}
                                                        onChange={this.update('password')}
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="forgotPassword"></div>

                                            <button className="submitButton" type="submit">
                                                <div className="submitButtonText medFont">{this.submitText()}</div>
                                            </button>

                                            {this.displayBelowButton()}
                                            {this.displayTerms()}
                                            {/* <div className="registerWrapper">
                                                <span className="needAcctText normFont">Need an account?</span>
                                                <button className="registerButton" type="button" onClick={this.renderSignup.bind(this)}>
                                                    <div className="registerButtonText medFont">Register</div>
                                                </button>
                                            </div> */}

                                        </div>
                                    </div>
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