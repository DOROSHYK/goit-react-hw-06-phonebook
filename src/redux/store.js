import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./contacts/contacts-reduser";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter", "_persist"],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, rootReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const allElements = { store, persistor };

export default allElements;

// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const initialState = {
//     contacts: {
//         items:
//          [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//         filter: '',

//     }
// }

// const reducer = (state = initialState, action) => {
//     return state;

// };

// const store = createStore(reducer, composeWithDevTools());

// export default store;
