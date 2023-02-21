import React from 'react';
import { KayaHeading } from './styled';
import { IHeadingProps } from './types';

const Heading: React.FC<IHeadingProps> = ({
  children,
  variation,
  weight,
  color,
}) => {
  return (
    <KayaHeading variation={variation} weight={weight} color={color}>
      {children}
    </KayaHeading>
  );
};

export default Heading;
