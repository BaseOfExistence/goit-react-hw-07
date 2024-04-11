import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { selectFilteredContacts, selectError, selectLoading } from "../../redux/contactsSlice"
import { useSelector } from "react-redux"

export default function ContactList() {
    const visibleContacts = useSelector(selectFilteredContacts)
    const error = useSelector(selectError)
    const loading = useSelector(selectLoading)
    return (
        <div>
            <ul className={css.container}>
                {visibleContacts.map((data) => {
                    return (
                        <li className={css.contact} key={data.id}>
                            <Contact data={data} />
                        </li>
                    )
                })}
            </ul>
            {error && <p>Oops, something went wrong</p>}
            {loading && <p>Content is loading...</p>}
        </div>
    )
}