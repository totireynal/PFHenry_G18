import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postCompany } from "../../state/redux/actions/actions";
import fondo from "./fondo.jpg";
import {CardElement} from "@stripe/react-stripe-js";
import {useStripe, useElements} from "@stripe/react-stripe-js"

import logo from "./logo.jpg";

function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Campo necesario";
  } else if (/[^A-Za-z0-9 ]+/g.test(input.name)) {
    errors.name = "Nombre no puede tener caracteres especiales o tildes";
  }
  if (!input.cuit) {
    errors.cuit = "Campo necesario";
  } else if (
    !/^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g.test(input.cuit)
  ) {
    errors.cuit = "Ingrese un formato valido de CUIT";
  }
  if (!input.industry) {
    errors.industry = "Campo necesario";
  } else if (/[^A-Za-z0-9 ]+/g.test(input.industry)) {
    errors.industry = "Nombre no puede tener caracteres especiales o tildes";
  }
  if (!input.location) {
    errors.location = "Campo necesario";
  }
  if (!input.numberEmployees) {
    errors.numberEmployees = "Campo necesario";
  } else if (!/^[0-9]+$/.test(input.numberEmployees)) {
    errors.numberEmployees = "Ingrese formato numero";
  }
  if (!input.tel) {
    errors.tel = "Campo necesario";
  }
  if (!input.email) {
    errors.email = "Campo necesario";
  } else if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      input.email
    )
  ) {
    errors.email = "Ingrese un email valido";
  }
  return errors;
}

export default function CreateCompany(props) {
  let clientSecret = props.options;
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();
  const history = useNavigate();
  const companies = useSelector((state) => state.companies);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    cuit: "",
    industry: "",
    location: "",
    numberEmployees: "",
    tel: "",
    email: "",
  });

  const handleSubmit = async (e)=> {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

   

    if (
      !input.name ||
      !input.cuit ||
      !input.industry ||
      !input.numberEmployees ||
      !input.email ||
      !input.tel ||
      !input.location 
    ) {
      return alert("Complete correctamente el formulario antes de enviarlo");
    }

    setIsProcessing(true);
    const {error, paymentIntent} = await stripe.confirmCardPayment(
      clientSecret,{
      payment_method:{
      card: elements.getElement(CardElement)
      }
    },
  )
  if(error){
    setMessage(error.message);
    } else if(paymentIntent)
    {
      console.log(paymentIntent)
    setMessage("Payment status: succeeded Thank you! 🎉")
    
    } else {
    setMessage("Unexpected state");
    }

  setIsProcessing(false);

    dispatch(postCompany(input));
    console.log(input);
    setInput({
      name: "",
      cuit: "",
      industry: "",
      numberEmployees: "",
      email: "",
      location:"",
      tel:"",
    });
    setFormSubmitted(true);
    // history("/home")
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <div className="min-height-full flex">
      {/* <div className="hidden lg:block relative h-full flex-1">
        <img src={fondo} className="height" alt="" />
      </div> */}
      <div className="flex-1 flex flex-col py-14 px-4 sm:pax-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
          <div className="text-center lg:text-left">
            <h2 className="mt-1 text-3x1 font-extrabold text-gray-900">
              Registre su empresa
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Si ya tiene cuenta
              <a
                href="login.html"
                className="font-medium text-sky-600 hover:text-sky-500"
              >
                . Inicia sesion
              </a>
            </p>
          </div>
          <di className="mt-6">
            <form
              action=""
              className="space-y-1"
              onSubmit={(e) => handleSubmit(e)}
            >
              {/* grid grid-cols-1 lg:grid-col-2 lg:gap-3 */}
              <div className="grid lg:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="Name"
                    className="block  text-sm mt-2 lg:mt-0 font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Name"
                    value={input.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.name && (
                    <section className="m-0 text-red-600">
                      {errors.name}
                    </section>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="ID"
                    className="block  text-sm mt-2 lg:mt-0 font-medium text-gray-700"
                  >
                    CUIT
                  </label>
                  <input
                    className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    value={input.cuit}
                    name="cuit"
                    onChange={(e) => handleChange(e)}
                    placeholder="e.g 30203445606"
                  />
                  {errors.cuit && (
                    <section className="m-0  text-red-600">
                      {errors.cuit}
                    </section>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="Industry"
                    className="block  text-sm mt-2 lg:mt-0 font-medium text-gray-700"
                  >
                    Industry
                  </label>
                  <input
                  className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
                   type ="text"
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
                <div>
                  <label
                    htmlFor="Location"
                    className="block  text-sm mt-2 lg:mt-0 font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div>
                  <label
                    htmlFor="numberEmployees"
                    className="block  text-sm mt-2 lg:mt-0 font-medium text-gray-700"
                  >
                    Number of employees
                  </label>
                  <input
                    type="number"
                    className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
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
              <div>
                  <label
                    htmlFor="Tel"
                    className="block  text-sm mt-2 lg:mt-0 font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Phone"
                    value={input.tel}
                    name="tel"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.tel && (
                    <section className="m-0  text-red-600">
                      {errors.tel}
                    </section>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="Email"
                    className="block  text-sm mt-2 lg:mt-0 font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                    value={input.email}
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.email && (
                    <section className="m-0  text-red-600">
                      {errors.email}
                    </section>
                  )}
                </div>
                </div>
                <div>
                <CardElement id="payment-element" />
                </div>
              <div>
                <button
                  type="submit"
                  className="m2-2 w-full py-3 bg-sky-700 text-white"
                  disabled={isProcessing || !stripe || !elements || !input.name ||!input.cuit || !input.email || !input.tel || !input.location || !input.industry || !input.numberEmployees}
                >
                  {" "}
                  
                    <span>
                    {isProcessing ? "Processing ... " : "Register and pay now"}
                    </span>
                </button>
                 {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
              </div>
            </form>
          </di>
          <div>
            {formSubmitted && <Link to="/register/addEmployee">Registre a su administrador</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}
