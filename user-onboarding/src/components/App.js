import React, { useState, useEffect } from 'react';
import Teammate from './Teammate';
import TeammateForm from './TeammateForm';
import axios from 'axios';

const initialFormValues = {
    //TextInputs
    firstName: '',
    email: '',
    //dropdown
    role: '',
    //Radio buttons
    civil: '',
    //Checkboxes
    hiking: false,
    reading: false,
    coding: false
}

const intialFormErrors = {
  firstName: '',
  email: '',
  role: '',
  civil: '',
}

const initialTeammates = [];
const initialDisabled = true;

function App() {
  const [teammates, setTeammates] = useState(initialTeammates);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(intialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled);

  const getTeammates = () => {
    axios.get('http://colleague.com/api/teammates')
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  const postNewTeammate = (newTeammate) => {
    axios.post('http://colleague.com/api/teammates', newTeammate)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  const inputChange = (input, value) => {
    setFormValues({...formValues, [input]: value});
  }

  const formSubmit = () => {
    const newTeammate = {
      firstName: formValues.firstName.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      civil: formValues.civil,
      hobbies: ['reading', 'coding', 'hiking'].filter(hobby => !!formValues[hobby])
      // hobbies: ['reading', 'coding', 'hiking'].filter(hobby =>console.log( hobby === true ? [hobby] : false))
      // hobbies: ['reading', 'coding', 'hiking'].filter(hobby =>formValues[hobby === true ? [hobby] : []]
    }
    postNewTeammate(newTeammate);
  }

  useEffect(() => {
    getTeammates();
  }, [])
  
  return (
    <div className='container'>
      <h1>My Colleague(s)</h1>
      <TeammateForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
        disabled={disabled}
      />
      {
        teammates.map((teammate) => {
          return (
            <Teammate key={teammate.id} teammates={teammate} />
          )
        })
      }
    </div>
  );
}

export default App;