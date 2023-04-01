import axios from "axios";
import { addUrlQueries } from "../../../Utils/functions/addUrlQueries";
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
  GET_AREAS_NUM,
  GET_POSITIONS_EMPLOYEES,
  GET_POSITIONS,
  GET_POSITIONS_NUM,
  GET_ROLES,
  GET_ROL_EMPLOYEES,
  SORT_EMPLOYEE_NAME,
  CURRENT_EMPLOYEE,
  GET_FILTER,
  CONTENT_FILTERS,
  CLEAN_URL,
  GET_COMPANIES_CUIT,
  ADD_RATING,
  GET_ARRAY_EMAILS,
  CLEAN_ARRAY_EMAILS,
  POST_CRUD_AREA,
  GET_CRUD_AREAS,
  DELETE_CRUD_AREAS,
  POST_CRUD_POSITION,
  GET_CRUD_POSITION,
  DELETE_CRUD_POSITION,
} from "../action-types/index";

export function postCompany(payload) {
  return async function(dispatch) {
    console.log("Payload: ", payload);
    const response = await axios.post(
      "http://localhost:3001/companies/register",
      payload
    );
    console.log("Response.data: ", response.data);
    return dispatch({ type: ADD_COMPANY, payload: response.data });
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
  return function(dispatch) {
    console.log(info, "infoooo");
    return axios.post("http://localhost:3001/users", info).then(
      (response) => {
        console.log(response.data, "........");
        showAnswer(response.data);
        dispatch({ type: CREATE_EMPLOYEE, payload: response.data });
      },
      (error) => {
        showAnswer(error.response.data.error);
        console.log(error.response.data);
        dispatch({ type: CREATE_EMPLOYEE, payload: error.response.data });
      }
    );
  };
};

export const getEmployees = (filters, showAnswer, idCompany) => {
  console.log('llega',idCompany);
  return function(dispatch) {
    let url = `http://localhost:3001/users/${idCompany}`;
    console.log("filtrosget", url);

    // if (name) {
    //   url += `?name=${name}`;
    // }

    // const all = [role, area, position, sort];
    // console.log(all);

    // const allDefined = all.flatMap(el => el === undefined ? [] : el)
    // // console.log(allDefined);
    // allDefined.forEach((el, i) => console.log( url+=`&${allDefined[i]}=${el}`))
    // console.log(url);
    
    if(idCompany !== undefined) { 
    axios.get(addUrlQueries(filters, url)).then(
      (response) => {
        showAnswer("");
        console.log("resp-->",response.data);
        return dispatch({ type: GET_EMPLOYEES, payload: response.data });
      },
      (error) => {
        showAnswer(error.response.data);
        // console.log("resp-err->",error.response.data.error);
      }
    );
  }};
};

export const getFilter = (filters, idCompany) => {
  return async function(dispatch) {
    try {
      let url = `http://localhost:3001/users/${idCompany}`;

      console.log("filtros", url);

      const response = await axios(addUrlQueries(filters, url));
      const result = response.data;

      console.log(result);
      return dispatch({
        type: GET_FILTER,
        payload: result,
      });
    } catch (error) {
      // console.log(error.response.data);
    }
  };
};

export const contentFilters = (filter) => {
  return {
    type: CONTENT_FILTERS,
    payload: filter,
  };
};

export const updateEmployee = (id, user, showAnswer) => {
  return async (dispatch) => {
    try {
      // console.log(user, 'user upppp');
      const response = await axios.put(
        `http://localhost:3001/users/${id}`,
        user
      );
      const result = response.data;
      showAnswer(result);

      return dispatch({
        type: UPDATE_EMPLOYEE,
      });
    } catch (error) {
      showAnswer(error.response.data.error);
    }
  };
};

export const getEmployeeDetail = (CompanyId, id) => {
  return function(dispatch) {
    return axios.get(`http://localhost:3001/users/${CompanyId}/${id}`).then(
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
      });
    } catch (error) {
      showAnswer(error);
    }
  };
};

export const getPositions = (filters, CompanyId) => {
  return async function(dispatch) {
    try {
      let url = `http://localhost:3001/positions/${CompanyId}`;

      const response = await axios(addUrlQueries(filters, url));
      const result = response.data;

      return dispatch({
        type: GET_POSITIONS,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const getPositionsNum = (filters) => {
  return async function(dispatch) {
    try {
      let url = "http://localhost:3001/positions/raw";

      const response = await axios(url);
      const result = response.data;
      console.log(result, "rrrrrr");

      return dispatch({
        type: GET_POSITIONS_NUM,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

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

export const getAreas = (filters, CompanyId) => {
  return async function(dispatch) {
    try {
      let url = `http://localhost:3001/areas/${CompanyId}`;

      // console.log(encontrandoSimbolo);

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
};

export const getAreasNum = (filters) => {
  return async function(dispatch) {
    try {
      let url = "http://localhost:3001/areas/ars";

      const response = await axios(url);
      const result = response.data;

      return dispatch({
        type: GET_AREAS_NUM,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

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

export const getRoles = (filters) => {
  return async function(dispatch) {
    try {
      let url = "http://localhost:3001/roles";

      // console.log(encontrandoSimbolo);

      const response = await axios(addUrlQueries(filters, url));
      const result = response.data;

      // console.log(url, "urllllll");
      // console.log(result);
      return dispatch({
        type: GET_ROLES,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

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

export const getCurrentEmployee = (idCompany, id) => {
  return function(dispatch) {
    return axios.get(`http://localhost:3001/users/${idCompany}/${id}`).then(
      (response) => {
        console.log(response.data);
        dispatch({ type: CURRENT_EMPLOYEE, payload: response.data });
      },
      (error) => {
        dispatch({ type: CURRENT_EMPLOYEE, payload: error.response.data });
      }
    );
  };
};

// export const getCurrentEmployee = (user) => {
//   console.log(user, 'esteeee');
//   return {
//     type: CURRENT_EMPLOYEE,
//     payload: user,
//   };
// };

export const cleanUrl = () => {
  return {
    type: CLEAN_URL,
  };
};

export const getCompaniesCuit = (cuit) => {
  return async function(dispatch){
    try {
      const response = await axios.get(`http://localhost:3001/companies?cuit=${cuit}`)
       const result = response.data;
       console.log("Respuesta: ", result)
       return result
     } catch(error){
       console.log(error.message)
     }
   }
 }

export const addRating = (rating, commentary) => {
  return async (dispatch) => {
    const opinion = { rating, commentary };
    try {
      const response = await axios("", opinion);
      const result = response.data;

      return dispatch({
        type: ADD_RATING,
        payload: result,
      });
    } catch (err) {}
  };
};

export const getArrayEmails = (emails) => {
  return {
    type: GET_ARRAY_EMAILS,
    payload: emails,
  };
};

export const cleanArrayEmails = () => {
  return {
    type: CLEAN_ARRAY_EMAILS,
    payload: [],
  };
};

 export const getCompaniesName = (name) => {
  return async function(dispatch){
    try {
      const response = await axios.get(`http://localhost:3001/companies?name=${name}`)
       const result = response.data;
       console.log("Respuesta: ", result)
       return result
     } catch(error){
       console.log(error.message)
     }
   }
 }

 export const getCompaniesTel = (tel) => {
  return async function(dispatch){
    try {
      const response = await axios.get(`http://localhost:3001/companies?tel=${tel}`)
       const result = response.data;
       console.log("Respuesta: ", result)
       return result
     } catch(error){
       console.log(error.message)
     }
   }
 }

 export const getCompaniesEmail = (email) => {
  return async function(dispatch){
    try {
      const response = await axios.get(`http://localhost:3001/companies?email=${email}`)
       const result = response.data;
       console.log("Respuesta: ", result)
       return result
     } catch(error){
       console.log(error.message)
     }
   }
 }

 export function postAreaCrud(area) {
  return async function(dispatch) {
    const response = await axios.post("http://localhost:3001/areas", area);
    return dispatch({ type: POST_CRUD_AREA, payload: response.data });
  };
}

export function getAreasCrud() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/areas/ars")
      .then((info) => {
        console.log(info.data);
        return dispatch({ type: GET_CRUD_AREAS, payload: info.data });
      })
      .catch((error) => console.log(error.message));
  };
}

export const deleteAreaCrud = (id) => {
  return async (dispatch) => {
    await axios
      .delete(`http://localhost:3001/areas/${id}`)
      .then((info) => {
        return dispatch({ type: DELETE_CRUD_AREAS, payload: id });
      })
      .catch((error) => console.log(error.message));
  };
};

export function postPositionCrud(position) {
  return async function(dispatch) {
    const response = await axios.post(
      "http://localhost:3001/positions",
      position
    );
    return dispatch({ type: POST_CRUD_POSITION, payload: response.data });
  };
}

export function getPositionsCrud() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/positions/raw")
      .then((info) => {
        return dispatch({ type: GET_CRUD_POSITION, payload: info.data });
      })
      .catch((error) => console.log(error.message));
  };
}

export const deletePositionCrud = (id) => {
  return async (dispatch) => {
    await axios
      .delete(`http://localhost:3001/positions/${id}`)
      .then((info) => {
        return dispatch({ type: DELETE_CRUD_POSITION, payload: id });
      })
      .catch((error) => console.log(error.message));
  };
};





