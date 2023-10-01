import './About.css';
import Experience from "../Experience/Experience";
import Technical from '../Technical/Technical';


const About = () => {
    const languages = ['Python', 'Java', 'Typescript', 'React.js', 'Hack / PHP', 'SQL'];
    const tech = ['MongoDB', 'AWS', 'Node.js', 'Next.js', 'Cloudinary', 'GraphQL', 'GitHub', 'Mercurial']
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <p className="about-me">
                - I am on the verge of completing my Computer Science (CS)
                 bachelor's degree. <br/>
                - I have done a backend internship at Meta.<br/>
                - I have worked at Nitzanim as a Python teacher.<br/>  
                - I have created many Self-Projects in different languages.<br/>
            </p>

            <Technical/>     
            <Experience/>
            
        </div>
    );
};

export default About;
