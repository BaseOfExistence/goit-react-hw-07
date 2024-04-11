import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { selectNameFilter } from "../../redux/filtersSlice"
import { useSelector } from "react-redux"
import { selectContacts } from "../../redux/contactsSlice"

export default function ContactList() {
    const filters = useSelector(selectNameFilter)
    const contacts = useSelector(selectContacts)
    const visibleContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(filters.toLowerCase())
    })
    return (
        <ul className={css.container}>
            {visibleContacts.map((data) => {
                return (
                    <li className={css.contact} key={data.id}>
                        <Contact data={data} />
                    </li>
                )
            })}
        </ul>
    )
}