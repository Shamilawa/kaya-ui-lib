import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const StyledReactSVG = styled(ReactSVG)<{
  width?: string;
  height?: string;
  color?: string;
  strokeWidth?: string;
}>`
  svg {
    ${({ width, height }) =>
      width &&
      height &&
      `width: ${width};
          height: ${height};
      `}
    ${({ strokeWidth }) =>
      strokeWidth &&
      `
          stroke-width: ${strokeWidth}
  `}
  }
  path,
  circle {
    ${({ color }) =>
      color &&
      `
          stroke: ${color}
          `}
  }
`;
