import bengurionLogo from '../../Media/General/ben-gurion.png';
import metaLogo from '../../Media/General/Meta.png';
import nitzanimLogo from '../../Media/General/nitzanim.png';
import projectLogo from '../../Media/General/projects2.png';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
        <h1>About Me</h1>

        <div className="info-line"> 
            <img src={bengurionLogo} alt="ben-gurion" className="about-logo" />
            <p className='about-text'> I am on the verge of completing my Computer Science (CS) bachelor's degree.</p>
        </div>

        <div className="info-line">
            <img src={metaLogo} alt="meta" className="about-logo" />
            <p className='about-text'> I have done a backend internship at Meta.</p>
        </div>

        <div className="info-line">
            <img src={nitzanimLogo} alt="nitzanim" className="about-logo" />
            <p className='about-text'> I have worked at Nitzanim as a Python teacher.</p>
        </div>

        <div className="info-line">
            <img src={projectLogo} alt="projects" className="about-logo" />
            <p className='about-text'> I have created many Self-Projects in different languages.</p>
        </div>

    </div>
    
    )
}

export default AboutMe;