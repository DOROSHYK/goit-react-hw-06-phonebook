import React from "react";
// import shortid from 'shortid';
import InputForm from "./component/InputForm/InputForm";
import Phonebook from "./component/PhoneBook/PhoneBook";
import Filter from "./component/Filter/Filter";
import { connect } from "react-redux";
import "./App.css";
// import store from './redux/store';
// import { myAction } from './redux/contacts/contacts-actions';
// console.log(store);
// console.log(store.getState());

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title"> PhoneBook </h1>
        <InputForm />

        <Filter />

        <Phonebook />
      </div>
    </>
  );
}

export default connect()(App);
