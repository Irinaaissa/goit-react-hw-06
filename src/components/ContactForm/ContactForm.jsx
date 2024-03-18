// import { nanoid } from 'nanoid';
// import { useSelector } from 'react-redux';
// import { phoneBook } from "..//../redux/store";
// import { useDispatch, useSelector } from "react-redux";
// 
// export default function ContactForm(){
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.item)
  // return(
{/* <> */}
{/* <div>ddd:{contacts } </div> */}
{/* <button type="submit"> */}
  {/* Add contact */}
{/* </button> */}
{/* </> */}
  // )
// }



// import css from './ContactForm.module.css';
// 
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useId } from 'react';
// import { useDispatch  } from "react-redux";
// 
// import {addContact}from "../../redux/contactsSlice"
// 
// 
// 
// 
// const ContactFormSchema = Yup.object().shape({
  // name: Yup.string()
    // .min(3, 'Too short name!')
    // .max(50, 'Too long name!')
    // .required('Required'),
  // number: Yup.string()
    // .min(3, 'Too short number!')
    // .max(50, 'Too long number!')
    // .required('Required'),
// });
// 
// export default function ContactForm() {
  // const dispatch = useDispatch();
  // const nameFieldId = useId();
  // const numberFieldId = useId();
// const handleSubmit =(values, actions)=>{
  // const newContact = {
  // 
    // name: values.name,
    // number: values.number,
  // };
  // dispatch(addContact(newContact));
  // actions.resetForm();
// }
// 
  // return (
    // <Formik
      // initialValues={{
        // 
        // name: '',
        // number: '',
      // }}
      // onSubmit={handleSubmit }
// 
      // validationSchema={ContactFormSchema} 
      // validationOnBlur={false} 
      // validateOnChange={false}
    // >
      {/* <Form className={css.form}> */}
        {/* <label htmlFor={nameFieldId}>Name</label> */}
        {/* <Field className={css.field} type="text" name="name" id={nameFieldId} /> */}
        {/* <ErrorMessage className={css.error} name="name" component="span" /> */}
        {/* <label htmlFor={numberFieldId}>Number</label> */}
        {/* <Field */}
          // className={css.field}
          // type="tel"
          // name="number"
          // id={numberFieldId}
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          // placeholder="123-45-67"
        // />
        {/* <ErrorMessage className={css.error} name="number" component="span" /> */}
        {/* <button className={css.btn} type="submit"> */}
          {/* Add contact */}
        {/* </button> */}
      {/* </Form> */}
    {/* </Formik> */}
  // );
// }


import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    number: Yup.string()
      .trim()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
  });

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <FormInput className={css.field} id={nameFieldId} type="text" name="name">
          Name
        </FormInput>

        <FormInput className={css.field} id={numberFieldId} type="text" name="number">
          Number
        </FormInput>

        <button className={css.btn} type="submit">
        Add contact
        </button>
      </Form>
    </Formik>
  );
}

function FormInput({ id, type, name, children }) {
  return (
    <div className={css.fieldContainer}>
      <label htmlFor={id}>{children}</label>
      <Field type={type} name={name} id={id} className={css.input}></Field>
      <span className={css.error}>
        <ErrorMessage name={name} as="span" />
      </span>
    </div>
  );
}