/* eslint-disable no-useless-escape */
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postCompany } from "../../state/redux/actions/actions";
import { CardElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { getCompaniesCuit } from "../../state/redux/actions/actions";
import { getCompaniesEmail } from "../../state/redux/actions/actions";
import { getCompaniesName } from "../../state/redux/actions/actions";
import { getCompaniesTel } from "../../state/redux/actions/actions";
import UploadImage from "../../Components/Upload/UploadImage";
import { MdArrowBack } from "react-icons/md";

function validate(input) {
  let errors = {};
  if (input.name === "name") {
    if (/[^A-Za-z0-9 ]+/g.test(input.name)) {
      errors.name = "Only alphabetic characters";
    }
  }
  if (input.cuit) {
    if (!/^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g.test(input.cuit)) {
      errors.cuit = "CUIT is not valid";
    }
  }
  if (input.industry) {
    if (/[^A-Za-z0-9 ]+/g.test(input.industry)) {
      errors.industry = "Only alphabetic characters";
    }
  }
  if (input.numberEmployees) {
    if (!/^[0-9]+$/.test(input.numberEmployees)) {
      errors.numberEmployees = "Numbers only";
    }
  }
  if (input.email) {
    if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        input.email
      )
    ) {
      errors.email = "Invalid email address";
    }
  }
  return errors;
}

export default function CreateCompany(props) {
  let clientSecret = props.options;
  const stripe = useStripe();
  const elements = useElements();
  const [isCardComplete, setIsCardComplete] = useState(false);

  const [mensajeCuit, setMensajeCuit] = useState(null);
  const [mensajeName, setMensajeName] = useState(null);
  const [mensajeEmail, setMensajeEmail] = useState(null);
  const [mensajeTel, setMensajeTel] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const [isProcessing, setIsProcessing] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    cuit: "",
    industry: "",
    location: "",
    numberEmployees: "",
    tel: "",
    email: "",
    image:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg",
  });

  const handleBlurCUIT = (event) => {
    const cuit = event.target.value;
    dispatch(getCompaniesCuit(cuit)).then((resultado) => {
      if (resultado?.message) {
        setMensajeCuit(resultado?.message);
      } else {
        setMensajeCuit(null);
      }
    });
  };

  const handleBlurName = (event) => {
    const name = event.target.value;
    dispatch(getCompaniesName(name)).then((resultado) => {
      if (resultado?.message) {
        setMensajeName(resultado?.message);
      } else {
        setMensajeName(null);
      }
    });
  };

  const handleBlurEmail = (event) => {
    const email = event.target.value;
    dispatch(getCompaniesEmail(email)).then((resultado) => {
      if (resultado?.message) {
        setMensajeEmail(resultado?.message);
      } else {
        setMensajeEmail(null);
      }
    });
  };

  const handleBlurTel = (event) => {
    const valor = event.target.value;
    dispatch(getCompaniesTel(valor)).then((resultado) => {
      if (resultado?.message) {
        setMensajeTel(resultado?.message);
      } else {
        setMensajeTel(null);
      }
    });
  };

  const handleChangeImage = (url) => {
    setInput({
      ...input,
      image: url,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const response = await getCompaniesCuit(input.cuit);
    if (response.data !== "The company PruebaCUIT has been created correctly") {
    }

    if (
      !input.name ||
      !input.cuit ||
      !input.industry ||
      !input.numberEmployees ||
      !input.email ||
      !input.tel ||
      !input.location ||
      !input.image
    ) {
      return alert("Please make sure all mandatory fields are correctly filled");
    }

    setIsProcessing(true);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );
    if (error) {
      setErrorMessage("Your card was declined.");
      setSuccessMessage(null);
    } else if (paymentIntent) {
      console.log(paymentIntent);
      setSuccessMessage("Payment status: succeeded!");
      setErrorMessage(null);
    } else {
      setMessage("Unexpected state");
    }

    setIsProcessing(false);

    paymentIntent
      ? dispatch(postCompany(input))
      : setInput({
          name: "",
          cuit: "",
          industry: "",
          numberEmployees: "",
          email: "",
          location: "",
          tel: "",
          image:
            "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg",
        });
    setFormSubmitted(true);
  };

  const handleCardChange = (event) => {
    setIsCardComplete(event.complete);
  };
  function handleChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
      InformationId: 1,
    });
    setErrors(
      validate({
        ...input,
        [name]: value,
      })
    );
  }

  return (
    <div className="flex h-screen w-full">
      <Link to={"/home"}>
        <button className="fixed top-0 left-6 text-2xl mt-6 text-sky-400 hover:text-white border border-sky-400 rounded overflow-hidden px-4 py-2 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300">
          <MdArrowBack />
        </button>
      </Link>
      <div className="h-full w-1/2 flex flex-col justify-center items-center pb-16">
        <h1 className="text-6xl text-center font-bold pl-20">
          StaffSphere Company Register
        </h1>
        <span className="text-2xl pl-20">
          Simplify your team management for only USD 2,000
        </span>
      </div>
      <div className="h-full w-1/2 flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col w-2/3">
          <span className="text-2xl font-bold pb-1">Register your company</span>
          <span className="text-xs text-red-400">(*) Mandatory fields</span>
        </div>
        <div className="w-2/3">
          <form
            action=""
            // className="space-y-1"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-row w-full gap-10">
                <div className="w-1/2">
                  <label htmlFor="Name" className="text-base">
                    Name <span className="text-xs text-red-400">(*)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md block h-10 px-2 outline-none focus:border-blue-400"
                    placeholder="Name"
                    value={input.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                    onBlur={(event) => handleBlurName(event)}
                  />
                  {errors.name && (
                    <section className="m-0 text-red-600">
                      {errors.name}
                    </section>
                  )}
                  {mensajeName && (
                    <section className="m-0  text-red-600">
                      {mensajeName}
                    </section>
                  )}
                  {console.log("Mensaje en section:", mensajeName)}
                </div>
                <div className="w-1/2">
                  <label htmlFor="ID" className="text-base">
                    CUIT <span className="text-xs text-red-400">(*)</span>
                  </label>
                  <input
                    className="w-full rounded-md block h-10 px-2 outline-none focus:border-blue-400"
                    type="number"
                    value={input.cuit}
                    name="cuit"
                    onChange={(e) => handleChange(e)}
                    placeholder="e.g 30203445606"
                    onBlur={(event) => handleBlurCUIT(event)}
                  />

                  {errors.cuit && (
                    <section className="m-0  text-red-600">
                      {errors.cuit}
                    </section>
                  )}
                  {mensajeCuit && (
                    <section className="m-0  text-red-600">
                      {mensajeCuit}
                    </section>
                  )}
                  {console.log("Mensaje en section:", mensajeCuit)}
                </div>
              </div>
              <div className="flex flex-row w-full gap-10">
                <div className="w-1/2">
                  <label htmlFor="Industry" className="text-base">
                    Industry <span className="text-xs text-red-400">(*)</span>
                  </label>
                  <input
                    className="w-full rounded-md block h-10 px-2 outline-none focus:border-blue-400"
                    type="text"
                    name="industry"
                    value={input.industry}
                    onChange={(e) => handleChange(e)}
                    placeholder="Industry"
                  />
                  {errors.industry && (
                    <section className="m-0  text-red-600">
                      {errors.industry}
                    </section>
                  )}
                </div>
                <div className="w-1/2">
                  <label htmlFor="Location" className="text-base">
                    Location <span className="text-xs text-red-400">(*)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md block h-10 px-2 outline-none focus:border-blue-400"
                    placeholder="Location"
                    value={input.location}
                    name="location"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.location && (
                    <section className="m-0  text-red-600">
                      {errors.location}
                    </section>
                  )}
                </div>
              </div>
              <div className="flex flex-row w-full gap-10">
                <div className="w-1/2">
                  <label htmlFor="numberEmployees" className="text-base">
                    Number of employees{" "}
                    <span className="text-xs text-red-400">(*)</span>
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-md block h-10 px-2 outline-none focus:border-blue-400"
                    placeholder="Number of employees"
                    value={input.numberEmployees}
                    name="numberEmployees"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.numberEmployees && (
                    <section className="m-0  text-red-600">
                      {errors.numberEmployees}
                    </section>
                  )}
                </div>
                <div className="w-1/2">
                  <label htmlFor="Tel" className="text-base">
                    Phone <span className="text-xs text-red-400">(*)</span>
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-md block h-10 px-2 outline-none focus:border-blue-400"
                    placeholder="Phone"
                    value={input.tel}
                    name="tel"
                    onChange={(e) => handleChange(e)}
                    onBlur={(event) => handleBlurTel(event)}
                  />
                  {errors.tel && (
                    <section className="m-0  text-red-600">
                      {errors.tel}
                    </section>
                  )}
                  {mensajeTel && (
                    <section className="m-0  text-red-600">
                      {mensajeTel}
                    </section>
                  )}
                  {console.log("Mensaje en section:", mensajeTel)}
                </div>
              </div>
              <div className="flex flex-row w-full gap-10">
                <div className="w-1/2">
                  <label htmlFor="Email" className="text-base">
                    Email <span className="text-xs text-red-400">(*)</span>
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-md block h-10 px-2 outline-none focus:border-blue-400"
                    placeholder="Email"
                    value={input.email}
                    name="email"
                    onChange={(e) => handleChange(e)}
                    onBlur={(event) => handleBlurEmail(event)}
                  />
                  {errors.email && (
                    <section className="m-0  text-red-600">
                      {errors.email}
                    </section>
                  )}
                  {mensajeEmail && (
                    <section className="m-0  text-red-600">
                      {mensajeEmail}
                    </section>
                  )}
                  {console.log("Mensaje en section:", mensajeEmail)}
                </div>
                <div className="flex flex-row w-1/2 items-end">
                  <UploadImage handleChangeImage={handleChangeImage} />
                  <img
                    src={input.image}
                    alt="profilepic"
                    className="border-none shadow-none h-10 rounded-md ml-auto"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 pb-4">
              <label htmlFor="Payment" className="text-base">
                Payment <span className="text-xs text-red-400">(*)</span>
              </label>
              <CardElement
                id="payment-element"
                onChange={handleCardChange}
                className="pt-3"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="mt-6 bg-sky-400 text-white rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
                // className={
                //   errors
                //     ? "cursor-not-allowed mt-6 bg-sky-200 text-white rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
                //     : "mt-6 bg-sky-400 text-white rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
                // }
                disabled={
                  !isCardComplete ||
                  isProcessing ||
                  !stripe ||
                  !elements ||
                  !input.name ||
                  !input.cuit ||
                  !input.email ||
                  !input.tel ||
                  !input.location ||
                  !input.industry ||
                  !input.numberEmployees ||
                  mensajeCuit ||
                  mensajeName ||
                  mensajeEmail ||
                  mensajeTel
                }
              >
                {" "}
                <span>
                  {isProcessing ? "Processing ... " : "Register and pay now"}
                </span>
              </button>
            </div>
          </form>
          <div>
            {successMessage && formSubmitted && (
              <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">
                    {successMessage} Thank you for trusting us 🎉
                  </h2>
                  <p className="mb-4">
                    We need some additional data to complete the process
                  </p>
                  <div className="flex justify-end">
                    <Link
                      to="/addAreaPositionSA"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {errorMessage && (
              <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">{errorMessage}</h2>
                  <p className="mb-4">Please try again</p>
                  <div className="flex justify-end">
                    <Link
                      to="/"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
