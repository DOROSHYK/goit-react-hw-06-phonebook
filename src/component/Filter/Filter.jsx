import React from 'react';
import style from './Filter.module.css';
import phonebookActions from '../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';


const Filter = ({ value, onChange }) => {
  return (
    <>
      <div className={style.FilterContainer}>
        <label>Find contacts by name</label>
        <input
          className={style.FilterInput}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter, 
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
