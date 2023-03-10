import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { IButtonVariant } from './types';

// Generate different Button Types
// generating styles for different buttons
const buttonTypeStyles = (variant: IButtonVariant) => {
  switch (variant) {
    // Default button
    case 'default':
      return css`
        background-color: #ffffff;
        border: 1px solid #b6b8bd;
        color: #232830 !important;
        &:hover {
          background-color: #eceef0;
          border-color: #b6b8bd !important;
        }
      `;
    // Primary button
    case 'primary':
      return css`
        background-color: #4e535b;
        border: 1px solid #4e535b;
        color: #ffffff !important;
        &:hover {
          background-color: #3a3f47 !important;
          border-color: #3a3f47 !important;
        }
      `;
    // Link button
    case 'link':
      return css`
        background-color: unset;
        border: none;
        color: #3a3f47 !important;
        box-shadow: none;
        &:hover {
          cursor: pointer;
        }
        span {
          text-decoration: underline;
        }
      `;
    // Freelancer Primary button
    case 'freelancer':
      return css`
        background-color: #374ebb;
        border: 1px solid #374ebb;
        color: #ffffff !important;
        &:hover {
          background-color: #2c3f95 !important;
          border-color: #2c3f95 !important;
        }
      `;
    // Employer Primary button
    case 'employer':
      return css`
        background-color: #039caa;
        border: 1px solid #039caa;
        color: #ffffff !important;
        &:hover {
          background-color: #048095 !important;
          border-color: #048095 !important;
        }
      `;
    default:
      return css``;
  }
};

// Generate different button size
// supporting size - small, middle, large
const buttonSizeStyles = (size: string) => {
  switch (size) {
    // Default button
    case 'small':
      return css`
        padding: 8px 14px !important;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      `;
    case 'middle':
      return css`
        padding: 10px 16px !important;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      `;
    case 'large':
      return css`
        padding: 10px 18px !important;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      `;
  }
};

export const KayaButton = styled(Button)<{
  variant?: IButtonVariant;
  size?: string;
  shape?: string;
}>`
  /* common styles for all button types and default buttons */
  height: 44px !important;

  /* this wil control button variants */
  ${(props) => buttonTypeStyles(props.variant || 'default')}

  /* this will control button sizes */
  ${(props) => buttonSizeStyles(props.size || 'sm')}
 
  /* boder radius for different button sizes. default will be border radius 0 */
  border-radius: ${(props) =>
    props.shape === 'circle'
      ? '50% !important'
      : props.shape === 'round'
      ? '40px !important'
      : '0 !important'}
`;
