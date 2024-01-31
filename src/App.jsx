import { useState } from 'react'
import Header from './Header/header'
import Colors from './Input/Colors'
import Footer from './Footer/footer'
import './App.css'
import AboutInput from './Input/AboutInput'
import AboutPreview from './Preview/AboutPreview'
import ExperiencePreview from './Preview/ExperiencePreview'
import EducationPreview from './Preview/EducationPreview'
import ExperienceInput from './Input/ExperienceInput'
import EducationInput from './Input/EducationInput'

function App() {
  const [person, setPerson] = useState({firstName: 'Your', lastName: 'Name', title: 'Title', email: 'Email', statement: 'Statement', image: './assets/cv.png'});
  const [experience, setExperience] = useState([
      {
        id: 1,
        company: "booya", 
        job: "Growth", 
        dates: "10/2022-10/2023", 
        description: "Good and great role"
      },
      ]
    );
    const [education, setEducation] = useState([
      {
        institution: "Oregon", 
        degree: "English", 
        graduation: "2009",
      }
      ]
    );

    const [expIsActive, setExpIsActive] = useState(false);
    const [eduIsActive, setEduIsActive] = useState(false);
    const [colorLeft, setColorLeft] = useState('#5B8266')
    const [colorRight, setColorRight] = useState('#ffffff');


    /*const experiences=[{
      company: "test", 
      job: "test", 
      dates: "test", 
      description: "test"
    }];*/
    
    const handleFirstName = (firstName) => {
        const newPerson = {...person, firstName: firstName}
        setPerson(newPerson)
        console.log(person)
    }
  
    const handleLastName = (lastName) => {
        const newPerson = {...person, lastName: lastName}
        setPerson(newPerson)
    }

    const handleTitle = (title) => {
      const newPerson = {...person, title: title}
      setPerson(newPerson)
  }
  
    const handleEmail = (email) => {
        const newPerson = {...person, email: email}
        setPerson(newPerson)
    }

    const handleStatement = (statement) => {
      const newPerson = {...person, statement: statement}
      setPerson(newPerson)
  }

    /*const handleCompany = (company) => {
      const newExperience = {...experience, company: company}
      setExperience(newExperience)
  }*/

  /*const handleCompany = (experience, company, newValue) => {
    const newCompany = experience.map(item => {
      const obj = Object.assign({}, item);
      obj[company] = newValue;
      return obj;
    });
    setExperience(newCompany)
  }*/

  const handleCompany = (company, index) => {
      let newExperience = [...experience];
      let newCompany = {...newExperience[index], company: company};
      newExperience[index]=newCompany;
      setExperience(newExperience);
      console.log(experience);
    };

    /*const handleJob = (job) => {
      const newExperience = {...experience, job: job}
      setExperience(newExperience)
    }*/

    /*const handleJob = (job) => {
      const newJob = experience.map(element => {
        return {...element, job: job};
      });
      setExperience(newJob)
    }*/

    const handleJob = (job, index) => {
      let newExperience = [...experience];
      let newJob = {...newExperience[index], job: job};
      newExperience[index]=newJob;
      setExperience(newExperience);
      console.log(experience);
    };

    /*const handleDates = (dates) => {
        const newExperience = {...experience, dates: dates}
        setExperience(newExperience)
    }*/

    /*const handleDates = (date) => {
      const newDates = experience.map(element => {
        return {...element, dates: date};
      });
      setExperience(newDates)
    }*/

    const handleDates = (date, index) => {
      let newExperience = [...experience];
      let newDates = {...newExperience[index], dates: date};
      newExperience[index]=newDates;
      setExperience(newExperience);
      console.log(experience);
    };

    const handleID = (id) => {
      const newID = experience.map(element => {
        return {...element, id:id}
      })
      setExperience(newID)
    }

    /*const handleDescription = (description) => {
      const newExperience = {...experience, description: description}
      setExperience(newExperience)
    }*/

    /*const handleDescription = (description) => {
      const newDescription = experience.map(element => {
        return {...element, description: description};
      });
      setExperience(newDescription)
    }*/

    const handleDescription = (description, index) => {
      let newExperience = [...experience];
      let newDescription = {...newExperience[index], description: description};
      newExperience[index]=newDescription;
      setExperience(newExperience);
      console.log(experience);
    };

    /*const handleSchool = (school) => {
      const newSchool = education.map(element => {
        return {...element, institution: school};
      });
      setEducation(newSchool)
    }*/

    const handleSchool = (school, index) => {
      let newEducation = [...education];
      let newSchool = {...newEducation[index], institution: school};
      newEducation[index]=newSchool;
      setEducation(newEducation);
      console.log(education);
    };

    /*const handleDegree = (degree) => {
      const newDegree = education.map(element => {
        return {...element, degree: degree};
      });
      setEducation(newDegree)
    }*/

    const handleDegree = (degree, index) => {
      let newEducation = [...education];
      let newDegree = {...newEducation[index], degree: degree};
      newEducation[index]=newDegree;
      setEducation(newEducation);
      console.log(education);
    };

    /*const handleGrad = (graduation) => {
      const newGrad = education.map(element => {
        return {...element, graduation: graduation};
      });
      setEducation(newGrad)
    }*/

    const handleGrad = (graduation, index) => {
      let newEducation = [...education];
      let newGrad = {...newEducation[index], graduation: graduation};
      newEducation[index]=newGrad;
      setEducation(newEducation);
      console.log(education);
    };

    const handleEdu = () => {
      if(eduIsActive===false){
        //setEduIsActive(true);
        setEducation(education => [...education, {institution: 'TEST', degree: 'EDU', graduation: '2000'}]);
      }else{
        //setEduIsActive(false);
        const newEdu = education.splice(0,1);
        setEducation(newEdu);
        console.log(education);
      }
    }

    const handleExp = () => {
      if(expIsActive===false){
        //setExpIsActive(true);
        setExperience(experience => [...experience, {id: 2, company: 'COOL', job: 'JOB', dates: '1999', description:'GOOD STUFF'}]);
        console.log(experience[0]);
        console.log(experience[1])
      }else{
        //setExpIsActive(false);
        /*const remove = experience.slice(1,1);
        setExperience(remove);
        console.log(experience);*/
        const newExp = experience.splice(0,1);
        setExperience(newExp);
        console.log(experience);
      }
    }

    const handleImage = (e) => {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      const newPerson = {...person, image:url}
        setPerson(newPerson)
        console.log(person)
    }

  return (
    <>
      <div className = 'content'>
        <div className='left'>
          <Header />
          <Colors
          colorRight={colorRight}
          setColorRight={setColorRight}
          colorLeft={colorLeft}
          setColorLeft={setColorLeft} />
          <AboutInput 
          handleEmail={handleEmail}
          handleFirstName={handleFirstName}
          handleLastName={handleLastName}
          handleTitle={handleTitle}
          handleStatement={handleStatement}
          handleImage={handleImage}/>
          <ExperienceInput 
          handleCompany={handleCompany}
          handleID={handleID}
          handleJob={handleJob}
          handleDates={handleDates}
          handleDescription={handleDescription}
          isActive={expIsActive}
          handleExp={handleExp}
          setExpIsActive={setExpIsActive}/>
          <EducationInput 
          handleSchool={handleSchool}
          handleDegree={handleDegree}
          handleGrad={handleGrad}
          isActive={eduIsActive}
          handleEdu={handleEdu}
          setEduIsActive={setEduIsActive}
          />
        </div>
        <div className='right'>
          <div className='cv-left' style={{backgroundColor:colorLeft}}>
            <AboutPreview
            firstName={person.firstName}
            lastName={person.lastName}
            email={person.email}
            title={person.title}
            statement={person.statement}
            image={person.image} />
          </div>
          <div className='cv-right'
          style={{backgroundColor: colorRight}}>
            <ExperiencePreview
             experiences={experience} />
            <EducationPreview
            education={education}
            eduIsActive={eduIsActive} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
