import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
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
                                <a className="splash_logoRedirect" href="/">
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
                                    <a className="splash_navRight_a" href="//www.github.com/rfoong8983" rel="me" target="_blank">
                                        <img className="splash_liSVG"
                                            src={window.liSVG}
                                            alt="my github"
                                        ></img>
                                    </a>
                                </li>

                                <li className="splash_navRight_li">
                                    <a className="splash_navRight_a" href="//www.linkedin.com/in/ryan-foong-5bb75348/" rel="me" target="_blank">
                                        <img className="splash_ghSVG"
                                            src={window.ghSVG}
                                            alt="my linkedIn"
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
                <section class="splash_heroWrapper">

                    {/* HERO text, links to discord */}
                </section>
            </div>
        )
    }
}

export default Splash;