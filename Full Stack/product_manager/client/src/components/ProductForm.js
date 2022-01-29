import React, { useState } from 'react'
import styles from './css/ProductManager.module.css'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const ProductForm = (props) => {
    const { id, method, setErrors, refresh, setRefresh, initialTitle, initialPrice, initialDescription, errors } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const history = useHistory();

    const createProduct = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {title, price, description})
            .then(res => {
                setTitle("");
                setPrice("");
                setDescription("");
                setRefresh(!refresh);
            })
            .catch(err => {
                setErrors({ err }.err.response.data.errors)
                console.log(err)
            });
    }

    const updateProduct = (e) => {
        setErrors({});
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, { title, price, description })
            .then(res => {
                history.push(`/product/${id}`)
            })
            .catch(err => {
                setErrors({ err }.err.response.data.errors)
            });
    }
    
    if (method === "create") {
        var submitHandler = createProduct;
    }
    else if (method === "update") {
        // eslint-disable-next-line
        var submitHandler = updateProduct;
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <h1>Product Manager</h1>
            {errors.title && (<div style={{ color: 'red' }}>{errors.title.message}</div>)}
            <p className={styles.input}>
                <label className={styles.label}>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            {errors.price && (<div style={{ color: 'red' }}>{errors.price.message}</div>)}
            <p className={styles.input}>
                <label className={styles.label}>Price</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            {errors.description && (<div style={{ color: 'red' }}>{errors.description.message}</div>)}
            <p className={styles.input}>
                <label className={styles.label}>Description</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <input type="submit" className={styles.submit}/>
        </form>
    )
}

export default ProductForm;

