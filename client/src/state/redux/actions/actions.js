import axios from "axios";
import {
  ADD_COMPANY,
  GET_COMPANIES,
  RESET_CREATE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
  GET_EMPLOYEE_DETAIL,
  DELETE_EMPLOYEE,
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
};

export function resetCreate() {
  return { type: RESET_CREATE, payload: [] };
}

export const createEmployee = (info) => {
  return function (dispatch) {
    return axios.post("http://localhost:3001/users", info).then(
      (response) => {
        dispatch({ type: CREATE_EMPLOYEE, payload: response.data });
      },
      (error) => {
        console.log(error);
        dispatch({ type: CREATE_EMPLOYEE, payload: error.response.data });
      }
    );
  };
};

export const getEmployees = (name) => {
  return function (dispatch) {
    let url = "http://localhost:3001/users";

    if (name) {
      url += `?name=${name}`;
    }

    return axios.get(url).then(
      (response) => {
        dispatch({ type: GET_EMPLOYEES, payload: response.data });
      },
      (error) => {
        dispatch({ type: GET_EMPLOYEES, payload: error.response.data });
      }
    );
  };
};

export const updateEmployee = (id, user) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/users/${id}`,
        user
      );
      const result = response.data;

      return dispatch({
        type: UPDATE_EMPLOYEE,
        payload: result,
      });
    } catch (error) {}
  };
};

export const getEmployeeDetail = (id) => {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/users/${id}`).then(
      (response) => {
        dispatch({ type: GET_EMPLOYEE_DETAIL, payload: response.data });
      },
      (error) => {
        dispatch({ type: GET_EMPLOYEE_DETAIL, payload: error.response.data });
      }
    );
  };
};

export const deleteEmployee = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:3001/users/${id}`);
      const result = response.data;

      return dispatch({
        type: DELETE_EMPLOYEE,
        payload: result
      })
    } catch (error) {
      console.log(error);
    }
  }
}
