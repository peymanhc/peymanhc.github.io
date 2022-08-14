import './assest/style.css';

const Icon = (props: any): any => {
  const { className, name, ...rest } = props;
  return <i className={[className, `icon-${name}`].join(' ')} {...rest} />;
};

export default Icon;
