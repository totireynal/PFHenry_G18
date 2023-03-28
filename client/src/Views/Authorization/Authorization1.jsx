import { useCookies } from 'react-cookie';
import { getCurrentEmployee } from '../../state/redux/actions/actions';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

const Authorizationone = () => {

    const navigate = useNavigate();

    const [cookies] = useCookies(['cookieBack']);
    const decodedToken = cookies.cookieBack ? jwt_decode(cookies.cookieBack) : null;
    const idCurrent = decodedToken ? decodedToken.id : null;
  
    console.log('cookies-->', cookies);
    console.log('decodedToken-->', decodedToken);
    console.log('idCurrent-->', idCurrent);
    navigate(`/employees`)
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (idCurrent) {
        dispatch(getCurrentEmployee(idCurrent));
      }
    }, [dispatch, idCurrent]);


    return(
        <div>

        </div>
    )
}

export default Authorizationone;