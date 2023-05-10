import React from 'react';

const TeammateForm = ({values, submit, change, errors, disabled}) => {
    
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    
    const onChange = (event) => {
        const {name, value, type, checked} = event.target;
        const valueToUse = (type === 'checkbox' ? checked : value);
        change(name, valueToUse);
    }

    return (
        <form className='component' onSubmit={onSubmit}>
            <div style={{display: 'flex', flexDirection:'column'}}>
                <h4>Teammate Form</h4>
                <label> First Name: &nbsp; 
                    <input 
                        type='text'
                        name='firstName'
                        value={values.firstName}
                        placeholder='Enter Firstname'
                        onChange={onChange}
                    />
                </label>
               
                <label> Email: &nbsp; 
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        placeholder='Enter Email'
                        onChange={onChange}
                    />
                </label>
                
                <label> Role: &nbsp;
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value={''}>Select a Role</option>
                        <option value={'student'}>Student</option>
                        <option value={'developer'}>Software Developer</option>
                        <option value={'engineer'}>Software Engineer</option>
                        <option value={'seniorengineer'}>Senior Software Engineer</option>
                    </select>
                </label>
                <label> Single: &nbsp;
                    <input 
                        type='radio'
                        name='civil'
                        value={'single'}
                        checked={values.civil === 'single'}
                        onChange={onChange}
                    /> 
                </label>
                <label> Married: &nbsp;
                    <input 
                        type='radio'
                        name='civil'
                        value={'married'}
                        checked={values.civil === 'married'}
                        onChange={onChange}
                    /> 
                </label>
                <label> Hiking: &nbsp; 
                    <input 
                        type='checkbox'
                        name='hiking'
                        checked={values.hiking}
                        onChange={onChange}
                    />
                </label>
                <label> Reading: &nbsp;
                    <input 
                        type='checkbox'
                        name='reading'
                        checked={values.reading}
                        onChange={onChange}
                    />
                </label>
                <label> Coding: &nbsp;
                    <input 
                        type='checkbox'
                        name='coding'
                        checked={values.coding}
                        onChange={onChange}
                    />
                </label>
            </div>
            <button>Submit</button>
        </form>
    )
}
export default TeammateForm;