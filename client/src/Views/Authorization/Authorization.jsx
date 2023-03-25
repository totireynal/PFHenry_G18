import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { useEffect } from "react";

const Authorization = () => {


    const { loginWithRedirect,
        loginWithPopup,
        logout,
        isAuthenticated,
        getAccessTokenSilently
} = useAuth0();

    const callProtectedApi = async () => {
        try {        
            const token = await getAccessTokenSilently();
            console.log(token)
            const response = await axios.get("http://localhost:3001/protected", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            console.log(response.data.email);
        } catch (error) {
            console.log(error.message);
        }
      }
    
      useEffect(() => {
        callProtectedApi();
      },[])

    return(
        <div>



            <h1>Now you're registered!</h1>
        </div>
    )
}

export default Authorization;