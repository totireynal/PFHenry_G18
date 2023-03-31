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
  GET_DELETED_EMPLOYEES,
  UPDATE_DELETED_EMPLOYEE,
  GET_RATING,
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
  return function(dispatch) {
    let url = `http://localhost:3001/users/${idCompany}`;

    if (idCompany !== undefined) {
      axios.get(addUrlQueries(filters, url)).then(
        (response) => {
          showAnswer("");
          console.log("resp-->", response.data);
          return dispatch({ type: GET_EMPLOYEES, payload: response.data });
        },
        (error) => {
          showAnswer(error.response.data.error.error);
          console.log("resp-err->", error.response.data.error.error);
        }
      );
    }
  };
};

export const getFilter = (filters, idCompany, showAnswer) => {
  return async function(dispatch) {
    try {
      let url = `http://localhost:3001/users/${idCompany}`;

      console.log("filtros", url);

      const response = await axios(addUrlQueries(filters, url));
      const result = response.data;

      showAnswer("");
      return dispatch({
        type: GET_FILTER,
        payload: result,
      });
    } catch (error) {
      showAnswer(error.response.data.error);
      console.log(error.response.data);
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
        console.log("FRANN",response.data);
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
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/companies?cuit=${cuit}`
      );
      const result = response.data;
      console.log("Respuesta: ", result);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addRating = (rating, commentary, CompanyId) => {
  return async (dispatch) => {
    const opinion = { score: rating, comment: commentary, CompanyId };
    try {
      await axios.post(
        "http://localhost:3001/reviews",
        opinion
      );
    } catch (err) {}
  };
};

export const getRating = () => {
  return async (dispatch) => {
    try {
      const response = await axios("http://localhost:3001/reviews");
      const result = response.data;
      console.log(result, 'primero');

      return dispatch({
        type: GET_RATING,
        payload: result,
      });
    } catch (error) {}
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
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/companies?name=${name}`
      );
      const result = response.data;
      console.log("Respuesta: ", result);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getCompaniesTel = (tel) => {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/companies?tel=${tel}`
      );
      const result = response.data;
      console.log("Respuesta: ", result);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getCompaniesEmail = (email) => {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/companies?email=${email}`
      );
      const result = response.data;
      console.log("Respuesta: ", result);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

  export const getDeletedEmployees = (filters, showAnswer, idCompany) => {
  console.log('c',idCompany);
  return function(dispatch) {
    let url = `http://localhost:3001/users/${idCompany}/deleted`;
    console.log("filtrosget", url);
 
    if(idCompany !== undefined) { 
    axios.get(addUrlQueries(filters, url)).then(
      (response) => {
        showAnswer("");
        console.log("primera-->",response.data);
        return dispatch({ type: GET_DELETED_EMPLOYEES, payload: response.data });
      },
      (error) => {
        showAnswer(error.response.data);
        // console.log("resp-err->",error.response.data.error);
      }
    );
  }};
  };

  export const updateDeletedEmployee = (id, user, showAnswer) => {
    return async (dispatch) => {
      try {
        // console.log(user, 'user upppp');
        const response = await axios.put(
          `http://localhost:3001/users/restore/${id}`,
          user
        );
        const result = response.data;
        showAnswer(result);
  
        return dispatch({
          type: UPDATE_DELETED_EMPLOYEE,
        });
      } catch (error) {
        showAnswer(error.response.data.error);
      }
    };
  };

