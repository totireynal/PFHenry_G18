import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Spinner from '../../Components/Spinner/Spinner'
import { useCookies } from 'react-cookie';
import { useState } from "react";
import { getCurrentEmployee } from '../../state/redux/actions/actions'
import { useDispatch } from "react-redux";



const Authorization = () => {

    const [cookiesCurrent] = useCookies(['token']);
    const [userCurrent, setUserCurrent] = useState(null)
  
    const dispatch = useDispatch();
    
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['token']);
    
    const { 
        getAccessTokenSilently,
        user,
        isAuthenticated
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
            // const err = error.response.data
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
    
    useEffect(() => {
      if (cookiesCurrent.token) {
        const userData = JSON.parse(atob(cookies.token.split('.')[1]));
        setUserCurrent(userData);
        console.log("token desencriptado",userData);
        dispatch(getCurrentEmployee(userData.id.toString()));
      }
    }, [cookiesCurrent.token]);
    
    // useEffect(() => {
    //     dispatch(getCurrentEmployee(userData.id.toString()));
    //     console.log("state", user.id);
    //   }, []);
    
    return(
        <div>
            <h1>Authenticating...</h1>
            {/* {isLoading && <Spinner />} */}

            {/* {isAuthenticated && (
                <pre style={{textAlign:'start' }}>
                {JSON.stringify(user, null, 2)}
                </pre>
            )} */}
        </div>
    )
}

export default Authorization;