import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import styles from '../components/css/Authors.module.css';

const Create = () => {
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const createAuthor = author => {
        setErrors({});
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                history.push('/api/authors')
            })
            .catch(err => {
                setErrors({ err }.err.response.data.errors)
            });
    }

    return (
        <div>
            <p className={styles.purpleText}>Add a new author:</p>
            <AuthorForm onSubmitProp={createAuthor} errors={errors} initialFullName="" />
        </div>
    )
}

export default Create;