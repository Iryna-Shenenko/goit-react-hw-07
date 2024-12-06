import axios from "axios";
 import { createAsyncThunk } from "@reduxjs/toolkit";



 axios.default.baseURL = "https://674f66eebb559617b26f11c2.mockapi.io";

 export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => { 
    
try {
    const response = await axios.get("/contacts");
    return response.data;
} catch (e) {
    return thunkAPI.rejectWithValue(e.message);
}
});

export const addContact = createAsyncThunk("contacts/addContact",
    async ({name, number}, thunkAPI) =>{
        try {
            const response = await axios.post("/contacts", {name, number});
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }

);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async( contactId, thunkAPI) => {
        try {
            const response = await axios.delete('/contacts/${contactId}');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

