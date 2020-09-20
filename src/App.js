import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Detail from "./pages/Detail/Detail";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
// import Profile from "./pages/Profile/Profile";
import { useDispatch } from "react-redux";
import { loginAction } from "./redux/actions/UserAction";

function App() {
  let dispatch = useDispatch();

  const userFromLocal = localStorage.getItem("userLogin");
  console.log(userFromLocal);
  if (userFromLocal) {
    dispatch(loginAction(JSON.parse(userFromLocal)));
  }
  return (
    <BrowserRouter>
      <div className="App">
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/detail/:maKhoaHoc" Component={Detail} />
        <HomeTemplate exact path="/signup" Component={SignUp} />
        <HomeTemplate exact path="/login" Component={Login} />
        {/* <HomeTemplate exact path="/profile" Component={Profile} /> */}
        <HomeTemplate exact path="/" Component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
