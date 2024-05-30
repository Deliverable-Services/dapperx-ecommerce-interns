import styles from './Button.module.css';

const styleMapped = {
  primary: styles.primary,
};

const Button = ({ children, component = 'button' }) => {
  const Wrapper = component;
  const variant = styleMapped.primary;

  return <Wrapper className={variant.split().join(' ')}>{children}</Wrapper>;
};

export default Button;
