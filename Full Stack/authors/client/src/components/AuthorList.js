import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import styles from './css/Authors.module.css';

const AuthorList = (props) => {
    const { removeFromDom } = props;
    const history = useHistory();

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className={styles.listcont}>
            <p className={styles.purpleText}>We have quotes by:</p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.map((author, i) =>
                    <tr className={styles.tr} key={i}>
                        <td className={styles.td}><p className={styles.purpleText}>{author.fullName}</p></td>
                        <td className={styles.td}>
                            <button className={styles.button} onClick={(e) => { deleteAuthor(author._id) }}>Delete</button>
                            <button className={styles.button} onClick={(e) => { history.push(`/api/authors/${author._id}/edit`) }}>Edit</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;