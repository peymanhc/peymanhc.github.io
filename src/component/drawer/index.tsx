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


const Drawer = (props: any) => {
  const { classes } = props;
  const [drawerList, setDrawerList] = useState<any>([]);
  const location = useLocation();
  useEffect(() => {
    setDrawerList([
      {
        icon: "Flash",
        name: "برقی",
        route: "/",
      },
      {
        icon: "Add_New_Contact",
        name: "مخاطبین",
        route: "/contacts",
      },
      {
        icon: "Add_Video_Editor",
        name: "ویدیو",
        route: "/video",
      },
      {
        icon: "Bank_Managment",
        name: "بانک",
        route: "/bank",
      },
      {
        icon: "BTS",
        name: "بی تی اس",
        route: "/bts",
      },
      {
        icon: "Managment",
        name: "Dai",
        route: "/shit",
      },
      {
        icon: "Map",
        name: "mamamedi",
        route: "/new",
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
