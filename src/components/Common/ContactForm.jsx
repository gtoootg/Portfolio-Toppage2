import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import styles from '../../styles/contactForm.module.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjqkbdn");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
     <div className="container">
     <div className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
    </div>
  );
}

export default ContactForm;
