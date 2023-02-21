import React from 'react';
import { KayaHeading } from './styled';
import { IHeadingProps } from './types';

const Heading: React.FC<IHeadingProps> = ({ children, ...rest }) => {
  return <KayaHeading {...rest}>{children}</KayaHeading>;
};

export default Heading;
