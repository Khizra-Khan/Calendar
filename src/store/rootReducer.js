import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import monthReducer from "./monthReducer";

const rootReducer = combineReducers({
  eventReducer,
  monthReducer,
});

export default rootReducer;
