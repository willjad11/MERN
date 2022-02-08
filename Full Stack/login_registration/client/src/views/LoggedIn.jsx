import React, { useEffect, useState } from 'react';
import LogoutButton from '../components/LogoutButton'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoggedIn = (props) => {
    const [loaded, setLoaded] = useState(false);
    const {user, setUser} = props;
    const history = useHistory();

    useEffect(() => {
        localStorage.getItem('userid') && !user
            ? axios.get(`http://localhost:8000/api/users/${localStorage.getItem('userid')}`, { withCredentials: true })
                .then(res => {
                    setUser(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
            : setLoaded(true);
        !localStorage.getItem('userid') && !user && history.push('/');
    }, [user]);

    return (
        <div>
            {loaded && <h1>Welcome, {user.firstName}</h1>}
            <LogoutButton setUser={setUser} />
        </div>
    )
}

export default LoggedIn;