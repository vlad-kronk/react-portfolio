import React, { useState } from 'react';
import '../../styles/Contact.css';


export default function Contact() {

  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormState(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({});
  }

  return (
    <div>
      <form className='form-container' onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={formState.name || ''}
          onChange={handleChange}
          placeholder='...'
        />
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={formState.email || ''}
          onChange={handleChange}
          placeholder='...'
        />
        <label>Message:</label>
        <input
          type='text'
          name='message'
          value={formState.message || ''}
          onChange={handleChange}
          placeholder='...'
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}