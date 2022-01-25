import React from 'react';
import axios from 'axios';
import styles from './css/ProductManager.module.css';

const ProductList = (props) => {
    const { removeFromDom } = props;

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
            {props.products.map((product, i) =>
                <div key={i} className={styles.listitem}>
                    <a href={`/api/product/${product._id}`}>{product.title}</a>
                    <button className={styles.button} onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default ProductList;