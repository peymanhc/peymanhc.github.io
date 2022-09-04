import { Icon } from "component";
import style from "./style";

interface Props {
  classes: any;
  title: string;
  description: string;
  icon: any;
}
const SquareIcon = ({ classes, title, description, icon }: Props) => {
  return (
    <div className={classes.root}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <h5>{title}</h5>
      {description ? <span>{description}</span> : ""}
    </div>
  );
};
export default style(SquareIcon);
