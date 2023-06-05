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
            <div className='error'>
                <div>{errors.firstName}</div>
                <div>{errors.email}</div>
                <div>{errors.role}</div>
                <div>{errors.civil}</div>
            </div>
            <div style={{display: 'flex', flexDirection:'column'}}>
                <label> First Name: &nbsp; 
                    <input 
                        type='text'
                        name='firstName'
                        value={values.firstName}
                        placeholder='Enter Firstname'
                        onChange={onChange}
                        id='name'
                    />
                </label>
               
                <label> Email: &nbsp; 
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        placeholder='Enter Email'
                        onChange={onChange}
                        id='email'
                    />
                </label>
                
                <label> Role: &nbsp;
                    <select name='role' value={values.role} onChange={onChange} id='role'>
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
                        id='single'
                    /> 
                </label>
                <label> Married: &nbsp;
                    <input 
                        type='radio'
                        name='civil'
                        value={'married'}
                        checked={values.civil === 'married'}
                        onChange={onChange}
                        id='married'
                    /> 
                </label>
                <label> Hiking: &nbsp; 
                    <input 
                        type='checkbox'
                        name='hiking'
                        checked={values.hiking}
                        onChange={onChange}
                        id='hiking'
                    />
                </label>
                <label> Reading: &nbsp;
                    <input 
                        type='checkbox'
                        name='reading'
                        checked={values.reading}
                        onChange={onChange}
                        id='reading'
                    />
                </label>
                <label> Coding: &nbsp;
                    <input 
                        type='checkbox'
                        name='coding'
                        checked={values.coding}
                        onChange={onChange}
                        id='coding'
                    />
                </label>
            </div>
            <button disabled={disabled} id='submit'>Submit</button>
        </form>
    )
}
export default TeammateForm;