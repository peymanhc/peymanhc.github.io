// libraries
import { Menu } from "antd";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
// components
import Icon from "component/icon";
//! configs
import style from "./style";
import BottomNavigationBar from "component/bottomNavigationBar";
import { useSelector } from "react-redux";
import { StateNetwork } from "store/index.reducer";
import { AppConfig } from "store/app/app.reducer";
import { locale } from "config/string";


const Drawer = (props: any) => {
  const { classes } = props;
  const [drawerList, setDrawerList] = useState<any>([]);
  const location = useLocation();
  useEffect(() => {
    setDrawerList([
      {
        icon: "Reports_Abri",
        name: locale.dashboard,
        route: "/",
      },
      {
        icon: "Subset",
        name: locale.statistics,
        route: "/statistics",
      },
      {
        icon: "Users",
        name: locale.users,
        route: "/members",
      },
      {
        icon: "Support",
        name: locale.support,
        route: "/support",
      },
      {
        icon: "Setting",
        name: locale.settings,
        route: "/settings",
      },
    ]);
  }, []);
  const { isMobile } = useSelector<StateNetwork, AppConfig>(
    (state) => state.appConfig
  );
  return (
    <div className={classes.root}>
      <Menu mode="inline" theme="light" className={classes.sideMenu}>
        {drawerList?.map((route: any, index: number) => (
          <Menu.Item
            key={index}
            icon={
              <Icon
                className={
                  location.pathname === route.route && classes.activeMenu
                }
                name={route.icon}
              />
            }
            className={classes.menuItem}
          >
            <NavLink
              to={route.route}
              exact
              activeClassName={classes.activeMenu}
            >
              {route.name}
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
      {isMobile && <BottomNavigationBar routes={drawerList} />}
    </div>
  );
};

export default style(Drawer);
