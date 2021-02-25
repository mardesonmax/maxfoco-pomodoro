import React from 'react';
import { MyButton } from './styled';

interface Props {
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
  const { onClick, children, className } = props;
  return (
    <MyButton onClick={onClick} className={`${className}`}>
      {children}
    </MyButton>
  );
};

export default Button;
