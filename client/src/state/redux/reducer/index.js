import { ADD_COMPANY, GET_COMPANIES } from "../action-types/index"; 


const initialState = {
    allCompanies: [],
    companies: [],
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_COMPANIES:
            return {
                ...state,
                allCompanies: action.payload}
        case ADD_COMPANY:
            return {
                ...state,
                companies: action.payload
                
            }
        default:
            return state;
    }
}

export default rootReducer;