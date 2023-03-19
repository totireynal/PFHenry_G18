import {
  ADD_COMPANY,
  GET_COMPANIES,
  RESET_CREATE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
  GET_EMPLOYEE_DETAIL,
  DELETE_EMPLOYEE,
  SORT_EMPLOYEE_NAME,
  CURRENT_EMPLOYEE,
} from "../action-types/index";

const initialState = {
  allCompanies: [],
  companies: [],
  employeeCreated: [],
  allEmployees: [],
  employeeDetail: {},
  currentEmployee: {},
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
    case UPDATE_EMPLOYEE:
      const updatedUser = state.allEmployees.filter(
        (employee) => employee.id !== action.payload.id
      );
      return {
        ...state,
        allEmployees: [...updatedUser, action.payload],
      };
    case GET_EMPLOYEE_DETAIL:
      return {
        ...state,
        employeeDetail: action.payload,
      };
    case DELETE_EMPLOYEE:
      // const employeeToDelete = state.allEmployees.filter(employee => employee.id !== action.payload.id)
      return {
        ...state,
      };
    case SORT_EMPLOYEE_NAME:
      return {
        ...state,
        allEmployees: action.payload
      }
    case CURRENT_EMPLOYEE:
      return {
        ...state,
        currentEmployee: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;
