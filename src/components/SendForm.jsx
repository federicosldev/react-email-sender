import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export const SendForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x9lnkbl",
        "template_yuixtys",
        form.current,
        "5RtqdNlugODDFGQcg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Su mensaje fue enviado");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("No se pudo enviar");
        }
      );
  };

  return (
    <div className="md:w-500 lg:w-500 ">
      <form className="flex flex-col pb-5" ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input
          className="p-2 rounded-lg mt-2 mb-2"
          type="text"
          name="user_name"
          placeholder="example@email.com, second@email.com"
          required
        />
        <label className="mt-2">To</label>
        <input
          className="p-2 rounded-lg mt-2"
          type="email"
          name="user_email"
          multiple
          placeholder="example@email.com, second@email.com"
          required
        />
        <label className="mt-2">Subject</label>
        <input
          className="p-2 rounded-lg mt-2"
          type="text"
          name="email_subject"
          required
        />
        <label className="mt-2">Message</label>
        <textarea
          className="p-2 rounded-lg mt-1"
          name="message"
          rows="5"
          required
        />

        <input
          className="p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-5 rounded-lg text-white uppercase font-bold text-xl"
          type="submit"
          value="Send"
        />
      </form>
      <p>{status}</p>
    </div>
  );
};
export default SendForm;
