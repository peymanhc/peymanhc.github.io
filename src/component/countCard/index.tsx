// libraries

// components
//! configs
import Icon from "component/icon";
import style from "./style";

const CountCard = ({ description, title,icon, classes }: any) => {
  return (
    <div className={classes.root}>
      <Icon className={classes.icon} name={icon} />
      <div className={classes.wrapper}>
        <h4>{description}</h4>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default style(CountCard);
