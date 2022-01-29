import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import ProductForm from '../components/ProductForm'

const Update = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id])

    return (
        <div>
            {loaded && (
                <ProductForm
                    id={id}
                    method="update"
                    setErrors={setErrors}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                    errors = {errors}
                />
            )}
        </div>
    )
}

export default Update;