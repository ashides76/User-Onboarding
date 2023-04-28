import React from 'react';

export default function Teammate(props) {
    const {teammates} = props;
    return (
        <div className='container teammate'>
            <h2>{teammates.firstname}</h2>
            <p>Email: {teammates.email}</p>
            <p>Role: {teammates.role}</p>
            <p>Civil: {teammates.civil}</p>
        </div>

    )
}