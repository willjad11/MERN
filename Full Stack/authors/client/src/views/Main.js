import React, {useState, useEffect} from 'react';
import AuthorList from '../components/AuthorList';
import axios from 'axios';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = id => {
        setAuthors(authors.filter(author => author._id !== id));
    }

    return (
        <div>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;