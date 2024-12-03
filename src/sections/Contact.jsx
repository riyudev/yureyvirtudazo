import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoMdMail } from "react-icons/io";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import useInView from "../helpers/useInView";
import "../styles/Animation.css";

function Contact() {
  const form = useRef();
  const [alertVisible, setAlertVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInViewHeader, headerRef] = useInView();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_824ppps", "template_x3tidwu", form.current, {
        publicKey: "XD--o8yJxRarid47m",
      })
      .then(
        () => {
          setAlertVisible(true);
          setIsSubmitting(false);
          setTimeout(() => setAlertVisible(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );

    form.current.reset();
  };

  return (
    <section
      ref={headerRef}
      id="contact"
      className={`${
        isInViewHeader
          ? "flex flex-col gap-y-9 tablet:flex-row items-center justify-center pt-20 gap-x-8 w-full bg-anim"
          : "invisible"
      } ${isSubmitting ? "cursor-wait" : ""}`}
    >
      <div className="w-full tablet:max-w-lg space-y-7 px-2 place-items-center tablet:place-items-start">
        <header className="flex flex-col max-w-md w-full justify-center items-center tablet:items-start">
          <h1 className="font-montserratExtraBold text-4xl text-slate-900 dark:text-sky-50 text-center ">
            Let's Work Together
          </h1>
          <hr className="border-t-2 border-slate-900 dark:border-sky-400/50 my-1 w-full tablet:w-96" />
          <p className="font-poppinsBold text-lg text-sky-400">
            Tell me about your project
          </p>
        </header>

        <p className="font-poppinsRegular text-slate-900 dark:text-sky-200 text-xl text-center tablet:text-start">
          I'm always open to new opportunities, collaborations, or simply a
          friendly chat. Whether you have a question, a project idea, or just
          want to connect, feel free to drop me a message!
        </p>

        <div className="flex justify-center w-full px-5 tablet:px-0">
          <div className="place-items-center bg-sky-100 dark:bg-slate-700/50 hover:bg-sky-200 dark:hover:bg-sky-800/50 transition-colors duration-300 rounded-md py-5 px-5 my-5 w-[50%] space-y-3 shadow-lg">
            <MdPermPhoneMsg className="text-sky-400 text-3xl" />
            <p className="text-slate-900 dark:text-sky-200 text-xs phone:text-base md:text-lg">
              +639098611178
            </p>
          </div>

          <div className="border-l-4 border-slate-900 dark:border-sky-400/50 mx-4"></div>

          <a
            href="mailto:virtudazoy@gmail.com"
            className="flex flex-col items-center bg-sky-100 dark:bg-slate-700/50 hover:bg-sky-200 dark:hover:bg-sky-800/50 transition-colors duration-300 rounded-md py-5 px-5 my-5 w-[50%] space-y-3 shadow-lg"
          >
            <IoMdMail className="text-sky-400 text-3xl" />
            <p className="text-center text-slate-900 dark:text-sky-200 text-xs phone:text-base md:text-lg">
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
        className="w-full max-w-lg p-6 bg-slate-900/5 dark:bg-sky-900/15 rounded-lg shadow-md dark:shadow-sky-400 space-y-4"
      >
        <h1 className="flex items-center justify-center font-poppinsBold text-3xl text-slate-900 dark:text-sky-400 mb-10">
          Message Me
          <BsFillRocketTakeoffFill className="ml-3 text-sky-400" />
        </h1>

        <div>
          <label
            htmlFor="name"
            className="block text-slate-900 dark:text-sky-200 tracking-wider font-poppinsBold mb-2"
          >
            Full Name
          </label>
          <input
            name="user_name"
            placeholder="Enter full name..."
            type="text"
            required
            className="w-full px-3 py-2 bg-sky-100 dark:bg-slate-700/50 shadow-lg rounded-lg border border-gray-100 dark:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-blue-500 font-poppinsRegular dark:text-sky-200"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-slate-900 dark:text-sky-200 tracking-wider font-poppinsBold mb-2"
          >
            Email
          </label>
          <input
            name="user_email"
            placeholder="Enter email..."
            type="email"
            required
            className="w-full px-3 py-2 bg-sky-100 dark:bg-slate-700/50 shadow-lg rounded-lg border border-gray-100 dark:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-blue-500 font-poppinsRegular dark:text-sky-200"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-slate-900 dark:text-sky-200 tracking-wider font-poppinsBold mb-2"
          >
            Message
          </label>
          <textarea
            rows="3"
            placeholder="Enter message..."
            name="message"
            required
            className="w-full px-3 py-2 bg-sky-100 dark:bg-slate-700/50 shadow-lg rounded-lg border border-gray-100 dark:border-sky-400  focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-blue-500 font-poppinsRegular dark:text-sky-200"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            value="Send"
            className="w-full bg-sky-400 text-sky-50 dark:text-slate-900 font-bold py-2 px-4 rounded-lg hover:bg-sky-500 transition-colors duration-300 font-poppinsRegular tracking-wider"
          >
            Send Message
          </button>
        </div>
      </form>

      {/**/}
      {alertVisible && (
        <div className="fixed top-20 bg-sky-400 text-white p-5 rounded shadow-lg z-50 alert-slide-down">
          <div className="flex items-center justify-center space-x-2">
            <p className="text-xl font-poppinsBold whitespace-nowrap">
              Message sent!
            </p>
            <FaCircleCheck className="text-xl" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
