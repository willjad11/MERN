import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            newAge: 13
        }
    }
    alertMessage = (msg) => {
        alert(msg)
    }
    clickHandler = () => {
        this.setState({
            count: this.state.count + 1,
            newAge: this.state.newAge + 1
        })
    }
    render(){
        return(
            <div>
                <h1>hi</h1>
                <h3>{this.props.petname}</h3>
                <button onClick={() => this.alertMessage("message")}>class alert button</button>
                <button onClick={() => this.clickHandler()}>Class Click handler</button>
                <p>Count: {this.state.count}</p>
                <p>Age: {this.state.newAge}</p>
                <p>NAME: {this.props.person1.firstname}</p>
            </div>
        )
    }
}

export default ClassComponent