
import "./preview.css"

function ExperiencePreview(props) {
    //const experience=[{company: 'company', job: 'role',}]

    return (
        <div className="experience-body">
        <h1>Experience</h1>
        {props.experiences.map(element => {
            return (
            <div className="elements" key={element.job}>
            <h3 key={element.job}>{element.job} - {element.dates}</h3>
            <h3 key={element.company}>{element.company}</h3>
            <h3 key={element.description}>{element.description}</h3>
            </div>
            )
        })}
        </div>
    );
}

export default ExperiencePreview