export interface IButtonAdditionalProps {
  variant?: IButtonVariant;
}

// Button Types
export type IButtonVariant =
  | 'default'
  | 'primary'
  | 'employer'
  | 'freelancer'
  | 'ghost'
  | 'dashed'
  | 'link'
  | 'text'
  | undefined;
