import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import AuthorForm from '../components/AuthorForm'
import styles from '../components/css/Authors.module.css';

const Update = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});
    let history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [id])

    const updateAuthor = (author) => {
        setErrors({});
        axios.put(`http://localhost:8000/api/author/${id}`, author)
            .then(res => {
                history.push('/api/authors')
            })
            .catch (err => {
                setErrors({ err }.err.response.data.errors)
            });
    }

    return (
        <div>
            <p className={styles.purpleText}>Edit this author:</p>
            {loaded && (
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialFullName={author.fullName}
                    errors = {errors}
                />
            )}
        </div>
    )
}

export default Update;