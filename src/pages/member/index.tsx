import { Avatar, Col, Row } from "antd";
import Icon from "component/icon";
import Input from "component/input";
import LineChart from "component/lineChart";
import Table from "component/table";
import { locale } from "config/string";
import useMembers from "hooks/members.hook";
import { useEffect, useState } from "react";
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
      title: locale.user,
    },
    {
      id: 1,
      title: locale.jobTitle,
    },
    {
      id: 2,
      title: locale.status,
    },
    {
      id: 3,
      title: locale.lastAppearance,
    },
    {
      id: 4,
      title: locale.userCode,
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.userInformations}>
        <Col lg={8} sm={12} xs={24} className={classes.card}>
          <img className={classes.userImage} src="/profile.png" />
          <ul className={classes.userInfo}>
            <li>
              {locale.name} : <span>{memberInfo?.name}</span>
            </li>
            <li>
              {locale.jobTitle}: <span>{memberInfo?.jobTitle}</span>
            </li>
            <li>
              {locale.degree_of_education}:{" "}
              <span>{memberInfo?.degree_of_education}</span>
            </li>
            <li>
              {locale.address}: <span>{memberInfo?.address}</span>
            </li>
            <li>
              {locale.salary}: <span>{memberInfo?.salary} {locale.currency}</span>
            </li>
            <li>
              {locale.average_time_working}:{" "}
              <span>{memberInfo?.average_time_working}</span>
            </li>
            <li>
              {locale.married}:{" "}
              <span>{memberInfo?.married_status ? locale.married : locale.single}</span>
            </li>
            <li>
              {locale.contact_number}: <span>{memberInfo?.contact_number}</span>
            </li>
            <li>
              {locale.email}: <span>{memberInfo?.email}</span>
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
                <Icon name="Users" /> {locale.listOfRequests}
              </h5>
              <Input
                placeholder={locale.search}
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
