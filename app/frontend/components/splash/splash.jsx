import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
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
        const wrapperStyles = {
            opacity: '1',
            transform: 'scale(1) translateY(0px) translateZ(0px)'
        };

        return(
            // page wrap
            <div className="splash_OriginWrapper">

                {/* start of nav */}
                <div className="splash_NavWrapperAbs">
                    <header className="splash_desktopNavWrapper">
                        <nav className="splash_innerDesktopNav">
                            {/* inside nav */}
                            <div className="splash_navLogo">
                                <a className="splash_logoRedirect" onClick={this.props.logout}>
                                {/* <a className="splash_logoRedirect" href="/"> */}
                                    <div className="splash_logoSvgWrapper">
                                        <div className="splash_logoHomePage" style={wrapperStyles}></div>
                                    </div>
                                </a>
                            </div>

                            <ul className="splash_navCenterLinks">
                                <li className="splash_navCenter_li">
                                    <a className="splash_navCenter_a" href="/#/signup">
                                        <span className="splash_navCenter_Signup normFont">Join us</span>
                                    </a>
                                </li>

                                <li className="splash_navCenter_li">
                                    <a className="splash_navCenter_a" href="/#/signup">
                                        <span className="splash_navCenter_Signup normFont">There's no escape</span>
                                    </a>
                                </li>

                                <li className="splash_navCenter_li">
                                    <a className="splash_navCenter_a" href="/#/signup">
                                        <span className="splash_navCenter_Signup normFont">One of us</span>
                                    </a>
                                </li>
                            </ul>

                            <ul className="splash_navRightLinks">

                                <li className="splash_navRight_li">
                                    <a className="splash_navRight_a" href="//www.linkedin.com/in/ryan-foong-5bb75348/" rel="me" target="_blank">
                                        <img className="splash_liSVG"
                                            src={window.liSVG}
                                            alt="my linkedIn"
                                        ></img>
                                    </a>
                                </li>

                                <li className="splash_navRight_li">
                                    <a className="splash_navRight_a" href="//www.github.com/rfoong8983" rel="me" target="_blank">
                                        <img className="splash_ghSVG"
                                            src={window.ghSVG}
                                            alt="my github"
                                        ></img>
                                    </a>
                                </li>

                                <li className="splash_navRight_li">
                                    <a className="splash_navRight_Login normFont" href="/#/login">Login</a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
                {/* end of nav */}

                {/* start of HERO */}
                <section className="splash_heroWrapper">

                    {/* HERO text, links to discord */}
                    <div className="splash_heroBody">
                        <h1 className="splash_heroText boldFont">It's time to ditch Skype and Teamspeak</h1>
                        <p className="splash_heroBlurb normFont">
                            All-in-one voice and text chat for gamers that's free, 
                            secure, and works on both your desktop and phone. 
                            Stop paying for TeamSpeak servers and hassling with 
                            Skype. Simplify your life.
                        </p>
                        <div className="splash_heroButtonsWrapper">
                            <div className="splash_heroInnerButtons">
                                <a className="splash_heroLeftButton medFont" href="/#/signup">Create an account!</a>
                                <a className="splash_heroRightButton medFont" onClick={this.handleDemoFromSignup.bind(this)}>Experience the demo c:</a>
                            </div>
                        </div>
                    </div>

                    {/* underneath HERO, floating ANIMATIONS */}
                    <div className="splash_animationsWrapper">
                        <div className="splash_animationsInner">
                            <div className="splash_backdropShadow"></div>
                            <img className="splash_triangle1" src={window.triangle}></img>
                            <img className="splash_triangle2" src={window.triangle}></img>
                            <img className="splash_triangle3" src={window.triangle}></img>
                            <img className="splash_dot1" src={window.dot}></img>
                            <img className="splash_dot2" src={window.dot}></img>
                            <img className="splash_dot3" src={window.dot}></img>
                            <img className="splash_dot4" src={window.dot}></img>
                            <img className="splash_dot5" src={window.dot}></img>
                            <img className="splash_circle1" src={window.circle}></img>
                            <img className="splash_circle2" src={window.circle}></img>
                            <img className="splash_circle3" src={window.circle}></img>
                            <img className="splash_square1" src={window.square}></img>
                            <img className="splash_square2" src={window.square}></img>
                            <img className="splash_square3" src={window.square}></img>
                            <img className="splash_x1" src={window.x}></img>
                            <img className="splash_x2" src={window.x}></img>
                            <img className="splash_x3" src={window.x}></img>
                            
                        </div>
                    </div>

                </section>


            </div>
        )
    }
}

export default Splash;