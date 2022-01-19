import React, { useState, useEffect } from 'react';
import styles from './css/Search.module.css';
import { useParams } from 'react-router-dom'

const People = () => {

    const { id } = useParams();
    const [results, setResults] = useState("");

    useEffect(() => {
        id
            ? fetch(`https://swapi.dev/api/people/${id}`)
                .then(response => response.json())
                .then(response => setResults(response))
            : fetch(`https://swapi.dev/api/people/`)
                .then(response => response.json())
                .then(response => setResults(response.results))
    }, [id]);

    return (
        <div>
            {results['detail']
                ? <div className={styles.notfound}>
                    <p>These aren't the droids you're looking for</p>
                    <img src="https://media.vanityfair.com/photos/5d56eac902bf930008778de7/3:2/w_1998,h_1332,c_limit/obi-wan-ewan-series.jpg" />
                </div>
                : Array.isArray(results)
                    ? Object.keys(results).map(function (item, i) {
                        return (
                            <div key={i}>
                                <h1>{results[item].name}</h1>
                                <h3>Height: {results[item].height}</h3>
                                <h3>Mass: {results[item].mass}</h3>
                                <h3>Hair Color: {results[item].hair_color}</h3>
                                <h3>Skin Color: {results[item].skin_color}</h3>
                            </div>
                        );
                    })
                    : <div>
                        <h1>{results.name}</h1>
                        <h3>Height: {results.height}</h3>
                        <h3>Mass: {results.mass}</h3>
                        <h3>Hair Color: {results.hair_color}</h3>
                        <h3>Skin Color: {results.skin_color}</h3>
                    </div>
            }
        </div>
    );
};

export default People;
