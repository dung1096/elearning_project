import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import CourseReducer from "./CourseReducer";

const rootReducer = combineReducers({
  UserReducer,
  CourseReducer,
});

export default rootReducer;
