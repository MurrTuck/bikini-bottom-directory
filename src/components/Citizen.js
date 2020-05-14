import React from 'react';


export default function Citizen(props) {
    console.log('receiving props', props)
    return <div>
        <h1>Citizen no. {props.citizen.id}</h1>
        <p>{props.citizen.firstName} {props.citizen.lastName}</p>
        <span>Email: </span>
        <p>{props.citizen.email}</p>
        <span>School:</span>
        <p>{props.citizen.school}</p>
    </div>
}