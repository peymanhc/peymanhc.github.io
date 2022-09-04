import Icon from "component/icon";
import SquareCard from "component/squareCard";
import { locale } from "config/string";
import useApp from "hooks/app.hooks";
import { read } from "storage";
import style from "./style";

type Props = {
  classes: any;
};

function Settings({ classes }: Props) {
  const { changeTheme,changeLanguage } = useApp();
  const handleChangeTheme = (color) => {
    changeTheme(color);
  };
  const handleChangeLanguage = (language) => {
    const currentLang = read("language");
    if(currentLang !== language){
      changeLanguage(language);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.card}>
          <SquareCard
            title={
              <div className={classes.colors}>
                <span onClick={() => handleChangeTheme("green")} />
                <span onClick={() => handleChangeTheme("blue")} />
                <span onClick={() => handleChangeTheme("pink")} />
              </div>
            }
            description={locale.changeTheme}
            icon={
              <Icon className={classes.cardIcon} name="Managment_Setting" />
            }
          />
        </div>
        <div className={classes.card}>
          <SquareCard
            title={
              <div className={classes.languages}>
                <span onClick={() => handleChangeLanguage("en")}>En</span>
                <span onClick={() => handleChangeLanguage("fa")}>Fa</span>
              </div>
            }
            description={locale.changeLanguage}
            icon={<Icon className={classes.cardIcon} name="Web_Service" />}
          />
        </div>
      </div>
    </div>
  );
}

export default style(Settings);
