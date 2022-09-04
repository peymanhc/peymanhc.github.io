import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Icon from "component/icon";
import Input from "component/input";
import Table from "component/table";
import { locale } from "config/string";
import useMembers from "hooks/members.hook";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import style from "./style";

type Props = {
  classes: any;
};

function Members({ classes }: Props) {
  const [membersList, setMembersList] = useState([]);
  const { getMembers } = useMembers();
  useEffect(() => {
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
            <Avatar icon={<UserOutlined />} size={30} src={record?.image} />{" "}
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
  const history = useHistory();

  const handleShowDetail = (user) => {
    console.log(user.userId);
    history.push(`members/${user.userId}`);
  };
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <div className={classes.flex}>
          <h5 className={classes.boxTitle}>
            <Icon name="Users" />
            {locale.listOfUsers}
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
          onRowClick={(item: any) => handleShowDetail(item)}
        />
        <p className={classes.totalCount}>
          {locale.numberOfUsers}: {membersList.length}
        </p>
      </div>
    </div>
  );
}

export default style(Members);
