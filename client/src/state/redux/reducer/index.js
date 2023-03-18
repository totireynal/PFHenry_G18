import {
  ADD_COMPANY,
  GET_COMPANIES,
  RESET_CREATE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
} from "../action-types/index";

const initialState = {
  allCompanies: [],
  companies: [],
  employeeCreated: [],
  allEmployees: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        allCompanies: action.payload,
      };
    case ADD_COMPANY:
      return {
        ...state,
        companies: action.payload,
      };
    case CREATE_EMPLOYEE:
      return {
        ...state,
        employeeCreated: action.payload,
      };
    case RESET_CREATE:
      return {
        ...state,
        employeeCreated: action.payload,
      };
    case GET_EMPLOYEES:
      return {
        ...state,
        allEmployees: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
