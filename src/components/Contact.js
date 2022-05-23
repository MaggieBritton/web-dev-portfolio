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
            <Form className="contact-form">
                <div className="form-firstName">
                    <label htmlFor="firstName">First Name</label>
                    <Field className="field" name="firstName" id="firstName" type="text" placeholder="First Name" />  
                    <ErrorMessage name="firstName">
                    {msg => <div className="error">{msg}</div>}
                    </ErrorMessage> 
                </div>
                
                <div className="form-lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <Field className="field" name="lastName" id="lastName" type="text" placeholder="Last Name" />
                    <ErrorMessage name="lastName" >
                    {msg => <div className="error">{msg}</div>}
                    </ErrorMessage> 
                </div>
                
                <div className="form-email">
                    <label htmlFor="email">Email</label>
                    <Field className="field" name="email" id="email" type="email" placeholder="name@email.com" />
                    <ErrorMessage name="email" >
                    {msg => <div className="error">{msg}</div>}
                    </ErrorMessage> 
                </div>
                
                <div className="form-message">
                    <label htmlFor="message">Message</label>
                    <Field className="field" as="textarea" name="message" id="message" rows="10" />    
                </div>
               
                <div className="form-button">
                    <button className="form-send-button"type="button">Send</button> 
                </div>
                

            </Form>
        </Formik>
    );
}

const Contact = () => {
  return (
    <div className="contact-container">
        <h2>contact</h2>
        <div className="contact-content-container">
            <div className="contact-form-container">
               <ContactForm /> 
            </div>
            <div className="contact-info-container">
                <p className="contact-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquet enim tortor at auctor urna nunc id. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Interdum varius sit amet mattis vulputate. Ante in nibh mauris cursus mattis molestie a iaculis. Vitae tortor condimentum lacinia quis. Sed augue lacus viverra vitae congue eu consequat. Vitae nunc sed velit dignissim sodales ut eu sem integer. Scelerisque fermentum dui faucibus in.</p>
                <h4 className="contact-info">contact info</h4>
                <ul className="contact-list">
                    <li className="contact-list-item"><LocationOnIcon sx={{ color: '#005477' }} className="contact-info-icon" />Spokane, WA USA</li>
                    <li className="contact-list-item"><EmailIcon sx={{ color: '#005477' }} className="contact-info-icon" />margaretbrittondev@gmail.com</li>
                </ul>
            </div>
        </div> 
    </div>
  );
}

export default Contact;