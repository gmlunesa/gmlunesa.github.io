import React, { useState, useEffect } from "react";
import Alert from "./Alert";

const Form = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const [status, setStatus] = useState({ visible: false, isError: false });

  const url =
    "https://script.google.com/macros/s/AKfycbzTayu1Cd3Nz3xVClk6h_IcuLEp3pmc_jTf5xuTnB80Xwm15A81IFg5EgmrjBcmmkiaMQ/exec";

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;

    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    setIsSending(true);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();
      console.log(response);

      if (response.status === "OK") {
        setIsSending(false);
        setIsSuccess(true);
        setShowAlert(true);
      } else {
        throw new Error("Unsuccessful");
      }
    } catch (e) {
      setIsSending(false);
      setIsSuccess(false);
      setShowAlert(true);
    }

    e.target.reset();
  };

  useEffect(() => {
    if (!showAlert) {
      setIsAlertVisible(false);
      return;
    }

    setIsAlertVisible(true);
    const timer = setTimeout(() => {
      setIsAlertVisible(false);
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isSuccess]);

  return (
    <form
      className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 dark:bg-gray-900 ng-untouched ng-pristine ng-valid"
      onSubmit={handleOnSubmit}
    >
      <h2 className="w-full text-3xl font-extrabold leading-tight">
        Get in touch
      </h2>
      <div>
        <label htmlFor="name" className="block mb-1 ml-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          className="block w-full p-2 rounded bg-gray-200 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 dark:bg-gray-800"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 ml-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="block w-full p-2 rounded bg-gray-200 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 dark:bg-gray-800"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 ml-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          type="text"
          placeholder="Write message here..."
          className="block w-full p-2 rounded bg-gray-200 autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 dark:bg-gray-800"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center w-full py-3 px-6 sm:mt-2 bg-rose-500 hover:bg-rose-400 dark:hover:bg-rose-600 focus:ring-rose-300 focus:ring-offset-rose-300 text-white transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
          disabled={isSending}
        >
          {isSending ? <Loading /> : `Send`}
        </button>
        {isAlertVisible && <Alert status={isSuccess} />}
      </div>
    </form>
  );
};

const Loading = () => {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Form;
