import React, { useState } from 'react';
import Teammate from './Teammate';
import TeammateForm from './TeammateForm';

const initialFormValues = {
    //TextInputs
    firstName: 'Ashish',
    email: 'ashish@ashish.com',
    //dropdown
    role: 'student',
    //Radio buttons
    civil: 'single',
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

  }

  const postNewTeammate = (newTeammate) => {

  }

  const inputChange = (input, value) => {

  }

  const formSubmit = () => {

  }

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