import React, {useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
        errors === {} && setErrors({})
        // eslint-disable-next-line
    }, [refresh]);

    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id));
    }

    return (
        <div>
            <ProductForm 
            method="create" 
            products={products} 
            setProducts={setProducts} 
            errors={errors} 
            setErrors={setErrors} 
            refresh={refresh}
            setRefresh={setRefresh} 
            initialTitle="" 
            initialPrice="" 
            initialDescription="" />

            <hr />

            { loaded && 
            <ProductList 
            products={products} 
            removeFromDom={removeFromDom} 
            refresh={refresh} 
            setRefresh={setRefresh} 
            /> }
        </div>
    )
}

export default Main;