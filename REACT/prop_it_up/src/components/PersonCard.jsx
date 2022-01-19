import React, { useState } from 'react'
import styles from './css/test.module.css'

const PersonCard = props => {
    const [ state, setState ] = useState({
        [props.firstname]: props.age,
    })
    const ageHandler = e => {
        setState ({
            [props.firstname]: state[props.firstname] + 1,
        })
    }
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: { state[props.firstname] }</p>
            <p>Hair Color: {props.hairColor}</p>
            <button className={ styles.btn } onClick={ ageHandler }>Age Up!</button>
        </div>
    )
}

export default PersonCard