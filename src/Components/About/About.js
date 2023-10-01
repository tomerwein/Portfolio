import './About.css';
import Experience from "../Experience/Experience";
import Technical from '../Technical/Technical';
import AboutMe from '../AboutMe/AboutMe';

const About = () => {
    return (
        <div className="about-container">
            <AboutMe/>
            <Technical/>     
            <Experience/>
        </div>
    );
};

export default About;
