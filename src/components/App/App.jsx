

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectIsLoading, selectError } from "../../redux/selectors";


function App() {

const dispatch = useDispatch();
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);

useEffect (() => {
    dispatch(fetchContacts());

}, [dispatch]);
  

  return (
    <> 
    <div>
      <h1>Phonebook</h1>
 
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <SearchBox/>
      <ContactList />
    </div>
    </>
  );
}

export default App;