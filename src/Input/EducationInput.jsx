import "./input.css"
import TextField from '@mui/material/TextField';

function EducationInput({education, handleSchool, handleDegree, handleGrad, isActive, setEduIsActive, handleEdu}){
    //const [isActive, setIsActive] = useState(false);

    return (
        <div className="experience input-body">
        <h2>Education</h2>
        <div className="inputs">
            <TextField 
            label="Institution"
            id="outlined-size-small"
            size="small"
            className="input"
            value={education}
            onChange={(event) => handleSchool(event.target.value, 0)}
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
                color: "#343434"
            }
            }} />
            <TextField 
            label="Degree"
            id="outlined-size-small"
            size="small"
            className="input"
            value={education}
            onChange={(event) => handleDegree(event.target.value, 0)}
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
                color: "#343434"
            }
            }} />
            <TextField 
            label="Graduation Date"
            id="outlined-size-small"
            size="small"
            className="input"
            value={education}
            onChange={(event) => handleGrad(event.target.value, 0)}
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
                color: "#343434"
            }
            }} />
          </div>
          <div className="inputs experience2">
            {isActive ? (
            <>
                <h3>Education 2</h3>
                <TextField 
            label="Institution"
            id="outlined-size-small"
            size="small"
            className="input"
            value={education}
            onChange={(event) => handleSchool(event.target.value, 1)}
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
                color: "#343434"
            }
            }} />
            <TextField 
            label="Degree"
            id="outlined-size-small"
            size="small"
            className="input"
            value={education}
            onChange={(event) => handleDegree(event.target.value, 1)}
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
                color: "#343434"
            }
            }} />
            <TextField 
            label="Graduation Date"
            id="outlined-size-small"
            size="small"
            className="input"
            value={education}
            onChange={(event) => handleGrad(event.target.value, 1)}
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
                color: "#343434"
            }
            }} />
                <button className="experience-btn" onClick={() => { setEduIsActive(false); handleEdu();}}>
                - Education
                </button>
            </>
            ) : (
                <button className="experience-btn" onClick={() => { setEduIsActive(true); handleEdu();}}>
                + Education
                </button>
            )}
            </div>
        </div>
      );
}

export default EducationInput