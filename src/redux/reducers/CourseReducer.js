import { search ,addToCart,deleteCart,setGroup} from "../types/CourseType";


let searchValue = "";
let group= "GP01"
let cart = [];
if (localStorage.getItem("cartItems")) {
  cart = JSON.parse(localStorage.getItem("cartItems"));
}

let initialState = {
  searchValue: searchValue,
  cart: cart,
  group:group,
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case search: {
      console.log("123",action.searchValue);
      state.searchValue = action.searchValue;
      return { ...state };
    }

    case addToCart: {
      let cartUpdate = [...state.cart];
      let key = false;

      cartUpdate.map((cartItem, index) => {
        if (cartItem.maKhoaHoc === action.cartItem.maKhoaHoc) {
          return (key = true);
        }
        return key;
      });

      if (key === false) {
        cartUpdate.push(action.cartItem);
      }

      state.cart = cartUpdate;

      //Lưu thông tin vào localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cart));

      return { ...state };
    }

    case deleteCart: {

      let cartUpdate = [...state.cart];

      cartUpdate.map((cartItem, index) => {
        if (cartItem.maKhoaHoc === action.cartID) {
          cartUpdate.splice(index, 1);
        }
        return cartUpdate;
      });

      state.cart = cartUpdate;

      //Lưu thông tin vào localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cart));

      return { ...state };
    }
    case setGroup: {
      state.group = action.group;
      return { ...state };
    }

    default:
      return state;
  }
};

export default CourseReducer;