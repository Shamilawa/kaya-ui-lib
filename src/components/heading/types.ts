export interface IHeadingProps {
  children: React.ReactNode;
  variation?: IVariationType;
  weight?: IWeightType;
  color?: string;
}

export type IVariationType =
  | '2xl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs'
  | undefined;

export type IWeightType =
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | undefined;
