import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import LoginForm from '../components/LoginForm';

const LoginPage = (props) => {
    const [registerErrors, setRegisterErrors] = useState({});
    const [loginError, setLoginError] = useState({});
    const history = useHistory();
    const {user, setUser} = props;

    useEffect(() => {
        user && localStorage.setItem('userid', user.id);
        user && history.push('/users');
    }, [user]);

    const createUser = registerForm => {
        setRegisterErrors({});
        axios.post('http://localhost:8000/api/register', registerForm, { withCredentials: true })
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                setRegisterErrors({ err }.err.response.data.errors)
            });
    }

    const loginUser = loginForm => {
        setLoginError({});
        axios.post('http://localhost:8000/api/login', loginForm, { withCredentials: true })
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                setLoginError({ err }.err.response.data)
            });
    }


    return (
        <div>
            <LoginForm onSubmitRegisterForm={createUser} onSubmitLoginForm={loginUser} registerErrors={registerErrors} loginError={loginError} />
        </div>
    )
}

export default LoginPage;