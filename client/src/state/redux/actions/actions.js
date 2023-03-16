import axios from "axios";
import { ADD_COMPANY, GET_COMPANIES } from "../action-types/index";

export function postCompany(payload){
    return async function(dispatch){
        // const response = await axios.post("http://localhost:3001/data/post/", payload)
        return dispatch({type: ADD_COMPANY, payload: payload})
    }
}

export function getCompanies(){
    return(dispatch) => {
        axios.get("http://localhost:3001/data/").then((info)=>{return dispatch({type: GET_COMPANIES, payload: info.data})})
        .catch((err) => console.log(err.message))
    }
}
