import React from 'react';

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
        <form action=''>
          <div>
            <label>Name</label>
            <input type='text' required placeholder='Balen Shah' />
          </div>
          <div>
            <label>Email</label>
            <input type='email' required placeholder='balen@xyz.com' />
          </div>
          <div>
            <label>Message</label>
            <input
              type='text'
              required
              placeholder='Tell us about your query....'
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
