import React from 'react';

const PageNotFound = () => {
    return (
        <div className="pnf_wrapper">
            <div className="pnf_textWrapper">
                <div className="pnf_errCodeWrapper">
                    <div className="pnf_errCode boldFont">
                        404
                    </div>
                </div>
                <h4 className="pnf_errTitle boldFont">Wizards Behind Curtains?</h4>
                <div className="pnf_errSuggestionText lightFont">
                    That's so 1939. Disclone is secretly powered by quantum robot hamsters. 
                    Technology is wild, isn't it? Anyway, you look lost. 
                    Here are a few suggested pages.
                </div>
                <ul className="pnf_errorUl">
                    <li className="pnf_errorLi normFont">
                        <a className="pnf_errorLinks" href="/">HOME PAGE</a>
                    </li>
                    <li className="pnf_errorLi normFont">
                        <a className="pnf_errorLinks" href="/#/login">LOGIN</a>
                    </li>
                </ul>
            </div>

            <div className="pnf_animationWrapper">
                <img className="pnf_staticdoge" src={window.staticdoge}></img>
            </div>

            <div className="pnf_logoWrapper">
                <div className="pnf_logoSvgWrapper">
                    <a className="pnf_logoLink" href="/">
                        <i className="pnf_logoIcon fas fa-compact-disc fa-4x"></i>
                        <div className="pnf_LogoText">
                            <p className="pnf_LogoText_p boldFont">DISCLONE</p>
                        </div>
                   </a> 
                </div>
            </div>
        </div>
    )
};

export default PageNotFound;