import "./input.css"
import TextField from '@mui/material/TextField';

function ExperienceInput({experience, handleCompany, handleID, handleJob, handleDates, handleDescription, isActive, setExpIsActive, handleExp}){
    //const [isActive, setIsActive] = useState(false);
    return (
        <div className="experience input-body">
        <h2>Experience</h2>
        <div className="inputs experience1">
            <h3>Job 1</h3>
            <TextField 
            label="Company"
            id="outlined-size-small"
            size="small"
            className="input"
            value={experience}
            onChange={(event) => handleCompany(event.target.value, 0) }
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
                color: "#343434"
            }
            }} />
            <TextField 
            label="Job Title"
            id="outlined-size-small"
            size="small"
            className="input"
            value={experience}
            onChange={(event) => handleJob(event.target.value, 0)}
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
                color: "#343434"
            }
            }} />
            <TextField 
            label="Dates"
            id="outlined-size-small"
            size="small"
            className="input"
            value={experience}
            onChange={(event) => handleDates(event.target.value, 0)}
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
                color: "#343434"
            }
            }} />
            <TextField 
            label="Description"
            id="outlined-size-small"
            size="small"
            className="input"
            value={experience}
            onChange={(event) => handleDescription(event.target.value, 0)}
            inputProps={{ maxLength: 75 }}
            sx={{
            input: {
                color: "#343434"
            }
            }} />
          </div>
          <div className="inputs experience2">
            {isActive ? (
            <>
                <h3>Job 2</h3>
                <TextField 
                label="Company"
                id="outlined-size-small"
                size="small"
                className="input"
                value={experience}
                onChange={(event) => handleCompany(event.target.value, 1)}
                inputProps={{ maxLength: 11 }}
                sx={{
                input: {
                    color: "#343434"
                }
                }} />
                <TextField 
                label="Job Title"
                id="outlined-size-small"
                size="small"
                className="input"
                value={experience}
                onChange={(event) => handleJob(event.target.value, 1)}
                inputProps={{ maxLength: 11 }}
                sx={{
                input: {
                    color: "#343434"
                }
                }} />
                <TextField 
                label="Dates"
                id="outlined-size-small"
                size="small"
                className="input"
                value={experience}
                onChange={(event) => handleDates(event.target.value, 1)}
                inputProps={{ maxLength: 11 }}
                sx={{
                input: {
                    color: "#343434"
                }
                }} />
                <TextField 
                label="Description"
                id="outlined-size-small"
                size="small"
                className="input"
                value={experience}
                onChange={(event) => handleDescription(event.target.value, 1)}
                inputProps={{ maxLength: 75 }}
                sx={{
                input: {
                    color: "#343434"
                }
                }} />
                <button className="experience-btn" onClick={() => { setExpIsActive(false); handleExp() }}>
                - Experience
                </button>
            </>
            ) : (
                <button className="experience-btn" onClick={() => { setExpIsActive(true); handleExp() }}>
                + Experience
                </button>
            )}
            </div>
        </div>
      );
}

export default ExperienceInput