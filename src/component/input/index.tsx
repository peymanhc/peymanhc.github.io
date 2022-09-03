import {
  Input as CoreInput,
  InputNumber,
  InputNumberProps,
  InputProps,
} from 'antd';
import { persianNumberToEnglish } from 'helpers/converter';
import React, { useEffect } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './style';

interface Props extends WithStyles<typeof styles> {
  className?: string;
  classes: any;
  type?: string;
}

const Input: React.FunctionComponent<Props & InputProps & InputNumberProps> = (
  props
) => {
  const { type, className = '', classes, ...rest } = props;

  const rests = {
    ...rest,
  };

  const InputRef = React.useRef(null);
  if (InputRef?.current?.input?.value) {
    InputRef.current.input.value = persianNumberToEnglish(
      InputRef?.current?.input?.value
    );
  }
  if (type === 'textarea') {
    return (
      <CoreInput.TextArea
        {...rests}
        className={[classes.root, className].join(' ')}
        ref={InputRef}
      />
    );
  }
  if (type === 'password') {
    return (
      <CoreInput.Password
        {...rests}
        ref={InputRef}
        className={[classes.root, className].join(' ')}
      />
    );
  }
  if (type === 'search') {
    return (
      <CoreInput.Search
        {...rests}
        ref={InputRef}
        className={[classes.root, className].join(' ')}
      />
    );
  }
  if (type === 'number') {
    return (
      <InputNumber
        {...rests}
        ref={InputRef}
        type="number"
        className={[classes.root, className].join(' ')}
      />
    );
  }
  if (type === 'tel') {
    return (
      <CoreInput
        {...rests}
        ref={InputRef}
        type="tel"
        // value={InputRef?.current?.input?.value}
        className={[classes.root, className].join(' ')}
      />
    );
  }
  if (type === 'text') {
    return (
      <CoreInput
        ref={InputRef}
        {...rests}
        className={[classes.root, className].join(' ')}
      />
    );
  }
};
export default withStyles(styles)(Input);
