import { Avatar, Typography, Col, Divider, Dropdown, Menu, Row } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  InfoCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { remove } from "storage";
import style from "./style";
import Icon from "component/icon";
const { Text } = Typography;

const AppBar = (props: any) => {
  const { classes } = props;
  const history = useHistory();

  const logout = () => {
    remove("token");
    history.push("/auth/login");
    history.go(0);
  };

  const menu = (
    <Menu className={classes.menuStyle} theme="dark">
      <Menu.Item key="1">
        <UserOutlined />
        <Typography>پروفایل</Typography>
      </Menu.Item>
      <a href="/settings">
      <Menu.Item key="2">
     
          <SettingOutlined />
          <Typography>تنظیمات</Typography>
  
      </Menu.Item>      </a>
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
    <header className={classes.root}>
      <Row justify="space-between" align="middle">
        <Col md={6} xs={0}>
          <div className={classes.titleLogo}>
            <img src={"/logo192.png"} className={classes.logo} alt="logo" />
            <div className={classes.title}>
              <Text strong>داشبورد من</Text>
              <Text italic type="secondary">
                داشبورد خرید سکه
              </Text>
            </div>
          </div>
        </Col>
        <Col md={8} xs={0}>
          <Row align="middle">
            <Col md={7}></Col>
            <Col md={9}></Col>
            <Col md={7}>
              <div className={classes.headerMenu}>
                <Dropdown overlay={menu} arrow>
                  <div className={classes.headerProfile}>
                    <Avatar size={40} src={"/profile.png"} />
                    <Typography>پیمان هادوی</Typography>
                    <Icon name="Arrow-Down" />
                  </div>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};

export default style(AppBar);
