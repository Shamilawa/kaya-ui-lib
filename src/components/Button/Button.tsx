import React, { ButtonHTMLAttributes } from 'react';
import { ButtonProps } from 'antd';
import { IButtonAdditionalProps } from './types';
import { KayaButton } from './styled';

// type definitions for button - including default
// HTML button attributes, antd button attributes
// with some custon button attributes called IButtonAdditionalProps
type IButtonProps = IButtonAdditionalProps &
  ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({
  variant = 'default',
  onClick,
  icon,
  size = 'small',
  shape = 'default',
  ...rest
}) => {
  return (
    <KayaButton
      size={size}
      variant={variant}
      shape={shape}
      onClick={onClick}
      {...rest}
    >
      {rest.children}
      {icon}
    </KayaButton>
  );
};

export default Button;
