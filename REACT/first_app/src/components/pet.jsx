import React, { Component } from 'react'
import Main from './main'

class Pet extends Component {
    render() {
        const pepper = { 
        petname: "Pepper",
        type: "cat",
        age: 13,
        abilities: ["eat", "sleep", "scratch", "meow"]
        };
        const firstname = "Timmy";
        return (
            <>
                <Main pet={pepper} firstname={firstname}/>
            </>
        )        
    }
}
export default Pet