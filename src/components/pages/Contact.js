import React, { useState } from 'react';
import '../../styles/Contact.css';


export default function Contact() {

  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormState(values => ({ ...values, [name]: value }));
  }

  const handleBlur = (event) => {
    const value = event.target.value;
    if (!value) {
      event.target.placeholder = 'This field is required';
      event.target.className = 'error'
      event.target.style.animation = "field-invalid 0.5s ease-out 1";
    }
  }

  const handleFocus = (event) => {
    if (event.target.className = 'error') {
      event.target.className = '';
      event.target.style.animation = '';
      event.target.placeholder = '...';
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const children = event.target.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].className = 'error') {
        children[i].className = '';
        children[i].style.animation = '';
        children[i].placeholder = '...';
      }
    }
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
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder='...'
        />
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={formState.email || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder='...'
        />
        <label>Message:</label>
        <input
          type='text'
          name='message'
          value={formState.message || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder='...'
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}