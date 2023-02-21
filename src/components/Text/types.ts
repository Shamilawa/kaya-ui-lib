import { IVariationType, IWeightType } from '../heading/types';

export interface ITextProps {
  children: React.ReactNode;
  variation?: IVariationType;
  weight?: IWeightType;
  color?: string;
}
