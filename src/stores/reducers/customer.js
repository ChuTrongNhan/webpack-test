import * as actions from "../actionTypes";

const customerReducer = (state = [], action) => {
  switch (action.type) {
    case actions.addCustomer:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default customerReducer;
