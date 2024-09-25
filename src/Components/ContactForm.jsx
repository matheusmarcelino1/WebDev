import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="max-w-md w-full bg-gray-900 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Formulário</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-600 bg-gray-800 text-white rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-600 bg-gray-800 text-white rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">Assunto</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full border-gray-600 bg-gray-800 text-white rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-800 text-white rounded-md shadow-sm hover:bg-purple-600"
          >
            Enviar
          </button>
        </form>

        {submittedData && (
          <div className="mt-6 p-4 border border-gray-600 rounded-md bg-gray-800">
            <h2 className="text-lg font-semibold text-white">Formulário Enviado</h2>
            <p><strong>Nome:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Assunto:</strong> {submittedData.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;