import React, { useState, useEffect } from 'react'
import styles from './css/Authors.module.css'

const AuthorForm = (props) => {
    const { initialFullName, onSubmitProp, errors } = props;
    const [fullName, setFullName] = useState(initialFullName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ fullName });
    }

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            {errors.fullName && (<div style={{ color: 'red' }}>{errors.fullName.message}</div>)}
            <p className={styles.input}>
                <label className={styles.label}>Name:</label>
                <input type="text" onChange={(e) => setFullName(e.target.value)} value={fullName} />
            </p>
            <input type="submit" className={styles.submit}/>
        </form>
    )
}

export default AuthorForm;

