import React, { useState } from 'react';
import styles from './css/UserForm.module.css'

const UserForm = ( props ) => {
    const [ firstname, setfirstName ] = useState( "" );
    const [ lastname, setlastName ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [errForm, setErrForm] = useState( { } )
    const [ hasbeensubmitted, setHasBeenSubmitted ] = useState( false );

    const createUser = ( e ) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password };
        console.log( "Welcome", newUser );
        setHasBeenSubmitted( true );
    };

    const formMessage = ( ) => {
        if (hasbeensubmitted) {
            return "Thank you for submitting the form!";
        }
        else {
            return "Welcome, please submit the form";
        }
    };

    const errHandler = (name, value) => {
        const errCheck = {}
        name == "firstname" && (
            value.length < 2 && value.length > 0 && (
                errCheck.firstname = "First name must be at least 2 characters!"
            )
        )
        name == "lastname" && (
            value.length < 2 && value.length > 0 && (
                errCheck.lastname = "Last name must be at least 2 characters!"
            )
        )
        name == "email" && (
            value.length < 7 && value.length > 0 && (
                errCheck.email = "Email must be at least 7 characters!"
            )
        )
        name == "password" && (
            value.length < 8 && value.length > 0 && (
                errCheck.password = "Password must be at least 8 characters!"
            )
        )
        name == "password" && (
            value !== document.getElementById("confirmpassword").value && (
                errCheck.password = "Passwords do not match!"
            )
        )
        name == "confirmpassword" && (
            value.length < 8 && value.length > 0 && (
                errCheck.password = "Password must be at least 8 characters!"
            )
        )
        name == "confirmpassword" && (
            value !== document.getElementById("password").value && (
                errCheck.password = "Passwords do not match!"
            )
        )
        console.log(errForm)
        console.log(errCheck)
        if (errForm.length > 0) {
            setErrForm({...errForm, [name]: value,});
        }
        else {
            setErrForm(errCheck);
        }
        return errCheck.length > 0 ? true : false
    };

    const changeHandler = (e) => {
        let { name, value } = e.target
        let formStatus = errHandler(name, value);
        if (formStatus) {
            name == "firstname" && (setfirstName(value));
            name == "lastname" && (setlastName(value));
            name == "email" && (setEmail(value));
            name == "confirmpassword" && (setPassword(value));
        }
    };

    return (
        <div>
            <form className={ styles.userform } onSubmit={ createUser }>
                <h3>{ formMessage( ) }</h3>
                <div>
                    { errForm.firstname && ( <div style={ { color: 'red' } }>{ errForm.firstname }</div> ) }
                    <label className={ styles.label }>First Name: </label>
                    <input name="firstname" className={styles.input} type="text" onChange={ changeHandler } />
                </div>
                <div>
                    { errForm.lastname && ( <div style={ { color: 'red' } }>{ errForm.lastname }</div> ) }
                    <label className={ styles.label }>Last Name: </label>
                    <input name="lastname" className={styles.input} type="text" onChange={ changeHandler } />
                </div>
                <div>
                    { errForm.email && ( <div style={ { color: 'red' } }>{ errForm.email }</div> ) }
                    <label className={ styles.label }>Email Address: </label>
                    <input name="email" className={styles.input} type="text" onChange={ changeHandler } />
                </div>
                <div>
                    { errForm.password && ( <div style={ { color: 'red' } }>{ errForm.password }</div> ) }
                    <label className={ styles.label }>Password: </label>
                    <input name="password" id="password" className={styles.input} type="password" onChange={ changeHandler } />
                </div>
                <div>
                    <label className={ styles.label }>Confirm Password: </label>
                    <input name="confirmpassword" id="confirmpassword" className={ styles.input } type="password" onChange={ changeHandler } />
                </div>
                <input type="submit" value="Create User" id="submit" disabled/>
            </form>
        </div>
    );
};

export default UserForm;