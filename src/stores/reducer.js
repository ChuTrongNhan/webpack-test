import { combineReducers } from "redux";

import customerReducer from "./reducers/customer";
import productReducer from "./reducers/product";

const rootReducer = combineReducers({
  customers: customerReducer,
  products: productReducer,
});

export default rootReducer;
