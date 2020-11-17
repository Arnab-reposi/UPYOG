import { APPLY_FILTER, CREATE_COMPLAINT, FETCH_COMPLAINTS, UPDATE_COMPLAINT } from "../actions/types";

function complaintReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_COMPLAINT:
      return { ...state, response: action.payload };
    case FETCH_COMPLAINTS:
      return { ...state, list: action.payload.complaints };
    case UPDATE_COMPLAINT:
      return { ...state, response: action.payload };
    case APPLY_FILTER:
      return { ...state, filters: action.payload.filters };
    default:
      return state;
  }
}

export default complaintReducer;
