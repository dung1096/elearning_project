import React, { Fragment } from "react";
import { NavLink, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { logout } from "../../redux/types/UserType";
import { setGroup } from "../../redux/types/UserType";
// import { courseCategoryListAction } from "../../redux/actions/CourseAction";

import {
  GroupOutlined,
  // UnorderedListOutlined
} from "@ant-design/icons";

const AdminComponent = (props) => {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  // const [category, setCategory] = useState([]);

  const propUser = useSelector((state) => state.UserReducer.userLogin);

  const handleLogout = () => {
    dispatch({ type: logout });
    // history.push("/login");
  };
  // useEffect(() => {
  //    courseCategoryListAction(setCategory);
  // }, [])

  let dispatch = useDispatch();
  let handleClick = (event) => {
    dispatch({
      type: setGroup,
      group: document.getElementById(event.key).innerHTML,
    });
  };
  return (
    <Fragment>
      <Layout>
        <Header className="header">
          <div className="logo">
            <NavLink to={"/admin"}>
              <img src="/img/logo-coral.svg" alt="logo" />
            </NavLink>
          </div>

          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <NavLink to="/admin/user">User Management</NavLink>
            </Menu.Item>

            <Menu.Item key="2">
              <NavLink to="/admin/course">Course Management</NavLink>
            </Menu.Item>
          </Menu>
          <div className="header__auth panel-menu-parent">
            {propUser ? (
              <div className="header__auth__success d-flex align-items-center">
                <p className="m-0">Hi, {propUser.taiKhoan}</p>
                <div className="panel-menu panel-menu--config">
                  <ul>
                    <li>
                      <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login" onClick={handleLogout}>
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Fragment>
                <NavLink to="/login">
                  <button className="header__auth__login btn--white">
                    Log in
                  </button>
                </NavLink>
                <NavLink to="/signup">
                  <button className="header__auth__signup btn--blue">
                    Sign up
                  </button>
                </NavLink>
              </Fragment>
            )}
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              style={{
                background: "#fff",
              }}
              mode="inline"
              // defaultSelectedKeys={["1"]}
              // defaultOpenKeys={["sub1"]}
            >
              <SubMenu key="sub1" icon={<GroupOutlined />} title="Group">
                <Menu.Item key="1" id="1" onClick={handleClick}>
                  GP01
                </Menu.Item>
                <Menu.Item key="2" id="2" onClick={handleClick}>
                  GP02
                </Menu.Item>
                <Menu.Item key="3" id="3" onClick={handleClick}>
                  GP03
                </Menu.Item>
                <Menu.Item key="4" id="4" onClick={handleClick}>
                  GP04
                </Menu.Item>
                <Menu.Item key="5" id="5" onClick={handleClick}>
                  GP05
                </Menu.Item>
                <Menu.Item key="6" id="6" onClick={handleClick}>
                  GP06
                </Menu.Item>
                <Menu.Item key="7" id="7" onClick={handleClick}>
                  GP07
                </Menu.Item>
                <Menu.Item key="8" id="8" onClick={handleClick}>
                  GP08
                </Menu.Item>
                <Menu.Item key="9" id="9" onClick={handleClick}>
                  GP09
                </Menu.Item>
                <Menu.Item key="10" id="10" onClick={handleClick}>
                  GP10
                </Menu.Item>
              </SubMenu>
              {/* <SubMenu key="sub2" icon={< UnorderedListOutlined />} title="Category">
                {category.map((item,index)=>{
                  return <Menu.Item key={index} id={item.maDanhMuc} onClick={handleClick}>{item.tenDanhMuc}</Menu.Item>
                })}
              </SubMenu> */}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Fragment>
  );
};
export const AdminTemplate = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <AdminComponent>
            <Component {...props} />
          </AdminComponent>
        );
      }}
    />
  );
};
