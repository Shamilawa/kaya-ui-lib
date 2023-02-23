import React from 'react';
import { SVGLoaderProps } from './types';
import { StyledReactSVG } from './styled';

const SVGLoader: React.FC<SVGLoaderProps> = ({
  baseUrl = 'https://cdn.kayaw3.com/icons/',
  className = '',
  name,
  ...rest
}) => {
  return (
    <StyledReactSVG
      src={`${baseUrl}${name}.svg`}
      className={className}
      style={{ ...rest.style }}
      {...rest}
    />
  );
};

export default SVGLoader;
