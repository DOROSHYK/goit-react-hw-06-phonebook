import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction("contacts/addContact", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

// console.log(addContact);

const deleteContact = createAction("contacts/deleteContact");
// console.log(deleteContact);

const changeFilter = createAction("contacts/changeFilter");

const phoneBookActions = { addContact, deleteContact, changeFilter };

export default phoneBookActions;
