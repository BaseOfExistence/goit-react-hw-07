import css from "./Contact.module.css"
import { IoPersonSharp } from "react-icons/io5"
import { FaPhoneAlt } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contactsSlice"

export default function Contact({ data }) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteContact(data.id))
    }
    return (
        <>
            <div>
                <div className={css.item}>
                    <IoPersonSharp />
                    <p>{data.name}</p>
                </div>
                <div className={css.item}>
                    <FaPhoneAlt />
                    <p>{data.number}</p>
                </div>
            </div>
            <button onClick={handleClick}>Delete</button>
        </>
    )
}