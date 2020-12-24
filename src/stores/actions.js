import * as actions from "./actionTypes";

export const addCustomer = (newCustomer) => ({
  type: actions.addCustomer,
  payload: newCustomer,
});

export const addProduct = (newProduct) => ({
  type: actions.addProduct,
  payload: newProduct,
});
