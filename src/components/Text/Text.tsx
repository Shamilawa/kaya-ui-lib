import React from 'react';
import { Text as KayaText } from './styled';
import { ITextProps } from './types';

const Text: React.FC<ITextProps> = ({ children, ...rest }) => {
  return <KayaText {...rest}>{children}</KayaText>;
};

export default Text;
