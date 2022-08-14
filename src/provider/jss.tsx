import React from 'react';
import jss from 'jss';
import rtl from 'jss-rtl';
import { createUseStyles, JssProvider, createGenerateId } from 'react-jss';

import jssPluginCompose from 'jss-plugin-compose';

const generateId = createGenerateId();

//@ts-ignore
const jssCreate = jss.createUseStyles({
  plugins: [rtl(), jssPluginCompose()],
});

function Jss(props: any) {
  //@ts-ignore
  return (
    <JssProvider
      jss={jssCreate}
      classNamePrefix="ippanel-"
      generateId={generateId}
    >
      {props.children}
    </JssProvider>
  );
}

export default Jss;
