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
    const idCompany = decodedToken ? decodedToken.CompanyId : null;
  
    console.log('cookies-->', cookies);
    console.log('decodedToken-->', decodedToken);
    console.log('idCurrent-->', idCurrent);
    console.log('idCompany-->', idCompany);
    navigate(`/dashboard`)
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (idCurrent) {
        dispatch(getCurrentEmployee(idCompany, idCurrent));
      }
    }, [dispatch, idCurrent]);


    return(
        <div>

        </div>
    )
}

export default Authorizationone;