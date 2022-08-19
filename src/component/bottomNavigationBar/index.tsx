import { Col, Divider, Dropdown, Row, Typography } from "antd";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { remove } from "storage";
import style from "./style";
import Icon from "component/icon";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import {
  UserOutlined,
  LogoutOutlined,
  InfoCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { goBack } from "helpers/history";
const BottomNavigation = (props: any) => {
  const { classes, routes } = props;
  const history = useHistory();
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);
  const logout = () => {
    remove("token");
    history.push("/auth/login");
    history.go(0);
  };
  const handleShowMoreLinks = () => {
    setShowMore(!showMore);
  };
  const [activeTab, setactiveTab] = useState(null);
  useEffect(() => {
    const activeTab = routes?.find((route: any) => {
      return location.pathname === route.route;
    });
    setactiveTab(activeTab);
  }, [location.pathname, routes]);

  const menu = (
    <Menu className={classes.menuStyle} theme="dark">
      <Menu.Item key="1">
        <UserOutlined />
        <Typography>پروفایل</Typography>
      </Menu.Item>
      <Menu.Item key="2">
        <SettingOutlined />
        <Typography>تنظیمات</Typography>
      </Menu.Item>
      <Menu.Item key="3">
        <InfoCircleOutlined />
        <Typography>قوانین</Typography>
      </Menu.Item>
      <Divider style={{ background: "#707070", margin: "5px 0" }} />
      <Menu.Item key="4" onClick={logout}>
        <LogoutOutlined />
        <Typography>خروج</Typography>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <Menu className={classes.wrapper}>
        <li
          onClick={handleShowMoreLinks}
          className={[
            classes.menuItem,
            showMore && classes.activeshowmore,
          ].join("  ")}
        >
          <Icon name={"Hamberger_Menu"} />
        </li>

        {routes
          ?.slice(0, showMore ? routes?.length : 4)
          .map((route: any, index: number) => {
            const isActive = location.pathname === route.route;
            return (
              <Menu.Item key={index} className={classes.menuItem}>
                <NavLink
                  to={route.route}
                  exact
                  activeClassName={classes.activeMenu}
                >
                  <Icon
                    className={!showMore && isActive && classes.activeMenu}
                    name={route.icon}
                  />
                  {isActive && (
                    <span className={classes.routeName}> {route.name}</span>
                  )}
                </NavLink>
              </Menu.Item>
            );
          })}
      </Menu>
      <Row align="middle" justify="space-between" className={classes.header}>
        <Col>
          <Icon
            onClick={goBack}
            className={"Arrow-Right"}
            name={"Arrow-Right"}
          />
        </Col>
        <Col>
          <Typography>{activeTab?.name}</Typography>
        </Col>
        <Col>
          <div className={classes.headerMenu}>
            <Dropdown overlay={menu} arrow>
              <UserOutlined className={classes.userLogo} />
            </Dropdown>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default style(BottomNavigation);
