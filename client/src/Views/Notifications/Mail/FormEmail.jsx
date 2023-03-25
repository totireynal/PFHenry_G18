import { useState } from "react";
import axios from "axios";

const FormEmail = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/notifications', { to, subject, text });
      setSent(true);
      setError(null);
    } catch (error) {
      setError(error.response.data);
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
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="rounded-md border-2 border-gray-800 blockpx-2 h-12 pl-4 outline-none focus:border-blue-400`"
            />
          </div>
          <div className="flex flex-col w-2/3 gap-2">
            <label className="font-semibold text-xl">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded-md border-2 border-gray-800 blockpx-2 h-12 pl-4 outline-none focus:border-blue-400`"
            />
          </div>
          <div className="flex flex-col w-2/3 gap-2">
            <label className="font-semibold text-xl">Message</label>
            <textarea
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              cols="10"
              rows="10"
              className="rounded-md border-2 border-gray-800 blockpx-2 h-30 pl-4 outline-none focus:border-blue-400` resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
          >
            SEND
          </button>
        </form>
        {error && error}
        {sent && <p>E-mail sent!</p>}
      </div>
    </div>
  );
};

export default FormEmail;
