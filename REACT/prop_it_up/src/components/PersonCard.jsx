import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(firstname, lastname, age, hairColor, props) {
        super(props);
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.hairColor = hairColor;
    }
    render() {
        return (
            <>
            </>
        )
    }
}

export default PersonCard