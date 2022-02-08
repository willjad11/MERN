import React from 'react'
import axios from 'axios';
import styles from './css/Login.module.css';

const LogoutButton = (props) => {
    const {setUser} = props;

    const logoutUser = () => {
        axios.get('http://localhost:8000/api/logout', { withCredentials: true })
            .then(res => {
                setUser("");
            })
            .then(localStorage.clear())
            .catch(err => {
                console.log(err)
            });
    }
    return (
        <div>
            <button className={styles.button} onClick={() => logoutUser()}>Logout</button>
        </div>
    )
}

export default LogoutButton;

