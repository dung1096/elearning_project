import { message } from "antd";
import { search, addToCart, deleteCart, setGroup,addImg } from "../types/CourseType";

let searchValue = "";
let group = "GP01";
let cart = [];
if (localStorage.getItem("cartItems")) {
  cart = JSON.parse(localStorage.getItem("cartItems"));
}

let img = ".jpg";
if (localStorage.getItem("imgItems")) {
  img = JSON.parse(localStorage.getItem("imgItems"));
}

let initialState = {
  searchValue: searchValue,
  cart: cart,
  group: group,
  img:img,
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case search: {
      console.log("123", action.searchValue);
      state.searchValue = action.searchValue;
      return { ...state };
    }

    case addToCart: {
      let cartUpdate = [...state.cart];
      let key = false;

      cartUpdate.map((cartItem, index) => {
        if (cartItem.maKhoaHoc === action.cartItem.maKhoaHoc) {
          message.warning("Đã tồn tại trong giỏ");
          return (key = true);
        }
        return key;
      });

      if (key === false) {
        cartUpdate.push(action.cartItem);
        message.success("Thêm vào giỏ thành công");
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
          message.success("Xóa khỏi giỏ thành công");
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

    case addImg: {
      let imgUpdate = [...state.img];
      let key = false;

      imgUpdate.map((imgItem, index) => {
        if (imgItem === action.img) {
          // message.warning("Đã tồn tại trong giỏ");
          return (key = true);
        }
        return key;
      });

      if (key === false) {
        imgUpdate.push(action.img);
        message.success("Thêm vào giỏ thành công");
      }

      state.img = imgUpdate;

      //Lưu thông tin vào localStorage
      localStorage.setItem("imgItems", JSON.stringify(state.img));

      return { ...state };
    }

    default:
      return state;
  }
};

export default CourseReducer;
