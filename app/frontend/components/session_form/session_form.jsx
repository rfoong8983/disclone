import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={email:"", username:"", password:"", isDemo:false, buttonFocus:false};
        this.buttonToggleFocusClass = this.buttonToggleFocusClass.bind(this);
        this.labelErrorStyles = this.labelErrorStyles.bind(this);
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    componentDidMount() {
        // this.props.location.state only ever exists
        // b/c it is defined in my handleDemoFromSignup
        // don't need to check for .isDemo spaghetti code
        if (this.props.location.state) {
            setTimeout(() => this.handleDemoFromLogin(), 400);
        }
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
                <div className="haveAcctWrapper">
                    <button className="haveAccountButton button" type="button" onClick={this.renderLogin.bind(this)}>
                        <div className="haveAcctText medFont">Already have an account?</div>
                    </button>
                    <span className="needAcctText normFont">Who likes signing up?</span>
                    <button className="registerButton button" type="button" onClick={this.handleDemoFromSignup.bind(this)}>
                        <div className="registerButtonText medFont">Use the demo login!</div>
                    </button>
                </div >
            )
        } else {
            return (
                <div className="registerWrapper">
                    <span className="needAcctText normFont">Need an account?</span>
                    <button className="registerButton button" type="button" onClick={this.renderSignup.bind(this)}>
                        <div className="registerButtonText medFont">Register</div>
                    </button>
                    <br></br>
                    <span className="needAcctText normFont">Who likes signing up?</span>
                    <button className="registerButton button" type="button" onClick={this.handleDemoFromLogin.bind(this)}>
                        <div className="registerButtonText medFont">Use the demo login!</div>
                    </button>
                </div>
            )
        }
    }

    displayTerms() {
        if (this.props.formType === "signup") {
            return (
                <div className="termsWrapper normFont">
                    By registering you agree to Disclone's&nbsp;&nbsp;
                    <a className="serviceLinks button" href="/#/jasdkfl">Terms of Service</a>
                    &nbsp;&nbsp;and&nbsp;&nbsp;
                    <a className="serviceLinks button" href="/#/jasdkfl">Privacy Policy</a>
                    .
                </div>
            )
        }
    }

    displayAliasSignup() {
        if (this.props.formType === "signup") {
            return (
                <div className="lsFormUserWrapper">
                    <h5 className="inputLabel semiFont" id={this.labelErrorStyles('username')}>Username{this.usernameErrors()}</h5>
                    <div className="inputWrapper">
                        <input className="actualInput"
                            id={this.labelErrorStyles('username')}
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

    emailErrors() {
        // debugger
        if (this.props.formType === 'signup') {
            return (
                <ul id="errors">
                    &nbsp;{this.props.errors['email']}
                </ul>
            )   
        } else {
            return (
                <ul id="errors">
                    &nbsp;{this.props.errors['creds']}
                </ul>
            )   
        }     
    }

    usernameErrors() {
        // debugger
        return (
            <ul id="errors">
                &nbsp;{this.props.errors['username']}
            </ul>
        )
    }

    passwordErrors() {
        // debugger
        if (this.props.formType === 'signup') {
            return (
                <ul id="errors">
                    &nbsp;{this.props.errors['password']}
                </ul>
            )
        } else {
            return (
                <ul id="errors">
                    &nbsp;{this.props.errors['creds']}
                </ul>
            )
        }  
    }

    buttonToggleFocusState() {
        if (this.state.buttonFocus === false) {
            this.setState({ buttonFocus: true } );
        } else {
            this.setState({ buttonFocus: false } );
        }
    }

    buttonToggleFocusClass() {
        if (this.state.buttonFocus === true) {
            return "submitFocus"
        } else {
            return ""
        }
    }

    renderSignup(e) {
        e.preventDefault();
        this.props.history.push("/signup")
    }

    renderLogin(e) {
        e.preventDefault();
        this.props.history.push("/login")
    }

    labelErrorStyles(field) {
        if (this.props.errors[field] !== undefined) {
            return "labelBorderErrorStyle"
        } else if (this.props.errors['creds'] !== undefined) {
            return "labelBorderErrorStyle"
        }
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        // console.log(this.state)
        // console.log(this.processForm)
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        // debugger
    }

    handleDemoFromLogin(e) {
        // e.preventDefault(e);
        const user = { email: "not_a_dog@gmail.com".split(''), password: "passwordpassword".split('') }

        setTimeout(() => {
            setInterval(() => {
                if (user.email.length > 0) {
                    this.setState({ 'email': this.state.email + user['email'].shift() })
                } else if (user.password.length > 0) {
                    this.setState({ 'password': this.state.password + user['password'].shift() })
                }
            }, 40);
        }, 0);

        setTimeout(() => {
            this.props.processForm(this.state);
        }, 1450);
    }

    handleDemoFromSignup(e) {
        this.props.history.push({
            pathname: "/login",
            state:
            {
                isDemo: true
            }
        })
    }

    render() {
        // debugger
        const backgroundStyles = {
            width: "1920px",
            height: "1080px"
        }
        
        const wrapperStyles = {
            opacity: '1',
            transform: 'scale(1) translateY(0px) translateZ(0px)'
        }

        return (
            <div className="applicationMount">
                <div className="innerDivMount">
                    <div className="formBackground">
                        <div className="rightBackground" style={backgroundStyles}>
                            <img className="colorBackgorund" width="1920" height="1080" src="https://discordapp.com/assets/fd91131ea693096d6be5e8aa99d18f9e.jpg">
                            </img>
                        </div>

                        {/* <canvas>canvas would go here for animations</canvas> */}
                        <div className="leftBackground">
                            <a className="testHomeLink" href="/"></a>
                            <div className="logoWrapper">
                                <a className="logo" href="/" style={wrapperStyles}>
                                    <i className="login_logoIcon fas fa-compact-disc fa-2x"></i>
                                    <div className="loginLogoText">
                                        <p className="loginLogoText boldFont">DISCLONE</p>
                                    </div>
                                </a>
                            </div>

                            <div 
                                className="lsFormBoxWrapper" 
                                style={wrapperStyles}>
                                
                                
                                {/* <form className="lsFormBox" onSubmit={this.handleSubmit.bind(this)}> */}
                                <form className={this.formBoxType()}>
                                {/* <form className={this.formBoxType()} onSubmit={this.handleSubmit.bind(this)}> */}
                                    <div className="lsFormWelcomeWrapper">
                                        {this.displayWelcome()}
                                        {/* <div className="lsFormTitle lightFont">Welcome back!</div>
                                        <div className="lsFormSubtitle normFont">We're so excited to see you again!</div> */}

                                        <div className="lsFormContentWrapper">

                                            <div className="lsFormEmailWrapper">
                                                <h5 className="inputLabel semiFont" id={this.labelErrorStyles('email')}>Email{this.emailErrors()}</h5>
                                                
                                                <div className="inputWrapper">
                                                    <input className="actualInput"
                                                        id={this.labelErrorStyles('email')}
                                                        type="email"
                                                        value={this.state.email}
                                                        onChange={this.update('email')}
                                                    />
                                                </div>
                                            </div>
                                            

                                            {this.displayAliasSignup()}

                                            <div className="lsPassWrapper">
                                                <h5 className="inputLabel semiFont" id={this.labelErrorStyles('password')}>Password{this.passwordErrors()}</h5>
                                                <div className="inputWrapper">
                                                    <input className="actualInput"
                                                        id={this.labelErrorStyles('password')}
                                                        type="password"
                                                        value={this.state.password}
                                                        onChange={this.update('password')}
                                                    />
                                                </div>
                                            </div>
                                            
                                            {this.props.formType === "login" ? <div className="forgotPassword"></div> : ""}

                                            <button 
                                                className="submitButton"
                                                id={this.buttonToggleFocusClass()} 
                                                type="submit"  
                                                onMouseUp={this.buttonToggleFocusState.bind(this)}
                                                onMouseDown={this.buttonToggleFocusState.bind(this)}
                                                onClick={this.handleSubmit.bind(this)}
                                            >
                                                <div className="submitButtonText medFont">{this.submitText()}</div>
                                            </button>

                                            {this.displayBelowButton()}
                                            {this.displayTerms()}

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;