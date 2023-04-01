// import { useState } from "react";
// import ChatBot from "../ChatBot";

// function ButtonChatBot() {
//   const [isOpen, setIsOpen] = useState(false);

//   function handleClick() {
//     setIsOpen(!isOpen);
//   }

//   function handleClose() {
//     setIsOpen(false);
//   }

//   return (
//     <div className="fixed bottom-4 right-4">
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } fixed bottom-20 right-4 z-50`}
//       >
//         <ChatBot onClose={handleClose} />
//       </div>
//       <button
//         className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-sky-400 shadow-lg hover:shadow-xl flex items-center justify-center"
//         onClick={handleClick}
//       >
//         {isOpen ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-8 w-8 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-8 w-8 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 8h16M4 16h16"
//             />
//           </svg>
//         )}
//       </button>
//     </div>
//   );
// }

// export default ButtonChatBot;

import { useState } from "react";
import ChatBot from "../ChatBot";

function ButtonChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed bottom-20 right-4 z-50`}
      >
        <ChatBot onClose={handleClose} />
      </div>
      <button
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-sky-400 shadow-lg hover:shadow-xl flex items-center justify-center"
        onClick={handleClick}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 8h16M4 16h16"
            />
          </svg>
        )}
        {isOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white absolute right-0 bottom-0 m-2 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleClose}
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default ButtonChatBot;
