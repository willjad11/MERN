import React, { Component } from 'react';
import styles from './css/test.module.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            [props.person1.firstname]: props.person1.age,
            [props.person2.firstname]: props.person2.age,
            [props.person3.firstname]: props.person3.age,
            [props.person4.firstname]: props.person4.age
        }
    }
    ageAdder = (person, age) => {
        this.setState({
            [person]: age + 1
        })
    }
    render() {
        const { person1, person2, person3, person4 } = this.props;
        return (
            <div>
                <div>
                    <h1>{person1.lastname}, {person1.firstname}</h1>
                    <h3>Age: {this.state[person1.firstname]}</h3>
                    <h3>Hair Color: {person1.hairColor}</h3>
                    <button className={ styles.btn } onClick={() => this.ageAdder(person1.firstname, this.state[person1.firstname]) }>Age Up!</button>
                </div>
                <div>
                    <h1>{person2.lastname}, {person2.firstname}</h1>
                    <h3>Age: {this.state[person2.firstname]}</h3>
                    <h3>Hair Color: {person2.hairColor}</h3>
                    <button className={ styles.btn } onClick={() => this.ageAdder(person2.firstname, this.state[person2.firstname])}>Age Up!</button>
                </div>
                <div>
                    <h1>{person3.lastname}, {person3.firstname}</h1>
                    <h3>Age: {this.state[person3.firstname]}</h3>
                    <h3>Hair Color: {person3.hairColor}</h3>
                    <button className={ styles.btn } onClick={() => this.ageAdder(person3.firstname, this.state[person3.firstname])}>Age Up!</button>
                </div>
                <div>
                    <h1>{person4.lastname}, {person4.firstname}</h1>
                    <h3>Age: {this.state[person4.firstname]}</h3>
                    <h3>Hair Color: {person4.hairColor}</h3>
                    <button className={ styles.btn } onClick={() => this.ageAdder(person4.firstname, this.state[person4.firstname])}>Age Up!</button>
                </div>
            </div>
        )
    }
}

export default Main