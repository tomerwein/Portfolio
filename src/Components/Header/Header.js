import React from 'react';
import './Header.css';

const Header = ({children}) => {
    return (
        <div>
            <nav className="header">
                <a href="#homepage">Homepage</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#recommandations">Recommandations</a>
                <a href="#contact">Contact Me</a>
            </nav>

            {children}
        </div>
    );
};

export default Header;
