import techToLogoMapping from '../Data/TechLogos';
import './Technical.css'

const Technical = () => {
    const languages = ['Python', 'Java', 'Typescript', 'ReactJS', 'Hack / PHP', 'SQL'];
    const tech = ['MongoDB', 'AWS', 'NodeJS', 'NextJS', 'Cloudinary', 'GraphQL', 'GitHub']

    return (
        <div className="categories-container">
        <div className="category">
            <h1>Best Languages</h1>
            {languages.map((language) => (
                <span className="technical-tech-item">
                    {techToLogoMapping[language] && <img src={techToLogoMapping[language]} alt={language} className="technical-tech-logo" />}
                    {language}
                </span>
            ))}
        </div>

        <div className="category">
            <h1>Main Tech</h1>
            {tech.map((techItem) => (
                <span className="technical-tech-item">
                    {techToLogoMapping[techItem] && <img src={techToLogoMapping[techItem]} alt={techItem} className="technical-tech-logo" />}
                    {techItem}
                </span>
            ))}
        </div>
    </div>
    )
}

export default Technical;
