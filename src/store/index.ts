import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { root } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk))
);
