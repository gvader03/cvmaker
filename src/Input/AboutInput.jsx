import "./input.css"
import TextField from '@mui/material/TextField';

function AboutInput({person, handleFirstName, handleLastName, handleTitle, handleEmail, handleStatement, handleImage}){
    /*const [person, setPerson] = useState({firstName: 'Your', lastName: 'Name', email: 'email'});
    
    const handleFirstName = (firstName) => {
        const newPerson = {...person, firstName: firstName}
        setPerson(newPerson)
    }
  
    const handleLastName = (lastName) => {
        const newPerson = {...person, lastName: lastName}
        setPerson(newPerson)
    }
  
    const handleEmail = (email) => {
        const newPerson = {...person, email: email}
        setPerson(newPerson)
    }*/

    return (
        <div className="input-body">
          <h2>About You</h2>
          <div className="inputs">
            <TextField 
            label="First Name"
            id="outlined-size-small"
            size="small"
            className="input"
            value={person}
            onChange={(event) => handleFirstName(event.target.value)}
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
              color: "#343434",
            }
          }} />

            <TextField 
            label="Last Name"
            id="outlined-size-small"
            size="small"
            className="input"
            value={person}
            onChange={(event) => handleLastName(event.target.value)}
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
              color: "#343434"
            }
          }} />
            
            <TextField 
            label="Title"
            id="outlined-size-small"
            size="small"
            className="input"
            value={person}
            onChange={(event) => handleTitle(event.target.value)}
            inputProps={{ maxLength: 11 }}
            sx={{
            input: {
              color: "#343434"
            }
          }} />
            
            <TextField 
            label="Email"
            id="outlined-size-small"
            size="small"
            className="input"
            value={person}
            onChange={(event) => handleEmail(event.target.value)}
            inputProps={{ maxLength: 25 }}
            sx={{
            input: {
              color: "#343434"
            }
          }} />

          <TextField 
          label="About You"
          id="outlined-size-small"
          size="small"
          className="input"
          value={person}  
          onChange={(event) => handleStatement(event.target.value)}
          inputProps={{ maxLength: 200 }}
          sx={{
            input: {
              color: "#343434"
            }
          }} />
          <label 
              htmlFor="file" 
              id="filepicture">
                Your picture
          </label>
          <input 
              className="image-select"
              type="file" 
              id="file" 
              accept="image/png, image/jpeg"
              onChange={(event) => handleImage(event)} 
              />
            </div>
        </div>
      );
}

export default AboutInput;