import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="header">
                <a href="#homepage">Homepage</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#recommandations">Recommandations</a>
                <a href="#contact">Contact Me</a>
            </nav>
        </div>
    );
};

export default Header;
