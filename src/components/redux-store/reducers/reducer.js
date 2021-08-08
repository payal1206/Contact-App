import { ADD_CONTACT, DELETE_CONTACT } from "../actions/actions";
const initialState = [];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload]; // state + payload data
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload); // removes the record with same id as payload as it will return false if it is same as id.. and remove
    default:
      return state;
  }
};
export default Reducer;
