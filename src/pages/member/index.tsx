import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import Icon from "component/icon";
import Input from "component/input";
import LineChart from "component/lineChart";
import Table from "component/table";
import useDashboard from "hooks/dashboard.hook";
import useMembers from "hooks/members.hook";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import style from "./style";

type Props = {
  classes: any;
};

function MemberInfo({ classes }: Props) {
  const [memberInfo, setMemberInfo] = useState([]);
  const [membersList, setMembersList] = useState([]);
  const [lineChart, setLineChart] = useState([]);
  const { getMemberInfo, getMemberChart, getMembers } = useMembers();
  useEffect(() => {
    getMemberInfo().then((res) => {
      setMemberInfo(res);
    });
    getMemberChart().then((res) => {
      setLineChart(res);
    });
    getMembers().then((res) => {
      setMembersList(res);
    });
  }, []);
  const keys = [
    {
      id: 0,
      data: "username",
      render(text: string, record: any) {
        return (
          <div className={classes.usernameCol}>
            <p>{text}</p>
          </div>
        );
      },
    },
    {
      id: 1,
      data: "jobTitle",
    },
    {
      id: 2,
      data: "status",
      render(text: string, record: any) {
        return (
          <Icon
            className={text == 1 ? classes.waitingIcon : classes.successIcon}
            name={text == 1 ? "Waiting" : "Confirmed"}
          />
        );
      },
    },
    {
      id: 3,
      data: "lastAppearance",
    },
    {
      id: 4,
      data: "userId",
    },
  ];
  const columns = [
    {
      id: 0,
      title: "کاربر",
    },
    {
      id: 1,
      title: "موقعیت شغلی",
    },
    {
      id: 2,
      title: "وضعیت",
    },
    {
      id: 3,
      title: "آخرین حضور",
    },
    {
      id: 4,
      title: "کد کاربر",
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.userInformations}>
        <Col lg={8} sm={12} xs={24} className={classes.card}>
          <img className={classes.userImage} src="/profile.png" />
          <ul className={classes.userInfo}>
            <li>
              نام : <span>{memberInfo?.name}</span>
            </li>
            <li>
              عنوان شغلی : <span>{memberInfo?.jobTitle}</span>
            </li>
            <li>
              مدرک تحصیلی : <span>{memberInfo?.degree_of_education}</span>
            </li>
            <li>
              آدرس محل زندگی : <span>{memberInfo?.address}</span>
            </li>
            <li>
              حقوق پایه : <span>{memberInfo?.salary} تومان</span>
            </li>
            <li>
              میانگین ساعت کارکرد ماهانه :{" "}
              <span>{memberInfo?.average_time_working}</span>
            </li>
            <li>
              وضعیت تاهل : <span>{memberInfo?.married ? "متاهل" : "مجرد"}</span>
            </li>
            <li>
              شماره تماس : <span>{memberInfo?.contact_number}</span>
            </li>
            <li>
              ایمیل : <span>{memberInfo?.email}</span>
            </li>
          </ul>
        </Col>
        <Col className={classes.column} lg={16} sm={12} xs={24}>
          <div className={classes.timeChart}>
            <LineChart height={260} data={lineChart} />
          </div>
          <div className={[classes.card, classes.table].join(" ")}>
            <div className={classes.flex}>
              <h5 className={classes.boxTitle}>
                <Icon name="Users" /> لیست درخواست ها
              </h5>
              <Input
                placeholder={"جستجو بر اساس نام کاربری"}
                type="text"
                suffix={<Icon name="Search" />}
              />
            </div>
            <Table
              columns={columns}
              dataItems={keys}
              data={membersList}
              columnsCountMobile={1}
              columnsCount={7}
              height={200}
            />
          </div>
        </Col>
      </div>
    </div>
  );
}

export default style(MemberInfo);
