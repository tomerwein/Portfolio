import React, {useState} from 'react';
import './Header.css';
import emailLogo from '../../Media/General/email.png';
import phoneLogo from '../../Media/General/phone.png';
import { useEffect } from 'react';

const Layout = ({children}) => {
    const [activeSection, setActiveSection] = useState('homepage');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['homepage', 'about', 'projects', 'contact'];
            const scrollY = window.scrollY;
            const offsets = sections.map(id => document.getElementById(id).offsetTop);
            
            sections.forEach((section, index) => {
                if (scrollY >= offsets[index] - 5 && (index === sections.length - 1 || scrollY < offsets[index + 1] - 5)) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                <a href="#homepage" className={activeSection === 'homepage' ? 'active' : ''}>Homepage</a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
                <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
                <a href="#recommandations">Recommendations</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact Me</a>
                </div>
            </nav>

            {children}
        </div>
    );
};

export default Layout;
