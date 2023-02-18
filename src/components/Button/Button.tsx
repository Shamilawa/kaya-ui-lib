import React from 'react';
import { KayaButton } from './styled';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({
  children,
  type,
  role,
  icon,
  size = 'small',
  htmlType = 'button',
  loading = false,
  onClick,
  disabled = false,
  block = false,
  danger = false,
  href,
  target,
}) => {
  return (
    <>
      {role ? (
        <KayaButton
          loading={loading}
          htmlType={htmlType}
          size={size}
          role={role}
          icon={icon}
          disabled={disabled}
          block={block}
          danger={danger}
          href={href}
          target={target}
        >
          {children}
        </KayaButton>
      ) : (
        <KayaButton
          loading={loading}
          htmlType={htmlType}
          size={size}
          type={type}
          icon={icon}
          disabled={disabled}
          block={block}
          danger={danger}
          href={href}
          target={target}
        >
          {children}
        </KayaButton>
      )}
    </>
  );
};

export default Button;
