import React from 'react';
import { Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Header from '../Shared/Header/Header';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_h8kts7i', 'template_0lkb13l', e.target, 'user_PqKUbLfQ9eKuBkvQVf6Iy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div>
            <h1 className="mt-5 mb-5 text-3xl text-gray-200">Get In Touch</h1>

            <Form onSubmit={handleSubmit} className="w-50 mx-auto py-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" name="name" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" name="message" placeholder="Enter Your Message" rows={3} />
                </Form.Group>
                <button className="btn btn-outline-primary">Submit</button>
            </Form>
        </div>
    );
};

export default Contact;