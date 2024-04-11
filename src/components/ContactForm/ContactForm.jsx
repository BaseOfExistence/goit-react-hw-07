import { useId } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import css from "./ContactForm.module.css"
import { useDispatch } from "react-redux"
import { addContact } from '../../redux/contactsSlice'

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
})
export default function ContactForm() {
    const dispatch = useDispatch()
    const nameId = useId()
    const numberId = useId()
    const handleSubmit = (values, event) => {
        dispatch(addContact(values))
        event.resetForm()
    }
    return (
        <Formik initialValues={{
            name: "",
            number: ""
        }} onSubmit={handleSubmit}
        validationSchema={ValidationSchema}>
            <Form className={css.form}>
                <div className={css.container}>
                    <label htmlFor={nameId}>Name</label>
                    <Field name="name" id={nameId} />
                    <ErrorMessage name="name" as="span" />
                </div>
                <div className={css.container}>
                    <label htmlFor={numberId}>Number</label>
                    <Field name="number" id={numberId} />
                    <ErrorMessage name="number" as="span" />
                </div>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}