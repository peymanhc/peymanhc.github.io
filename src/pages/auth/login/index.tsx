import React, { useState } from "react";
import { locale } from "config/string";
import style from "./style";
import { store } from "storage";
import { useHistory } from "react-router";

interface Props {
  classes: any;
}
function Login({ classes }: Props) {
  const history = useHistory();

  const handleSubmitLogin = ()=>{
    store('token', "jwt-token");
    history.push("/");
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.pcon}>
        <h2>{locale.loginWelcome}</h2>
        <form>
          <div className={classes.inputs}>
            <h3>{locale.username}</h3>
            <input type="text" className={classes.textfield} id="un" />
            <h3 className={classes.forgot} id="fun">
             {locale.forgotUsername}
            </h3>
          </div>
          <div className={classes.inputs}>
            <h3>{locale.password}</h3>
            <input type="text" className={classes.textfield} id="pw" />
            <h3 className={classes.forgot} id="fpw">
             {locale.forgotPassword}
            </h3>
          </div>
          <button onClick={handleSubmitLogin} className={classes.btn}>{locale.signIn}</button>
        </form>
      </div>
    </div>
  );
}

export default style(Login);
