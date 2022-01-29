import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styles from './css/ProductManager.module.css';

const ProductList = (props) => {
    const { removeFromDom, products } = props;

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className={styles.listcont}>
            <h1>All Products:</h1>
            {products 
            ? products.map((product, i) =>
                <div key={i} className={styles.listitem}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                    <button className={styles.button} onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
                </div>)
            : <i>No data to show</i>
            }
        </div>
    )
}

export default ProductList;