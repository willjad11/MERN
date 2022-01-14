import React, { Component } from 'react';
import styles from './css/Main.module.css'

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={ styles.main }>{ this.props.children }</div>
        )
    }
}

export default Main;