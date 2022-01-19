import React, { useState } from 'react';
import styles from './css/Search.module.css';
import { useHistory } from 'react-router-dom';

const Search = () => {

    const [subject, setSubject] = useState("");
    const [id, setID] = useState("");
    let history = useHistory();

    const LukeAPIWalker = () => {
        subject == ""
        ? alert("Must select subject!")
        : id == "" 
        ? history.push(`/${subject}`) 
        : history.push(`/${subject}/${id}`);
    }

    return (
        <div className={styles.searchdiv}>
            <p>Search for: </p>
            <select name="subject" id="subject" onChange={(e) => setSubject(e.target.value)} value={subject}>
                <option hidden>Subject</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <p>ID: </p>
            <input className={styles.searchinput} type="text" onChange={(e) => setID(e.target.value)} value={id}/>
            <button type="button" onClick={LukeAPIWalker}>Search</button>
        </div>
    );
};

export default Search;

