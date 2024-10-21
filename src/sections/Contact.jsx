import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Profile from "../assets/Muzan.jpg";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_824ppps', 'template_x3tidwu', form.current, {
        publicKey: 'XD--o8yJxRarid47m',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('message sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      console.log("Form submitted!");
    
      // Reset the form fields
      form.current.reset();
  };

  return (
    <section id="contact" className="flex flex-col items-center pt-20 space-y-6 tablet:space-y-14">
      <header className="flex flex-col items-center">
        <h1 className="font-montserratExtraBold text-4xl text-dark-blue"> 
          Get in Touch
        </h1>
        <hr className="border-t-2 border-dark-blue my-1 w-60" />
      </header>
      
      <div className="flex flex-col gap-y-16">
        <p className="font-poppinsRegular text-dark-blue text-xl text-center px-3">
          I'm always open to new opportunities, collaborations, or simply a friendly chat. Whether you have a question, a project idea, or just want to connect, feel free to drop me a message!
        </p>
        <div className="flex flex-col tablet:flex-row gap-y-9 items-center justify-center gap-x-16">
          <div className="bg-sky-100 shadow-lg max-w-48 tablet:max-w-80 rounded-full">
            <img className="rounded-full" src={Profile} alt="Profile" />
          </div>

          <form id="contact-form" method="POST" ref={form} onSubmit={sendEmail}
            className="w-full max-w-lg p-6 bg-dark-blue/5 rounded-lg shadow-lg space-y-4">
            <div>
              <label for="name" className="block text-dark-blue font-poppinsBold mb-2">Full Name</label>
              <input
                name="user_name"
                placeholder="Enter full name..."
                type="text"
                required
                class="w-full px-3 py-2 bg-sky-50  rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-blue-500 font-poppinsRegular"
              />
            </div>
            
            <div>
              <label for="email" className="block text-dark-blue font-poppinsBold mb-2">Email</label>
              <input
                name="user_email"
                placeholder="Enter email..."
                type="email"
                required
                className="w-full px-3 py-2 bg-sky-50 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-blue-500 font-poppinsRegular"
              />
            </div>
            
            <div>
              <label for="message" className="block text-dark-blue font-poppinsBold mb-2">Message</label>
              <textarea
                rows="3"
                placeholder="Enter message..."
                name="message"
                required
                className="w-full px-3 py-2 bg-sky-50 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-blue-500 font-poppinsRegular"
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                value="Send"
                className="w-full bg-sky-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-500 transition-colors duration-300 font-poppinsRegular tracking-wider"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
