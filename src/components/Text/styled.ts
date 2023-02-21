import { Typography } from 'antd';
import styled from 'styled-components';
import { IVariationType, IWeightType } from '../heading/types';

const { Paragraph } = Typography;

//TODO: get  these with a HOC styled components Refer Styled components document
const handlefontSize = (variation: IVariationType | undefined) => {
  switch (variation) {
    case 'xl':
      return '20px';
    case 'lg':
      return '18px';
    case 'md':
      return '16px';
    case 'sm':
      return '14px';
    case 'xs':
      return '12px';
    default:
      return '20px';
  }
};

//TODO: Optimize the redundancy on switch statement with a key Value mapper
const handlelineHeight = (variation: IVariationType | undefined) => {
  switch (variation) {
    case 'xl':
      return '30px';
    case 'lg':
      return '28px';
    case 'md':
      return '24px';
    case 'sm':
      return '20px';
    case 'xs':
      return '18px';
    default:
      return '30px';
  }
};

// this function will handle the font weight based on variant and given font
const handleFontWeight = (weight: IWeightType) => {
  switch (weight) {
    case 'regular':
      return '400';
    case 'medium':
      return '500';
    case 'semiBold':
      return '600';
    case 'bold':
      return '700';
    default:
      return '400';
  }
};

// if color is provided this function will halde the color
const handleColor = (color: string | undefined) => {
  if (color) {
    return color;
  } else {
    return '#131820';
  }
};

export const Text = styled(Paragraph)<{
  variation?: IVariationType;
  weight?: IWeightType;
  color?: string;
}>`
  &&&& {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: ${({ weight }) => handleFontWeight(weight)};
    font-size: ${({ variation }) => handlefontSize(variation)};
    line-height: ${({ variation }) => handlelineHeight(variation)};
    color: ${({ color }) => handleColor(color)};
    margin-bottom: 0;
  }
`;
