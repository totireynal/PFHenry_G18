// import Spinner from '../../Components/Spinner/Spinner'
import { Link } from "react-router-dom";
import { getCurrentEmployee } from '../../state/redux/actions/actions'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Loader/Loader";



const Authorization = () => {

    const [cookiesCurrent] = useCookies(['token']);
  
    const navigate = useNavigate();
    
    const [cookies, setCookie] = useCookies(['token']);
    
    const { 
        getAccessTokenSilently,
    } = useAuth0();

    const callProtectedApi = async () => {
        try {        
            const token = await getAccessTokenSilently();
            // console.log(token)
            const response = await axios.get("http://localhost:3001/protected", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })            
            setCookie('cookieBack', response.data.token, { path: '/' }); // actualizar el valor de cookieBack con el nuevo token
            //MUESTRA EL TOKEN DEL BACK
            // console.log('res.data.token-->',response.data.token);
            navigate(`/authorizationone`);
            
        } catch (error) {
            // const err = error.response.data
            alert("you are not allowed!");
            navigate("/");
        }
    }
    
    useEffect(() => {
        callProtectedApi();
    },[])
    
    
    return(
        <div className="h-screen w-screen flex justify-center items-center">
            <Loader />
        </div>
    )
}

export default Authorization;
