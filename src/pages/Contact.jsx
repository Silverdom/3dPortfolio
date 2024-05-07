import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setisLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.value] : e.target.value
    });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
      </div>
      <form
        className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}
      >
        <label className='text-black-500 font-semibold'>
          Name
          <input 
            type='text'
            name='name'
            className='input'
            placeholder='John'
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <input 
            type='email'
            name='email'
            className='input'
            placeholder='John@gmail.com'
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <textarea
            name='message'
            rows={4}
            className='input'
            placeholder='John'
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <button 
          type='submit'
          className='btn'
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}

export default Contact
