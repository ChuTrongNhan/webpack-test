import * as actions from "../actionTypes";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case actions.addProduct:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default productReducer;
