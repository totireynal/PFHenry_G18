// import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from 'axios';
// import { useEffect } from "react";
// import { useCookies } from 'react-cookie';
// import { useState } from 'react';



// const Login = () => {
//   const { loginWithRedirect,
//           loginWithPopup,
//           logout,
//           isAuthenticated,
//           getAccessTokenSilently
//   } = useAuth0();

//   // const [cookies] = useCookies(['cookieBack']);
// ;

//   const handleLogin = async () => {
//     await loginWithRedirect({
//       appState: {
//         returnTo: "/authorization",
//       },
//       authorizationParams: {
//         prompt: "login",
//       },
//     });
//   };


//   return (


//     <div className="h-screen w-screen flex flex-col justify-center items-center bg-white">
//       <div className="bg-slate-100 flex flex-col gap-5 justify-center items-center rounded-md p-5">
//         <button
//           className="bg-sky-400 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
//           // onClick={() => loginWithRedirect()}
//           onClick={handleLogin}
      
//         >
//           Login To StaffSphere
//         </button>
//         {/* <button
//         className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
//         // onClick={() => loginWithPopup()}
//         onClick={handleLogin}
//         >
//         Login With Popup
//       </button> */}
//       <button
//         className="bg-sky-400 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
//         onClick={() => logout()}
//       >
//         Logout
//       </button>
//         <div className="pt-14 text-center text-">
//           <h2>Yet not registered?, please go to</h2>
//         </div>
//         <Link to="/home/login/register">
//           <button
//             className="bg-sky-400 shadow-sky-200 hover:bg-sky-300 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl "
//           >
//             Register
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Login;

