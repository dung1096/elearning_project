import React, { useState, useEffect, Fragment } from "react";
import {
  accountInformation,
  handleDeleteUserAction,
  unregisteredCourseList,
  registeredCourseList,
  notRegisteredCourseList,
  userListAction_pagination,
} from "../../../../redux/actions/UserAction";
import { useSelector } from "react-redux";
import UserModal from "../UserModal/UserModal";

export default function UserManagementContent() {
  let [page, setPage] = useState(1);

  let [userList, setUserList] = useState([]);

  let [userListPage, setUserListPage] = useState([]);

  let [user, setUser] = useState({});

  let [notRegistered, setNotRegistered] = useState([]);

  let [unregistered, setUnregistered] = useState([]);

  let [registered, setRegistered] = useState([]);

  const userGroup = useSelector((state) => state.UserReducer.group);

  useEffect( () => {
    // userListAction(userGroup, setUserList);
    userListAction_pagination(userGroup,page, setUserListPage);
    setUserList(userListPage.items)
  }, [userGroup,userListPage,page]);

  // useEffect(()=>{
  //   notRegisteredCourseList(user.taiKhoan, setNotRegistered);
  //   unregisteredCourseList(user.taiKhoan, setUnregistered);
  //   registeredCourseList(user.taiKhoan, setRegistered);
  // },[ notRegistered,
  // unregistered,
  // registered,])
  
  const handleDelete = (id) => {
    handleDeleteUserAction(id);
  };

  const handleUpdate = (values) => {
    accountInformation(setUser, values);
  };

  const  handleRegister =  (values) => {

     accountInformation(setUser, values);
      notRegisteredCourseList(values.taiKhoan, setNotRegistered);
      unregisteredCourseList(values.taiKhoan, setUnregistered);
      registeredCourseList(values.taiKhoan, setRegistered);
  };

  const handleClickPage =(event)=>
  {
  
   setPage(event.target.innerHTML)
  }

  const renderTable = (user, index) => {
    if (index % 2 === 0) {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.hoTen}</td>
          <td>{user.email}</td>
          <td>{user.soDt}</td>
          <td>{user.maLoaiNguoiDung}</td>
          <td className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-warning mx-1"
              data-toggle="modal"
              data-target="#modalRegisterId"
              onClick={() => {
                handleRegister(user);
              }}
            >
              Register
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() => handleDelete(user.taiKhoan)}
            >
              X
            </button>
            <button
              className="btn btn-info mx-1"
              data-toggle="modal"
              data-target="#modelUpdateId"
              onClick={() => {
                handleUpdate(user);
              }}
            >
              Update
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={index} className="bg-secondary text-light">
          <td>{index + 1}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.hoTen}</td>
          <td>{user.email}</td>
          <td>{user.soDt}</td>
          <td>{user.maLoaiNguoiDung}</td>
          <td className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-warning mx-1"
              data-toggle="modal"
              data-target="#modalRegisterId"
              onClick={() => {
                handleRegister(user);
              }}
            >
              Register
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() => handleDelete(user.taiKhoan)}
            >
              X
            </button>
            <button
              className="btn btn-info mx-1"
              data-toggle="modal"
              data-target="#modelUpdateId"
              onClick={() => {
                handleUpdate(user);
              }}
            >
              Update
            </button>
          </td>
        </tr>
      );
    }
  };

  const renderPages = () => {
    let content = [];
    for (let index = 1; index <= userListPage.totalPages; index++) {
      content.push(<button key={index} onClick={handleClickPage}>{index}</button>);
    }
    return content;
  };
  return (
    <Fragment>
      {/* Button trigger modal */}
      <div className="d-flex justify-content-end mb-5">
        <button
          className="btn btn-success btn-lg p-3"
          style={{ fontSize: "14px" }}
          data-toggle="modal"
          data-target="#modelId"
        >
          Insert
        </button>
      </div>

      {/* Modal */}
      <UserModal
        notRegistered={notRegistered}
        unregistered={unregistered}
        registered={registered}
        user={user}
      />

      <table className="table" style={{ width: "100%" }}>
        <thead className="text-center">
          <tr>
            <th>No.</th>
            <th>User name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>User type</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {userList?.map((user, index) => {
            return renderTable(user, index);
          })}
        </tbody>
      </table>

      {renderPages()}
    </Fragment>
  );
}
