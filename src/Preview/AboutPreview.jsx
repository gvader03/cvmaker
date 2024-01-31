import "./preview.css"
import cvLogo from '../assets/cv.png'

function AboutPreview(person) {
    return (
        <div className="preview-body">
                    <img src={person.image} className="head-shot" alt="avatar" />
                    <h1>{person.firstName + " " + person.lastName}</h1>
                    <h3 className="title">{person.title}</h3>
                    <h3>{person.email}</h3>
                    <h3>About Me</h3>
                    <p className="statement">{person.statement}</p>
        </div>
    )
}

export default AboutPreview