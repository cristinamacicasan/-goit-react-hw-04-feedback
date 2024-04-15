import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.container}>
      <ul>
        {contacts.map(({ id, name }) => (
          <li className={styles.contact} key={id}>
            {name}
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
