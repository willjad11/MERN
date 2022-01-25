import React, { useState } from 'react'
import axios from 'axios';
import styles from './css/ProductManager.module.css'

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {refreshPage} = props;

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        refreshPage();
    }
    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p className={styles.input}>
                <label className={styles.label}>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p className={styles.input}>
                <label className={styles.label}>Price</label>
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p className={styles.input}>
                <label className={styles.label}>Description</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <input type="submit" className={styles.submit}/>
        </form>
    )
}

export default ProductForm;

