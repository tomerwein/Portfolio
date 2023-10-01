import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <h1>Contact Me</h1>

            <label htmlFor="name" className="name-email">Name:</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="formInput"
            />
            
            <label htmlFor="email" className="name-email">Email:</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="formInput"
            />
            
            <label htmlFor="message" className="name-email">Message:</label>
            <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="formTextarea"
            ></textarea>
            <br/>
            
            <input className="formSend" type="submit" value="Send" />
            
        </form>
    );
}

export default ContactMe;
