import React, { Component } from 'react'

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
            newAge: props.pet.age
        }
    }
    clickHandler = () =>{
        alert("Ouch from click handler!")
    }
    countHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    ageHandler = () => {
        this.setState({
            newAge: this.state.newAge + 1
        })
    }
    render() {
        const { firstname } = this.props
        const { pet } = this.props
        const abilities = this.props.pet.abilities.map(item => <li>{item}</li>);
        return(
            <div>
                <h1>Hello, {firstname}</h1>
                <button onClick={() => alert("Ouch!")}>Click</button>
                <button onClick={this.clickHandler}>Click to handler</button>
                <button onClick={this.countHandler}>Change Count State</button>
                <h1>Count: {this.state.count}</h1>
                <h1> {pet.petname}'s Birthday</h1>
                <h3> Age: {this.state.newAge}</h3>
                <button onClick={this.ageHandler}> Age up!</button>
                <h1>Type:</h1>
                <p>{pet.type}</p>
                <h1>Abilities:</h1>
                <ul>
                    {abilities}
                </ul>
            </div>
        )
    }
}
export default Main