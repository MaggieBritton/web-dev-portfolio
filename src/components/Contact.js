import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const ContactForm = () => {
    
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const onSubmit = (values, { resetForm }) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
          })
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.status)
                } else if (response.ok) {
                    alert("Success!");
                    resetForm({ values: '' });
                } else {
                    alert("Something went wrong!");
                }
                return response
            })
            .catch(error => alert(error));
        console.log(values);    
    }  
    
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
            onSubmit={onSubmit}
        >
            {(formik) => (
            <Form className="contact-form">
            <input type="hidden" name="form-name" value="contact" />
                <div className="form-firstName">
                    <label htmlFor="firstName">First Name<span className="required-star">&#42;</span></label>
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
                    <label htmlFor="email">Email<span className="required-star">&#42;</span></label>
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
                    <button
                        disabled={!formik.isValid || !formik.dirty}
                        className="form-send-button" type="submit">Send</button>
                </div>
            </Form>
            )}
        </Formik>
    );
}

const Contact = () => {
  return (
    <motion.div className="contact-container" id="contact"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y:0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeOut', duration: 1 }}
    >
        <h2>contact</h2>
        <div className="contact-content-container">
            <div className="contact-form-container">
               <ContactForm /> 
            </div>
            <div className="contact-info-container">
                <p className="contact-text">I'm open to taking on on new projects. I would love to discuss a project you have in mind, whether it be a personal site for you, a site for your business, or something else! </p>
                <p className="contact-text">I am currently in the process of relocating from Decorah, IA to Spokane, WA. I will be seeking employment in Spokane starting in July 2022. If you think I would be a good fit for your company, please don't hesitate to reach out! </p>
                <h4 className="contact-info">contact info</h4>
                <ul className="contact-list">
                    <li className="contact-list-item"><LocationOnIcon sx={{ color: '#005477' }} className="contact-info-icon" />Spokane, WA USA</li>
                    <li className="contact-list-item"><EmailIcon sx={{ color: '#005477' }} className="contact-info-icon" />margaretbrittondev@gmail.com</li>
                </ul>
            </div>
        </div> 
    </motion.div>
  );
}

export default Contact;