import {
  ADD_COMPANY,
  GET_COMPANIES,
  RESET_CREATE,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../action-types/index";

const initialState = {
  allCompanies: [],
  companies: [],
  employeeCreated: [],
  allEmployees: []
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
    case UPDATE_EMPLOYEE:
      const updatedUser = state.allEmployees.filter(employee => employee.id !== action.payload.id);
      return {
        ...state,
        allEmployees: [...updatedUser ,action.payload],
      }
    default:
      return state;
  }
}

export default rootReducer;
