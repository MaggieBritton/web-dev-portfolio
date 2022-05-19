import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const ContactForm = () => {
    return(
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                message: ''            
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .min(1, 'Must be at least 1 character.')
                    .max(15, 'Must be 15 or fewer characters.')
                    .required('Required'),
                lastName: Yup.string()
                    .min(1, 'Must be at least 1 character.')
                    .max(15, 'Must be 15 or fewer characters.'),
                email: Yup.string() 
                    .email('Invalid email address.')
                    .required('Required')
            })}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: '' });
            }}
        >
            <Form>

                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" placeholder="First Name" />  
                <ErrorMessage name="firstName" >
                        {msg => <div>{msg}</div>}
                </ErrorMessage>

                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" placeholder="Last Name" />
                <ErrorMessage name="lastName" >
                    {msg => <div>{msg}</div>}
                </ErrorMessage>

                <label htmlFor="email">Email</label>
                <Field name="email" type="email" placeholder="name@email.com" />
                <ErrorMessage name="email" >
                    {msg => <div>{msg}</div>}
                </ErrorMessage>

                <label htmlFor="message">Message</label>
                <Field as="textarea" name="message" rows="10" />

                <button type="button">Send</button>

            </Form>
        </Formik>
    );
}

const Contact = () => {
  return (
    <section>
        <h2>contact</h2>
        <ContactForm />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquet enim tortor at auctor urna nunc id. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Interdum varius sit amet mattis vulputate. Ante in nibh mauris cursus mattis molestie a iaculis. Vitae tortor condimentum lacinia quis. Sed augue lacus viverra vitae congue eu consequat. Vitae nunc sed velit dignissim sodales ut eu sem integer. Scelerisque fermentum dui faucibus in.</p>
        <h4>contact info</h4>
        <ul>
            <li><LocationOnIcon/>Spokane, WA <br /> USA</li>
            <li><EmailIcon />maggiebrittondev@gmail.com</li>
        </ul>
    </section>
  );
}

export default Contact;