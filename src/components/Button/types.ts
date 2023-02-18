export interface IButtonProps {
  children?: React.ReactNode;
  type?: IButtonTypes;
  role?: 'freelancer' | 'employer';
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  icon?: React.ReactNode;
  loading?: boolean;
  // shape?: 'default' | 'circle' | 'round' | undefined;
  size?: 'small' | 'middle' | 'large' | undefined;
  onClick?: (event: MouseEvent) => void | undefined;
  disabled?: boolean;
  block?: boolean;
  danger?: boolean;
  href?: string;
  target?: string;
}

// Button Types
export type IButtonTypes =
  | 'default'
  | 'primary'
  | 'ghost'
  | 'dashed'
  | 'link'
  | 'text';
