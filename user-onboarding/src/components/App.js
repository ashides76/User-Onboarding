import React, { useState, useEffect } from 'react';
import Teammate from './Teammate';
import TeammateForm from './TeammateForm';
import axios from '../axios';
import '../App.css';
import schema from '../validation/formSchema';
import * as yup from 'yup';

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
  const [formErrors, setFormErrors] = useState(intialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  useEffect(() => {
    axios.get('fakeapi.com')
      .then(res => {
        // console.log('get res', res)
        setTeammates(res.data)
      })
      .catch(err => console.error(err))
  }, [])
  
  
  const postNewTeammate = (newTeammate) => {
    axios.post('fakeapi.com', newTeammate)
      .then(res => {
        // console.log('post res', res)
        setTeammates([...teammates, res.data]);
        setFormValues(initialFormValues);
        setFormErrors('')
      .catch(err => console.error(err))
      .finally(() => setFormErrors(initialFormValues))
      })
  }


  const validateForm = (input, value) => {
    yup.reach(schema, input)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [input]: ''}))
    .catch(err => setFormErrors({...formValues, [input]: err.errors[0]}))
  }
  
  const inputChange = (input, value) => {
    validateForm(input, value);
    setFormValues({...formValues, [input]: value});
  }
  
  
  const formSubmit = () => {
    const newTeammate = {
      firstName: formValues.firstName.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      civil: formValues.civil,
      hobbies: ['reading', 'coding', 'hiking'].filter(hobby => !!formValues[hobby])
      // hobbies: ['reading', 'coding', 'hiking'].filter(hobby =>console.log( hobby === true ? formValues[hobby] : false))
      // hobbies: ['reading', 'coding', 'hiking'].filter(hobby =>formValues[hobby === true ? [hobby] : []]
    }
    postNewTeammate(newTeammate);
  }
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues]);
  
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