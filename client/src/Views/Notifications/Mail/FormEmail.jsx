import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { isArray } from "mathjs";


const FormEmail = () => {

  const emailsArray = useSelector((state) => state.emailsArray);
  console.log(emailsArray);

  
  const [to, setTo] = useState("");
  
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const [error, setError] = useState({});
  const [sent, setSent] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    const errors = {};

    if (!validateEmail(to)) {
      errors.to = "Invalid e-mail address";
    }

    if (subject.trim() === "") {
      errors.subject = "Subject is required";
    }

    if (text.trim() === "") {
      errors.text = "Message is required";
    }

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const toList = to.split(",").map((email) => email.trim());
      const checkEmails = [...emailsArray, ...toList];
      try {
        for (const email of checkEmails) {
          await axios.post("http://localhost:3001/notifications", {
            to: email,
            subject,
            text,
          });
        }
        setSent(true);
        setTimeout(function () {
          setSent(false);
        }, 2000);
        setError({});
        setTo("");
        setSubject("");
        setText("");
      } catch (error) {
        setError(error.response.data);
      }
    }
  };

  return (
    <div class="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <h2 className="text-3xl font-semibold text-sky-700">SEND E-MAIL</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4 w-full h-auto"
        >
          <div className="flex flex-col w-2/3 gap-2">
            <label className="font-semibold text-xl">To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className={`rounded-md border-2 border-gray-800 block px-2 h-12 pl-4 outline-none focus:border-blue-400 ${
                error.to ? "border-red-500" : ""
              }`}
            />
            {error.to && <p className="text-red-500">{error.to}</p>}
          </div>
          <div className="flex flex-col w-2/3 gap-2">
            <label className="font-semibold text-xl">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`rounded-md border-2 border-gray-800 block px-2 h-12 pl-4 outline-none focus:border-blue-400 ${
                error.subject ? "border-red-500" : ""
              }`}
            />
            {error.subject && <p className="text-red-500">{error.subject}</p>}
          </div>
          <div className="flex flex-col w-2/3 gap-2">
            <label className="font-semibold text-xl">Message</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              cols="10"
              rows="10"
              className={`rounded-md border-2 border-gray-800 block px-2 h-30 pl-4 outline-none focus:border-blue-400 resize-none ${
                error.text ? "border-red-500" : ""
              }`}
            />
            {error.text && <p className="text-red-500">{error.text}</p>}
          </div>
          <button
            type="submit"
            className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
          >
            SEND
          </button>
        </form>
        {error.message && <p className="text-red-500">{error.message}</p>}
        {sent && (
          <p className="font-semibold text-1xl text-green-700">
            E-mail sent correctly!
          </p>
        )}
      </div>
    </div>
  );
};

export default FormEmail;
