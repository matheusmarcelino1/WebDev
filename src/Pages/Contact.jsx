import React from 'react';
import ContactForm from '../Components/ContactForm';

const Contact = () => (
  <div className="bg-black min-h-screen flex flex-col items-center justify-center p-6">
    <h1 className="text-5xl font-bold text-purple-700 mb-6 text-center">Entre em Contato</h1>
    <p className="text-lg text-white mb-8 text-center">
      Temos prazer em ajudar! Preencha o formulário abaixo para.
    </p>
    <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
      <ContactForm />
    </div>
  </div>
);

export default Contact;
