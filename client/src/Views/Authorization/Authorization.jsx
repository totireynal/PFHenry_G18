import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Spinner from '../../Components/Spinner/Spinner'
import { useState } from "react";

const Authorization = () => {

    const [isLoading, setIsLoading] = useState(false);
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
            // console.log(response.data);
            // console.log(response.headers["Content-Type"]);
            
            if (Object.keys(response.data).some(key => ['token', 'access_token', 'jwt_token'].includes(key))
            ) {
                setCookie('token', response.data.token);
                console.log(response.data.token);
                console.log('Response is a token, congrats!!!');
                navigate(`/employees`);
            } else {
                console.log('Response is text, get out');
                navigate("/");                
            }
            
        } catch (error) {
            const err = error.response.data
            alert("you are not allowed!");
            navigate("/");
        }
      }
    
      const handleSpinner = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 9000);
      }

      useEffect(() => {
        handleSpinner();
        callProtectedApi();
      },[])

      

    return(
        <div>
            <h1>Authenticating...</h1>
            {isLoading && <Spinner />}
        </div>
    )
}

export default Authorization;