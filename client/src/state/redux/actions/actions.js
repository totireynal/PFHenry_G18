import axios from "axios";
import {
  ADD_COMPANY,
  GET_COMPANIES,
  RESET_CREATE,
  CREATE_EMPLOYEE,
} from "../action-types/index";

export function postCompany(payload) {
  return async function (dispatch) {
    // const response = await axios.post("http://localhost:3001/data/post/", payload)
    return dispatch({ type: ADD_COMPANY, payload: payload });
  };
}

export function getCompanies() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/data/")
      .then((info) => {
        return dispatch({ type: GET_COMPANIES, payload: info.data });
      })
      .catch((err) => console.log(err.message));
  };
}

export function resetCreate() {
  return { type: RESET_CREATE, payload: [] };
}

export const createEmployee = (info) => {
  return function (dispatch) {
    return axios.post("", info).then(
      (response) => {
        dispatch({ type: CREATE_EMPLOYEE, payload: response.data });
      },
      (error) => {
        dispatch({ type: CREATE_EMPLOYEE, payload: error.response.data });
      }
    );
  };
};
