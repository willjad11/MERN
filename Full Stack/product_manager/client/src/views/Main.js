import React, {useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [refresh]);

    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id));
    }

    const refreshPage = () => {
        setRefresh(!refresh)
    }
    
    return (
        <div>
            <ProductForm refreshPage={refreshPage}/>
            <hr />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;