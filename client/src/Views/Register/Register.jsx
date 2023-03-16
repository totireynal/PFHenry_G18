import {React, useEffect, useState} from "react";
import {Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { postCompany } from "../../state/redux/actions/actions";
import fondo from "./fondo.jpg"
import logo from "./logo.jpg"



function validate(input){
    let errors={};
    
    if (!input.name) {
        errors.name = "Campo necesario";
    }else if(/[^A-Za-z0-9 ]+/g.test(input.name)){
        errors.name = "Nombre no puede tener caracteres especiales o tildes";
    }
    if (!input.cuit) {
        errors.cuit = "Campo necesario";
    }else if (!/^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g.test(input.cuit)) {
        errors.cuit = "Ingrese un formato valido de CUIT";
    }
    if (!input.rubro) {
        errors.rubro = "Campo necesario";
    }else if(/[^A-Za-z0-9 ]+/g.test(input.rubro)){
        errors.rubro = "Nombre no puede tener caracteres especiales o tildes";
    }
    if (!input.location) {
        errors.location = "Campo necesario";
    }
    if (!input.amount) {
        errors.amount = "Campo necesario";
    }else if (!/^[0-9]+$/.test(input.amount)) {
        errors.amount = "Ingrese formato numero"
    }
    if (!input.phone) {
        errors.phone = "Campo necesario";
    }
    if (!input.email) {
        errors.email="Campo necesario";
    }else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email)) {
        errors.email = "Ingrese un email valido";
    }
    return errors;
}


export default function CreateCompany(){
    const dispatch = useDispatch();
    const history = useNavigate();
    const companies = useSelector((state)=> state.companies);
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name:"",
        cuit:"",
        rubro:"",
        location:"",
        amount:"",
        phone:"",
        email:"",
    })

    function handleSubmit(e){
        e.preventDefault();
        if (!input.name || !input.cuit || !input.rubro || !input.amount || !input.email) {
            return alert("Complete correctamente el formulario antes de enviarlo")
        }
        dispatch(postCompany(input))
        console.log(input);
        alert("Empresa registrada correctamente")
        setInput({
            name:"",
            cuit:"",
            rubro:"",
            amount:"",
            email:"",
        })
        // history("/home")
    }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    return (

        <div className="min-height-full flex">
            <div className="hidden lg:block relative h-full flex-1">
                <img src={fondo} className="height" alt=""/>
            </div>
            <div className="flex-1 flex flex-col py-14 px-4 sm:pax-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
                    <div className="text-center lg:text-left">
                    <h2 className="mt-1 text-3x1 font-extrabold text-gray-900">
                        Registre su empresa
                    </h2>
                    <p className = "mt-2 text-sm text-gray-600">
                        Si ya tiene cuenta
                        <a href="login.html" className="font-medium text-sky-600 hover:text-sky-500">. Inicia sesion</a>
                        </p>
                    </div>
                    <div className="mt-6">
                        <form action="" className="space-y-1" onSubmit={(e) => handleSubmit(e)}>
                        {/* grid grid-cols-1 lg:grid-col-2 lg:gap-3 */}
                            <div className="grid lg:grid-cols-2 gap-3">
                                <div>
							        <label htmlFor="Name" className="block  text-sm mt-2 lg:mt-0 font-medium text-gray-700">Name</label>
							        <input type="text" className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" value={input.name} name="name" onChange={(e)=> handleChange(e)}/>
                                    {errors.name && (<section className="m-0 text-red-600">{errors.name}</section>)}
						        </div>
                                <div>
							        <label htmlFor="ID" class="block  text-sm mt-2 lg:mt-0 font-medium text-gray-700">ID</label>
							        <input className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={input.cuit} name="cuit" onChange={(e)=> handleChange(e)} placeholder="e.g 30203445606"/>
                                    {errors.cuit && (<section className="m-0  text-red-600" >{errors.cuit}</section>)}
						        </div>
                                <div>
							        <label htmlFor="Rubro" className="block  text-sm mt-2 lg:mt-0 font-medium text-gray-700">Rubro</label>
							        <input type="text" className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Rubro" value={input.rubro} name="rubro" onChange={(e)=> handleChange(e)}/>
                                    {errors.rubro && (<section className="m-0  text-red-600">{errors.rubro}</section>)}
						        </div>
                                <div>
							        <label htmlFor="Email" className= "block  text-sm mt-2 lg:mt-0 font-medium text-gray-700">Email</label>
							        <input type="email" className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" value={input.email} name="email" onChange={(e)=> handleChange(e)}/>
                                    {errors.email && (<section className="m-0  text-red-600">{errors.email}</section>)}
						        </div>
                                <div>
							        <label htmlFor="Amount" className="block  text-sm mt-2 lg:mt-0 font-medium text-gray-700">Number of employees</label>
							        <input type="number" className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Number of employees" value={input.amount} name="amount" onChange={(e)=> handleChange(e)}/>
                                    {errors.amount && (<section className="m-0  text-red-600" >{errors.amount}</section>)}
						        </div>
                            </div>
                            <div>
						        <button type="submit" className="m2-2 w-full py-3 bg-sky-700 text-white"> Registrarse
					            </button>
					        </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        // <div class ="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
        //     <div>
        //     </div>
        //     <div>
        //         <h2>Registra tu empresa</h2>
        //         <form onSubmit={(e) => handleSubmit(e)}>
        //             <div>
        //                 <label>Name: </label>
        //                 <input type="text" value={input.name} name="name" onChange={(e)=> handleChange(e)}/>
        //                 {errors.name && (<section>{errors.name}</section>)}
        //             </div>
        //             <div>
        //                 <label>CUIT: </label>
        //                 <input type="number" value={input.cuit} name="cuit" onChange={(e)=> handleChange(e)} placeholder="e.g 30203445606"/>
        //                 {errors.cuit && (<section>{errors.cuit}</section>)}
        //             </div>
        //             <div>
        //                 <label>Rubro: </label>
        //                 <input type="text" value={input.rubro} name="rubro" onChange={(e)=> handleChange(e)}/>
        //                 {errors.rubro && (<section>{errors.rubro}</section>)}
        //             </div>
        //             <div>
        //                 <label>Location: </label>
        //                 <input type="text" value={input.location} name="location" onChange={(e)=> handleChange(e)}/>
        //                 {errors.location && (<section>{errors.location}</section>)}
        //             </div>
        //             <div>
        //                 <label>Amount: </label>
        //                 <input type="number" value={input.amount} name="amount" onChange={(e)=> handleChange(e)}/>
        //                 {errors.amount && (<section>{errors.amount}</section>)}
        //             </div>
        //             <div>
        //                 <label>Phone: </label>
        //                 <input type="number" value={input.phone} name="phone" onChange={(e)=> handleChange(e)}/>
        //                 {errors.phone && (<section>{errors.phone}</section>)}
        //             </div>
        //             <div>
        //                 <label>Email: </label>
        //                 <input type="email" value={input.email} name="email" onChange={(e)=> handleChange(e)}/>
        //                 {errors.email && (<section>{errors.email}</section>)}
        //             </div>
        //             <div>
        //                 <button type="submit" disabled={Object.keys(errors).length === 0?false:true}>Registrar</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
    )

}

export default Register;