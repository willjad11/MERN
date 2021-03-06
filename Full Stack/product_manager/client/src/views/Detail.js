import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";
import styles from '../components/css/ProductManager.module.css';

const Detail = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/' + id)
        .then(res => {
            history.push(`/`)
        })
        .catch(err => console.error(err));
    }

    return (
        <div className={styles.detail}>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/product/${product._id}/edit`}>Edit</Link>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
            <Link to="/">Back</Link>
        </div>
    )
}

export default Detail;