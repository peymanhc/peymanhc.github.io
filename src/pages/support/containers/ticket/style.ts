import style from "provider/style";

const styles = (theme: any) => ({
  root: {
    padding: [10, 0],
    maxWidth: 1600,
  },
  wrapper: {
    border: `1px solid ${theme.palette.colors.grey[200]}`,
  },
  chatLists: {
    borderLeft: `1px solid ${theme.palette.colors.grey[200]}`,
    maxHeight: "calc(85vh - 166px)",
    overflow: "auto",
    "&::-webkit-scrollbar-button": {
      display: "none",
    },
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 4,
      background: "#20bf6b",
    },
  },
  chats: {
    padding: 20,
    transition: "all 0.5s",
    scrollBehavior: "smooth",
    maxHeight: "calc(85vh - 166px)",
    overflow: "auto",
    "&::-webkit-scrollbar-button": {
      display: "none",
    },
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 4,
      background: "#20bf6b",
    },
  },
  messagesList: {
    position: "relative",
  },
  textComments: {
    width: "90%",
    "& h5": {
      fontSize: 13,
      marginBottom: 0,
    },
    "& p": {
      marginTop: 5,
      width: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
      fontSize: 10,
      color: theme.palette.colors.grey[500],
    },
  },
  chatItem: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gridGap: 10,
    padding: 20,
    borderBottom: `1px solid ${theme.palette.colors.grey[200]}`,
    "& .ant-avatar": {
      backgroundColor: theme.palette.primary,
    },
  },
  activeChat: {
    extend: "chatItem",
    backgroundColor: theme.palette.colors.grey[100],
  },
  chatMessages: {
    display: "flex",
    alignItems: "flex-start",
    gridGap: 20,
    "&:not(:last-child)": {
      marginBottom: 50,
    },
    "& .ant-avatar": {
      border: `1px solid ${theme.palette.primary}`,
      backgroundColor: theme.palette.colors.grey[100],
      color: theme.palette.colors.grey[500],
    },
  },
  chatUser: {
    flexDirection: "row-reverse",
  },
  messageInfo: {
    position: "relative",
    maxWidth: "80%",
    minWidth: 130,
  },
  message: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    backgroundColor: theme.palette.colors.grey[25],
    padding: [10, 20],
    marginTop: 5,
    border: `1px solid ${theme.palette.colors.grey[100]}`,
  },
  userMessage: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
    backgroundColor: theme.palette.colors.grey[100],
    border: `1px solid ${theme.palette.primary}`,
  },
  replayBy: {
    position: "absolute",
    top: -18,
    left: 0,
    fontSize: 11,
  },
  replayBy_you: {
    left: "auto",
    right: 0,
    top: -18,
    fontSize: 11,
    position: "absolute",
  },
  time_message: {
    right: "auto",
    left: 0,
    bottom: -18,
    fontSize: 11,
    position: "absolute",
    direction: "ltr",
  },
  time_message_you: {
    left: "auto",
    right: 0,
    bottom: -18,
    fontSize: 11,
    position: "absolute",
    direction: "ltr",
  },
  isRead: {
    left: "auto",
    right: 0,
    bottom: -18,
    fontSize: 9,
    position: "absolute",
    direction: "ltr",
  },
  isReadBy_you: {
    right: "auto",
    left: 0,
    bottom: -18,
    fontSize: 9,
    position: "absolute",
    direction: "ltr",
  },
  replayMessage: {
    bottom: 0,
    padding: [10, 0, 10, 10],
    borderTop: `1px solid ${theme.palette.colors.grey[100]}`,
    display: "flex",
    justifyContent: "space-between",
    gridGap: 15,
    "& button": {
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
    },
    "& textarea": {
      height: 40,
    },
  },
  attachfileButton: {
    color: theme.palette.primary,
    border: `1px solid ${theme.palette.primary}`,
  },
  sendMessageButton: {
    backgroundColor: theme.palette.primary,
    border: `1px solid ${theme.palette.primary}`,
    color: theme.palette.white,
  },
  "@media (max-width: 992px)":{
    root: {
      padding: 0
    },
    message:{
      padding: [5, 10],
    },
    chatMessages:{
      gridGap:5,
      "& .ant-avatar": {
        width:"30px !important",
        height:"30px !important",
        lineHeight: "30px !important",
        fontSize: "14px !important",
      },
    },
    chats:{
      padding:[20,7],
      maxHeight: "calc(91vh - 166px)",
    }
  }
});

export default style(styles);
