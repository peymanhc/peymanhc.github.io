import React, { useEffect, useState } from "react";
import style from "./style";
import { locale } from "config/string";
import { Avatar, Button, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useSupport from "hooks/support.hooks";
import dayjs from "dayjs";
import Input from "component/input";
import Icon from "component/icon";
import { useSelector } from "react-redux";
import { StateNetwork } from "store/index.reducer";
import { AppConfig } from "store/app/app.reducer";

interface Props {
  classes: any;
}
function Ticket({ classes }: Props) {
  const { getMessage, getChatList } = useSupport();
  const [message, setMessage] = useState([]);
  const [chatList, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const { isMobile } = useSelector<StateNetwork, AppConfig>(
    (state) => state.appConfig
  );
  useEffect(() => {
    getMessage().then((res) => {
      setMessage(res);
    });
    getChatList().then((res) => {
      setChatList(res);
    });
    if (window.location.hash) {
      handleActiveChat(parseInt(window.location.hash.split("#")[1]));
    }
  }, []);

  const handleActiveChat = (index) => {
    setActiveChat(index);
    window.location.hash = `#${index}`;
    const messages = document.getElementById("messages");
    if (messages) {
      messages.scrollTop = messages.scrollHeight;
    }
  };
  return (
    <div className={classes.root}>
      {console.log(
        isMobile && activeChat == null,
        "asd",
        isMobile && activeChat !== null
      )}
      <Row className={classes.wrapper}>
        {((isMobile && activeChat === null) || !isMobile) && (
          <Col className={classes.chatLists} lg={7} xs={24}>
            {chatList.map((item, i) => (
              <div
                onClick={(e) => handleActiveChat(i)}
                className={
                  activeChat === i ? classes.activeChat : classes.chatItem
                }
              >
                <Avatar icon={<UserOutlined />} size={40} src={item?.image} />
                <div className={classes.textComments}>
                  <h5>{item?.title}</h5>
                  <p>{item?.message}</p>
                </div>
              </div>
            ))}
          </Col>
        )}
        {((isMobile && activeChat !== null) || !isMobile) && (
          <Col id="messages" className={classes.messagesList} lg={17} xs={24}>
            <div id="messages" className={classes.chats}>
              {message.map((item, i) => (
                <div
                  className={[
                    classes.chatMessages,
                    item?.userId === "user-id" ? classes.chatUser : "",
                  ].join(" ")}
                >
                  <Avatar icon={<UserOutlined />} size={40} src={item?.image} />
                  <div className={classes.messageInfo}>
                    <span
                      className={
                        item?.userId === "user-id"
                          ? classes.replayBy
                          : classes.replayBy_you
                      }
                    >
                      {item?.username}
                    </span>
                    <div
                      className={[
                        classes.message,
                        item?.userId === "user-id" ? classes.userMessage : "",
                      ].join(" ")}
                    >
                      {item?.message}
                    </div>

                    <span
                      className={
                        item?.userId === "user-id"
                          ? classes.time_message
                          : classes.time_message_you
                      }
                    >
                      {dayjs(item?.datetime)
                        ?.calendar("jalali")
                        .format("YYYY/MM/DD - HH:mm")}
                    </span>
                    <span
                      className={
                        item?.userId === "user-id"
                          ? classes.isRead
                          : classes.isReadBy_you
                      }
                    >
                      {item?.read && "Read"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.replayMessage}>
              <Input
                type="text"
                className={classes.textMessage}
                placeholder={"متن تیکت خود را یادداشت کنید"}
              />
              <Button
                className={classes.attachfileButton}
                data-cy="sendMessage"
                color="primary"
              >
                <Icon name="Attach_File" />
              </Button>
              <Button
                className={classes.sendMessageButton}
                data-cy="sendMessage"
                color="primary"
              >
                <Icon name="Send_Ticket" />
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default style(Ticket);
