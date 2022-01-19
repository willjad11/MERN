import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonFetch = props => {
    const [responseData, setResponseData] = useState(null);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => { setResponseData(response.data) })
    }, []);
    return (
        <div>
            <button type="button" onClick={console.log(responseData)}>Fetch!</button>
            {responseData}
        </div>
    )
}

export default PokemonFetch
