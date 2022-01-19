import React from 'react';
import UserForm from './components/UserForm'
import styles from './components/css/App.module.css'

function App() {
  return (
    <div className={ styles.app }>
      <UserForm />
    </div>
  );
}

export default App;
