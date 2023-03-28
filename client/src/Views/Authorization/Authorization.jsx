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
            console.log('respuestaBack-->', response.data);
            
            setCookie('cookieBack', response.data.token, { path: '/' }); // actualizar el valor de cookieBack con el nuevo token
            console.log('res.data.token-->',response.data.token);
            console.log('Response is a token, congrats!!!');
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
        <div>
            <h1>Authenticating...</h1>
        </div>
    )
}

export default Authorization;

{/* {isAuthenticated && (
    <pre style={{textAlign:'start' }}>
    {JSON.stringify(user, null, 2)}
    </pre>
)} */}


// useEffect(() => {
        //   if (cookiesCurrent.token) {
        //     const userData = JSON.parse(atob(cookies.token.split('.')[1]));
        //     setUserCurrent(userData);
        //     console.log("token desencriptado",userData);
        //     dispatch(getCurrentEmployee(userData.id.toString()));
        //   }
        // }, [cookiesCurrent.token]);
        
        // useEffect(() => {
        //     dispatch(getCurrentEmployee(userData.id.toString()));
        //     console.log("state", user.id);
        //   }, []);