import { Divider, Modal as CoreModal, ModalProps } from 'antd';
import withStyles, { WithStyles } from 'react-jss';
import styles from './style';

interface Props extends WithStyles<typeof styles> {
  classes?: any;
  className?: any;
  title?: string;
}

const Modal: React.FC<Props & ModalProps> = ({
  children,
  classes,
  title,
  className,
  ...props
}): JSX.Element => {
  return (
    <CoreModal
      title={<Divider>{title}</Divider>}
      {...props}
      className={[className, classes.root].join(' ')}
    >
      {children}
    </CoreModal>
  );
};

export default withStyles(styles)(Modal);
