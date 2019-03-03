import React from 'react';

class ServerModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loc: "main", firstLetter: ""};
        this.mainForm = this.mainForm.bind(this);
        this.createForm = this.createForm.bind(this);
        this.joinForm = this.joinForm.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.manageDisplay = this.manageDisplay.bind(this);
        this.headerText = this.headerText.bind(this);
    }

    manageFormType(field) {
        return (e) => {
            this.setState({ loc: field });
        };
    }

    manageIcon() {
        // return (e) => {
        //     this.setState({})
        // }
    }

    manageDisplay() {
        const currDisplay = this.state.loc;
        // debugger
        switch(currDisplay) {
            case 'create':
                return this.createForm();
            case 'join':
                return this.joinForm();
            default:
                return this.mainForm();
        }
    }

    formSubmit() {
        const currDisplay = this.state.loc;
        let col;
        if (currDisplay === 'join') {
            col = { background: '#3ca374', color: '#fff' };
        } else {
            col = { background: '#7289da', color: '#fff' };
        }

        return (
            <div className="mod_formLowerWrapper">
                <button
                    className="mod_formSubmitButton"
                    type="submit"
                    style={col}
                >
                    <div className="mod_formSubmitLabel">
                        {currDisplay[0].toUpperCase() + currDisplay.slice(1)}
                    </div>
                </button>

                <div className="mod_formBack">
                    <button className="mod_formBackButton">
                        {/* discord uses a ::before to display arrow */}
                        Back
                    </button>
                </div>
            </div>
        )
    }

    createForm() {
        return (
            <form className="mod_createFormWrapper">
                <div className="mod_createFormUpperWrapper">
                    <div className="mod_createFormUpperInner">
                        <p className="mod_createFormDescription">
                            By creating a server, you will have access to
                            <strong> free </strong> voice and text chat to use amongst your friends.
                        </p>

                        <div className="mod_createFormCreate">
                            <div className="mod_createFormCreateInputWrapper">
                                <div className="mod_createFormCreateInnerInput">
                                    <label className="mod_createFormLabel" htmlFor="serverName">
                                        Server Name
                                    </label>
                                    <div className="mod_createServerNameWrapper">
                                        <input 
                                            className="mod_createFormInput" 
                                            id="serverName"
                                            maxLength="40"
                                        >
                                        </input>
                                    </div>
                                </div>

                                <div className="mod_serverRegionPlaceholder">
                                </div>
                            </div>
                        </div>

                        <div className="mod_createShowServer">
                            <div className="mod_createServerCircleWrapper">
                                <div className="mod_createServerCircle">
                                    {this.state.firstLetter}
                                </div>
                                <div className="mod_resolutionPlaceholder">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* lower portion */}
                {this.formSubmit()}
            </form>
        );
    }

    joinForm () {
        return (
            <form className="mod_joinFormWrapper">
                <div className="mod_joinFormUpperWrapper">
                    <div className="mod_joinFormUpperInner">
                        <div className="mod_joinFormInstrWrapper">
                            <p className="mod_joinFormDescription">
                                Enter an Instant Invite below to join an existing server. The invite will look something like these:
                            </p>
                        </div>

                        <div className="mod_joinWrapper">
                            <div className="mod_joinInputWrapper">
                                <input
                                    className="mod_joinInput"
                                    id="serverName"
                                    maxLength="40"
                                >
                                </input>
                            </div>
                            <label className="mod_joinLabel" htmlFor="serverName">
                                Enter a server name
                            </label>
                        </div>
                    </div>
                </div>

                {/* lower portion */}
                {this.formSubmit()}
            </form>
        )
    }

    mainForm() {
        return (
            <div className={`mod_serverActions`}>
                <div className={`mod_createServerCreateWrapper`}>
                    <div className={`mod_createServerCreateHeader normFont`}>
                        Create
                    </div>

                    <div className={`mod_createServerCreateBody normFont`}>
                        Create a new server and invite your friends. It's free!
                    </div>

                    <div className={`mod_createServerCreateIcon normFont`}></div>

                    <button
                        className={`mod_createServerCreateButton normFont`}
                        onClick={this.manageFormType(`create`)}
                    >Create a server
                    </button>
                </div>

                <div className={`mod_joinServerCreateWrapper`}>
                    <div className={`mod_joinServerCreateHeader normFont`}>
                        Join
                    </div>

                    <div className={`mod_joinServerCreateBody normFont`}>
                        Enter a Server Name and join your friend's server.
                    </div>

                    <div className={`mod_joinServerCreateIcon normFont`}></div>

                    <button
                        className={`mod_joinServerCreateButton normFont`}
                        onClick={this.manageFormType(`join`)}
                    >Join a server
                    </button>
                </div>
            </div>
        )
    }

    headerText() {
        switch(this.state.loc) {
            case "create":
                return "Create your server"
            case "join":
                return "Join a server"
            default:
                return "Oh, another server huh?"
        }
    }

    render () {
        // debugger
        let joinColor;
        if (this.state.loc === 'join') {
            joinColor = {
                color: '#3ca374'
            }
        } else {
            joinColor = {
                color: '#7289da'
            }
        }
        
        return (
            <div className="mod_serverWrapper">
                <div className="mod_serverWrapper1">
                    <div className="mod_serverWrapper2">

                        <header 
                            className="mod_serverHeader boldFont" style={joinColor}
                        >
                            { this.headerText() }
                        </header>

                        {this.manageDisplay()}

                    </div>
                </div>

                {this.state.loc === 'main' ? <div className="mod_createOrJoin medFont">or</div> : ""}
            </div>
        )
    }
}

export default ServerModal;