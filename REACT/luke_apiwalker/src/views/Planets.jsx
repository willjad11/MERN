import React, { useState, useEffect } from 'react';
import styles from './css/Search.module.css';
import { useParams } from 'react-router-dom'

const Planets = () => {

    const {id} = useParams();
    const [results, setResults] = useState("");

    useEffect(() => {
        id 
            ? fetch(`https://swapi.dev/api/planets/${id}`)
                .then(response => response.json())
                .then(response => setResults(response))
            : fetch(`https://swapi.dev/api/planets/`)
                .then(response => response.json())
                .then(response => setResults(response.results))
    }, [id]);

    return (
        <div>
            { results['detail'] 
            ?   <div className={styles.notfound}>
                    <p>These aren't the droids you're looking for</p>
                    <img src="https://media.vanityfair.com/photos/5d56eac902bf930008778de7/3:2/w_1998,h_1332,c_limit/obi-wan-ewan-series.jpg" />
                </div>
            : Array.isArray(results)
            ? Object.keys(results).map(function (item, i) {
                return (
                    <div key={i}>
                        <h1>{results[item].name}</h1>
                        <h3>Climate: {results[item].climate}</h3>
                        <h3>Terrain: {results[item].terrain}</h3>
                        <h3>Climate: {results[item].climate}</h3>
                        <h3>Surface Water: {results[item].surface_water > 0 ? "True" : "False"}</h3>
                        <h3>Population: {results[item].population}</h3>
                    </div>
                );
            })
            :   <div>
                    <h1>{results.name}</h1>
                    <h3>Climate: {results.climate}</h3>
                    <h3>Terrain: {results.terrain}</h3>
                    <h3>Climate: {results.climate}</h3>
                    <h3>Surface Water: {results.surface_water > 0 ? "True" : "False"}</h3>
                    <h3>Population: {results.population}</h3>
                </div>
            }
        </div>
    );
};

export default Planets;
