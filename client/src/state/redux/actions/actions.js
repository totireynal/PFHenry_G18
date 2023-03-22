import axios from "axios";
import { addUrlQueries } from "../../../utils/functions/addUrlQueries";
import {
  ADD_COMPANY,
  GET_COMPANIES,
  RESET_CREATE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
  GET_EMPLOYEE_DETAIL,
  DELETE_EMPLOYEE,
  GET_AREAS_EMPLOYEES,
  GET_AREAS,
  GET_POSITIONS_EMPLOYEES,
  GET_POSITIONS,
  GET_ROLES,
  GET_ROL_EMPLOYEES,
  SORT_EMPLOYEE_NAME,
  CURRENT_EMPLOYEE,
  GET_FILTER,
  CONTENT_FILTERS,
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

export const createEmployee = (info, showAnswer) => {
  return function (dispatch) {
    return axios.post("http://localhost:3001/users", info).then(
      (response) => {
        console.log(response.data.message, '........');
        showAnswer(response.data.message)
        dispatch({ type: CREATE_EMPLOYEE, payload: response.data });
      },
      (error) => {
        showAnswer(error.response.data.error)
        console.log(error.response.data)
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

    // const all = [role, area, position, sort];
    // console.log(all);

    // const allDefined = all.flatMap(el => el === undefined ? [] : el)
    // // console.log(allDefined);
    // allDefined.forEach((el, i) => console.log( url+=`&${allDefined[i]}=${el}`))


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

export const getFilter = (filters) => {
  return async function (dispatch) {
    try {
      let url = "http://localhost:3001/users";

      // console.log(encontrandoSimbolo);
      console.log(filters, 'segundo');
      
    
  
      const response = await axios(addUrlQueries(filters, url));
      const result = response.data
  
      console.log(url, 'urllllll');
      // console.log(result);
      return dispatch({
        type: GET_FILTER,
        payload: result,
      });
      
    } catch (error) {
      console.log(error.response.data);
    }

  };
}

export const contentFilters = (filter) => {
  return {
    type: CONTENT_FILTERS,
    payload: filter
  }
}

export const updateEmployee = (id, user, showAnswer) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/users/${id}`,
        user
      );
      const result = response.data;
      console.log(result, 'updateeee');
      showAnswer(response.data)

      return dispatch({
        type: UPDATE_EMPLOYEE,
      });
    } catch (error) {
      showAnswer(error.response.data.error)
    }
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

export const deleteEmployee = (id, showAnswer) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:3001/users/${id}`);
      const result = response.data;
      showAnswer(result);

      return dispatch({
        type: DELETE_EMPLOYEE,
      })
    } catch (error) {
      showAnswer(error);
    }
  };
};



export const getPositions=(filters)=>{
  return async function (dispatch) {
    try {
      let url = "http://localhost:3001/positions";

      // console.log(encontrandoSimbolo);
      console.log(filters, "segundo");

      const response = await axios(addUrlQueries(filters, url));
      const result = response.data;

      console.log(url, "urllllll");
      // console.log(result);
      return dispatch({
        type: GET_POSITIONS,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
}

// export const getPositionsEmployees = (position) => {
//   return async function(dispatch){
//     try {
//       const response = await axios.get(`http://localhost:3001/users?position=${position}`)
//       const result = response.data;
//       return dispatch({type: GET_POSITIONS_EMPLOYEES, payload: result})
//     } catch(error){
//       console.log(error.message)
//     }
//   }
// }


export const getAreas = (filters) => {
    return async function (dispatch) {
      try {
        let url = "http://localhost:3001/areas";

        // console.log(encontrandoSimbolo);
        console.log(filters, "segundo");



        const response = await axios(addUrlQueries(filters, url));
        const result = response.data;

        // console.log(url, "urllllll");
        // console.log(result);
        return dispatch({
          type: GET_AREAS,
          payload: result,
        });
      } catch (error) {
        console.log(error.response.data);
      }
    };
  // return async function(dispatch){
  //   try {
  //     const response = await axios.get("http://localhost:3001/areas")
  //     const result = response.data;
  //     return dispatch({type: GET_AREAS, payload: result})
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
}

// export const getAreasEmployees = (area) => {
//   return async function(dispatch){
//     try {
//       const response = await axios.get(`http://localhost:3001/users?area=${area}`)
//       const result = response.data;
//       return dispatch({type: GET_AREAS_EMPLOYEES, payload: result})
//     } catch(error){
//       console.log(error.message)
//     }
//   }
// }


export const getRoles=()=>{
  return async function(dispatch){
    try {
      const response = await axios.get("http://localhost:3001/roles")
      const result = response.data;
      return dispatch({type: GET_ROLES, payload: result})
    } catch (error) {
      console.log(error.message)
    }
  }
}

// export const getRolEmployees = (role) => {
//   return async function(dispatch){
//     try {
//       const response = await axios.get(`http://localhost:3001/users?role=${role}`)
//       const result = response.data;
//       return dispatch({type: GET_ROL_EMPLOYEES, payload: result})
//     } catch(error){
//       console.log(error.message)
//     }
//   }
// }



// export const sortEmployeeName = (typeSort) => {
//   return async function (dispatch) {
//     try {
//       console.log(typeSort);
//       const response = await axios.get(`http://localhost:3001/users?sort=${typeSort}`)
//       const result = response.data;

//       return dispatch({ type: SORT_EMPLOYEE_NAME , payload: result})

//     } catch (error) {
//       const err = error.response.data.error
//       alert(err);
//     }
//   }
// }



export const getCurrentEmployee = (user) => {
  return {
    type: CURRENT_EMPLOYEE,
    payload:user
  }
}