

import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import styles from './ContactForm.module.css'
import Filter from './Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

   return (
    <div className={styles.container}>
       <h1 className={styles.title}>Phonebook</h1>
       <ContactForm contacts={contacts} onAddContact={addContact} />
       <h2 className={styles.subtitle}>Contacts</h2>
       <Filter value={filter} onChange={handleChangeFilter} />
       <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

  


export default App;
