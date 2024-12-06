import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice"



const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filters: filtersReducer,
    }
});


export default store;