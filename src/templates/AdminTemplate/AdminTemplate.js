import React, { Fragment } from "react";
import { NavLink, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { setGroup } from "../../redux/types/UserType";

import {
  UserOutlined,
  // LaptopOutlined,
  // NotificationOutlined,
} from "@ant-design/icons";

const AdminComponent = (props) => {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  // const [group, setGroup] = useState("GP01")

  let dispatch=useDispatch();
  let handleClick=(event)=>{
    // setGroup(document.getElementById(event.key).innerHTML)
    dispatch({
          type: setGroup,
          group: document.getElementById(event.key).innerHTML,
        });
  }
// console.log(group)
  return (
    <Fragment>
      <Layout>
        <Header className="header">
          <div
            className="logo"
            style={{
              width: "120px",
              height: "31px",
              background: "rgba(255, 255, 255, 0.2)",
              margin: "16px 28px 16px 0",
              float: "left",
            }}
          />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <NavLink to={"/admin/user"}>User Management</NavLink>
            </Menu.Item>

            <Menu.Item key="2">
              <NavLink to={"/admin/course"}>Course Management</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              style={{
                background: "#fff",
              }}
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Group">
                <Menu.Item key="1" id="1" onClick={handleClick}>GP01</Menu.Item>
                <Menu.Item key="2" id="2" onClick={handleClick}>GP02</Menu.Item>
                <Menu.Item key="3" id="3" onClick={handleClick}>GP03</Menu.Item>
                <Menu.Item key="4" id="4" onClick={handleClick}>GP04</Menu.Item>
                <Menu.Item key="5" id="5" onClick={handleClick}>GP05</Menu.Item>
                <Menu.Item key="6" id="6" onClick={handleClick}>GP06</Menu.Item>
                <Menu.Item key="7" id="7" onClick={handleClick}>GP07</Menu.Item>
                <Menu.Item key="8" id="8" onClick={handleClick}>GP08</Menu.Item>
                <Menu.Item key="9" id="9" onClick={handleClick}>GP09</Menu.Item>
                <Menu.Item key="10" id="10" onClick={handleClick}>GP10</Menu.Item>
              </SubMenu>
              {/* <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="subnav 3"
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
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
          <AdminComponent >
            <Component {...props} />
          </AdminComponent>
        );
      }}
    />
  );
};
