// libraries
import { Menu } from "antd";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
// components
import Icon from "component/icon";
//! configs
import style from "./style";


interface DrawerState {
  icon?: string;
  name?: string;
  route?: string;
}
const Drawer = (props: any) => {
  const { classes } = props;
  const [drawerList, setDrawerList] = useState<DrawerState[]>([]);
  const location = useLocation();
  useEffect(() => {
    setDrawerList([
      {
        icon: "Flash",
        name: "برقی",
        route: "/flash",
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
    ]);
  }, []);

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
    </div>
  );
};

export default style(Drawer);
