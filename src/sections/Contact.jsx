import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoMdMail } from "react-icons/io";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdPermPhoneMsg } from "react-icons/md";

function Contact() {
  const form = useRef();
  const [alertVisible, setAlertVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_824ppps", "template_x3tidwu", form.current, {
        publicKey: "XD--o8yJxRarid47m",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("message sent");
          setAlertVisible(true); // Show alert
          setTimeout(() => {
            setAlertVisible(false); // Hide alert after 3 seconds
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    console.log("Form submitted!");

    // Reset the form fields
    form.current.reset();
  };

  return (
    <section
      id="contact"
      className="flex flex-col gap-y-9 tablet:flex-row items-center justify-center pt-20 gap-x-8 w-full"
    >
      <div className="w-full tablet:max-w-lg space-y-7 px-2 place-items-center tablet:place-items-start">
        <header className="flex flex-col max-w-md w-full justify-center items-center tablet:items-start">
          <h1 className="font-montserratExtraBold text-4xl text-slate-900 text-center ">
            Let's Work Together
          </h1>
          <hr className="border-t-2 border-slate-900 my-1 w-full tablet:w-96" />
          <p className="font-poppinsBold text-lg text-sky-400">
            Tell me about your project
          </p>
        </header>

        <p className="font-poppinsRegular text-slate-900 text-xl text-center tablet:text-start">
          I'm always open to new opportunities, collaborations, or simply a
          friendly chat. Whether you have a question, a project idea, or just
          want to connect, feel free to drop me a message!
        </p>

        <div className="flex justify-center w-full px-5 tablet:px-0">
          <div className="place-items-center bg-sky-100 hover:bg-sky-200 transition-colors duration-300 rounded-md py-5 px-5 my-5 w-[50%] space-y-3 shadow-lg">
            <MdPermPhoneMsg className="text-sky-400 text-3xl" />
            <p>+639098611178</p>
          </div>

          <div className="border-l-4 border-slate-900 mx-4"></div>

          <a
            href="mailto:virtudazoy@gmail.com"
            className="flex flex-col items-center bg-sky-100 hover:bg-sky-200 transition-colors duration-300 rounded-md py-5 px-5 my-5 w-[50%] space-y-3 shadow-lg"
          >
            <IoMdMail className="text-sky-400 text-3xl" />
            <p className="text-center text-sm md:text-base lg:text-lg">
              virtudazoy@gmail.com
            </p>
          </a>
        </div>
      </div>

      <form
        id="contact-form"
        method="POST"
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg p-6 bg-slate-900/10 rounded-lg shadow-md space-y-4"
      >
        <h1 className="flex items-center justify-center font-poppinsBold text-3xl text-slate-900 mb-10">
          Message Me
          <BsFillRocketTakeoffFill className="ml-3 text-sky-400" />
        </h1>

        <div>
          <label
            htmlFor="name"
            className="block text-slate-900 font-poppinsBold mb-2"
          >
            Full Name
          </label>
          <input
            name="user_name"
            placeholder="Enter full name..."
            type="text"
            required
            className="w-full px-3 py-2 bg-sky-100 shadow-lg rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-blue-500 font-poppinsRegular"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-slate-900 font-poppinsBold mb-2"
          >
            Email
          </label>
          <input
            name="user_email"
            placeholder="Enter email..."
            type="email"
            required
            className="w-full px-3 py-2 bg-sky-100 shadow-lg rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-blue-500 font-poppinsRegular"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-slate-900 font-poppinsBold mb-2"
          >
            Message
          </label>
          <textarea
            rows="3"
            placeholder="Enter message..."
            name="message"
            required
            className="w-full px-3 py-2 bg-sky-100 shadow-lg rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-blue-500 font-poppinsRegular"
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

      {/* Alert message */}
      {alertVisible && (
        <div className="fixed bottom-[50%] right-4 bg-sky-400 text-white py-2 px-4 rounded shadow-lg">
          Message sent!
        </div>
      )}
    </section>
  );
}

export default Contact;
