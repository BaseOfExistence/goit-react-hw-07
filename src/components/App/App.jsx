import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"
import ContactForm from "../ContactForm/ContactForm"
import css from "./App.module.css"
import { useDispatch } from "react-redux"
import { fetchContacts } from "../../redux/contactsOps"
import { useEffect } from "react"

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}


