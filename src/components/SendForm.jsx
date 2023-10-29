import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const SendForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x9lnkbl', 'template_yuixtys', form.current, '5RtqdNlugODDFGQcg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="md:w-500 lg:w-500 mx-7">
      <form className='flex flex-col pb-5' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='p-2 rounded-lg mt-2' type="text" name="user_name" />
      <label className='mt-2'>Email</label>
      <input className='p-2 rounded-lg mt-2' type="email" name="user_email" />
      <label className='mt-2'>Message</label>
      <textarea className='p-2 rounded-lg mt-1' name="message" />
      <input className='p-3 bg-indigo-600 mt-5 rounded-lg text-white uppercase font-bold text-xl' type="submit" value="Send" />
    </form>
    </div>
    
  );
};

export default SendForm