import React from 'react';
import ContactForm from './ContactForm';
import styles from './App.module.css'; 

const App = () => {
  return (
    <div className={styles.appContainer}>
      <ContactForm />
    </div>
  );
};

export default App;
