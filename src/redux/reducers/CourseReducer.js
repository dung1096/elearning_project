import { search } from "../types/CourseType";


let searchValue = "";

let initialState = {
  searchValue: searchValue,
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case search: {
      console.log("123",action.searchValue);
      state.searchValue = action.searchValue;
      return { ...state };
    }

    default:
      return state;
  }
};

export default CourseReducer;