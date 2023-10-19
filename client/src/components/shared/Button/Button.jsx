import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

const Button = ({
  className,
  onClick,
  type = 'button',
  disabled,
  children,
}) => {
  return (
    <Btn
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </Btn>
  );
};

export default Button;

Button.propTepes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
