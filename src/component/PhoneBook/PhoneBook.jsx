import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/contacts/contacts-actions';
import shortid from 'shortid';
import style from './PhoneBook.module.css';

const Phonebook = ({ date, onDelete }) => {
  // const keyId = shortid.generate();

  return (
    <div className={style.itemContainer}>
      <ul>
        {date.map(({ name, number }) => (
          <li className={style.item} key={shortid.generate()}>
            <span>{name}: </span>
            <span>{number} </span>
            <button
              className={style.deleteButton}
              type="button"
              onClick={() => onDelete(name)}
            >
              <p className={style.centr}>❌</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return visibleContacts;
};

const mapStateToProps = ({ contacts: {contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: ( id )=> dispatch(phonebookActions.deleteContact(id)), 
}
)

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
