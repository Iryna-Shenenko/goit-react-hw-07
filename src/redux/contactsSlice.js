import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";




const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};




const contactSlice = createSlice ({
  name: "contacts", 
  initialState: {
    items: [],
    loading: false,
    error: null
  },

    extraReducers: (builder) => {
builder
.addCase(fetchContacts.pending, handlePending)

.addCase(fetchContacts.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  })
  .addCase(fetchContacts.rejected, handleRejected)
  
  
  
  
  .addCase(addContact.pending, handlePending)
  .addCase(addContact.fulfilled, (state, action) => {
    state.loading = false;
    state.error = null;
    state.items.push(action.payload);
  })
  .addCase(addContact.rejected, handleRejected)




  .addCase(deleteContact.pending, handlePending)
  .addCase(deleteContact.fulfilled, (state,action) => {
    state.loading = false; 
    state.error = null;
    state.items = state.items.filter(contact => contact.id !== action.payload.id);
  })
  .addCase(deleteContact.rejected, handleRejected)
}
});
export const selectContact = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
    [selectContact, selectNameFilter],
     (contacts, nameFilter) => {
      if (!Array.isArray(contacts)) {
        return [];}
       return contacts.filter((item) =>
       item.name.toLowerCase() .includes(nameFilter.toLowerCase()));
     }
    );

export default contactSlice.reducer;