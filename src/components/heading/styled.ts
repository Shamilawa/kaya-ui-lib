import { Typography } from 'antd';
import styled from 'styled-components';
import { IVariationType, IWeightType } from './types';

const { Title } = Typography;

// this function will handle fontsize based on the variant type
const handlefontSize = (variation: IVariationType | undefined) => {
  switch (variation) {
    case '2xl':
      return '72px';
    case 'xl':
      return '50px';
    case 'lg':
      return '48px';
    case 'md':
      return '36px';
    case 'sm':
      return '30px';
    case 'xs':
      return '24px';
    default:
      return '72px';
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

// based on the variant, this function will handle the lineheight
const handlelineHeight = (variation: IVariationType | undefined) => {
  switch (variation) {
    case '2xl':
      return '90px';
    case 'xl':
      return '72px';
    case 'lg':
      return '60px';
    case 'md':
      return '44px';
    case 'sm':
      return '38px';
    case 'xs':
      return '32px';
    default:
      return '72px';
  }
};

export const KayaHeading = styled(Title)<{
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
    letter-spacing: -0.02em;
    color: ${({ color }) => handleColor(color)};
  }
`;
