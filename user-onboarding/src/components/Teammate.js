import React from 'react';

export default function Teammate(props) {
    const {teammates} = props;
    return (
        <div className='container teammate'>
            <h2>{teammates.firstName}</h2>
            <p>Email: {teammates.email}</p>
            <p>Role: {teammates.role}</p>
            <p>Civil: {teammates.civil}</p>
            {!!teammates.hobbies && !! teammates.hobbies.length && 
                <div>
                    {teammates.hobbies.length > 1 ? 'Hobbies:' : 'Hobbie:'} 
                    <ul>
                        {teammates.hobbies.map((hobbie, index) => <li key={index}> {hobbie} </li>)}
                    </ul>
                </div>
            }
        </div>
    )
}