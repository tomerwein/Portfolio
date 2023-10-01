import React from 'react';
import './Header.css';
import emailLogo from '../../Media/General/email.png';
import phoneLogo from '../../Media/General/phone.png';
import { useEffect } from 'react';

const Layout = ({children}) => {


    return (
        <div>
            <nav className="header">
                <div className="contact-info">
                    <span className='email'>
                        {<img src={emailLogo} alt={"email"} className="email-phone-logo" />}
                        Email: tomer1w1@gmail.com
                    </span>

                    <span className='phone'>
                        {<img src={phoneLogo} alt={"phone"} className="email-phone-logo"/>}
                        Phone: +9720542102939
                    </span> 
                </div>
                
                <div className="nav-links">
                    <a href="#homepage">Homepage</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#recommandations">Recommendations</a>
                    <a href="#contact">Contact Me</a>
                </div>
            </nav>

            {children}
        </div>
    );
};

export default Layout;
