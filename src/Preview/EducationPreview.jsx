import './preview.css'

function EducationPreview(props) {

    return (
        <div className="experience-body">
        <h1>Education</h1>
        {props.education.map(element => {
            return (
            <div className="elements" key={element.school}>
            <h3 key={element.institution}>{element.institution}</h3>
            <h3 key={element.degree}>{element.degree}</h3>
            <h3 key={element.graduation}>{element.graduation}</h3>
            </div>
            )
        })}
        </div>
    );
}

export default EducationPreview