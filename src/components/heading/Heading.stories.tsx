import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

// Heading Typefaces for Display XS
// Display xs/Normal
export const DisplayXSNormal = Template.bind({});
DisplayXSNormal.args = {
  variation: 'xs',
  weight: 'regular',
  children: 'Display xs normal',
};

// Display xs/Medium
export const DisplayXSMedium = Template.bind({});
DisplayXSMedium.args = {
  variation: 'xs',
  weight: 'medium',
  children: 'Display xs Medium',
};

// Display xs/SemiBold
export const DisplayXSSemibold = Template.bind({});
DisplayXSSemibold.args = {
  variation: 'xs',
  weight: 'semiBold',
  children: 'Display xs SemiBold',
};

// Display xs/Bold
export const DisplayXSBold = Template.bind({});
DisplayXSBold.args = {
  variation: 'xs',
  weight: 'bold',
  children: 'Display xs Bold',
};

// =======================================================

// Heading Typefaces for Display SM
// Display sm/Normal
export const DisplaySMNormal = Template.bind({});
DisplaySMNormal.args = {
  variation: 'sm',
  weight: 'regular',
  children: 'Display SM Normal',
};

// Display sm/medium
export const DisplaySMMedium = Template.bind({});
DisplaySMMedium.args = {
  variation: 'sm',
  weight: 'medium',
  children: 'Display SM Medium',
};

// Display sm/semiBold
export const DisplaySMSemibold = Template.bind({});
DisplaySMSemibold.args = {
  variation: 'sm',
  weight: 'semiBold',
  children: 'Display SM Semibold',
};

// Display sm/Bold
export const DisplaySMBold = Template.bind({});
DisplaySMBold.args = {
  variation: 'sm',
  weight: 'bold',
  children: 'Display SM Bold',
};

// =======================================================

// Heading Typefaces for Display MD
// Display md/Normal
export const DisplayMDNormal = Template.bind({});
DisplayMDNormal.args = {
  variation: 'md',
  weight: 'regular',
  children: 'Display MD Normal',
};

// Display md/Medium
export const DisplayMDMedium = Template.bind({});
DisplayMDMedium.args = {
  variation: 'md',
  weight: 'medium',
  children: 'Display MD Medium',
};

// Display md/semiBold
export const DisplayMDSemibold = Template.bind({});
DisplayMDSemibold.args = {
  variation: 'md',
  weight: 'semiBold',
  children: 'Display MD Semibold',
};

// Display md/bold
export const DisplayMDBold = Template.bind({});
DisplayMDBold.args = {
  variation: 'md',
  weight: 'bold',
  children: 'Display SM Bold',
};

// =======================================================

// Heading Typefaces for Display LG
// Display lg/Normal
export const DisplayLGNormal = Template.bind({});
DisplayLGNormal.args = {
  variation: 'lg',
  weight: 'regular',
  children: 'Display lg Normal',
};

// Display lg/Medium
export const DisplayLGMedium = Template.bind({});
DisplayLGMedium.args = {
  variation: 'lg',
  weight: 'medium',
  children: 'Display lg Medium',
};

// Display lg/semiBold
export const DisplayLGSemibold = Template.bind({});
DisplayLGSemibold.args = {
  variation: 'lg',
  weight: 'semiBold',
  children: 'Display lg Semibold',
};

// Display lg/bold
export const DisplayLGBold = Template.bind({});
DisplayLGBold.args = {
  variation: 'lg',
  weight: 'bold',
  children: 'Display lg Bold',
};

// =======================================================

// Heading Typefaces for Display XL
// Display xl/Normal
export const DisplayXLNormal = Template.bind({});
DisplayXLNormal.args = {
  variation: 'xl',
  weight: 'regular',
  children: 'Display xl Normal',
};

// Display XL/Medium
export const DisplayXLMedium = Template.bind({});
DisplayXLMedium.args = {
  variation: 'xl',
  weight: 'medium',
  children: 'Display XL Medium',
};

// Display xl/semiBold
export const DisplayXLSemibold = Template.bind({});
DisplayXLSemibold.args = {
  variation: 'xl',
  weight: 'semiBold',
  children: 'Display xl Semibold',
};

// Display xl/bold
export const DisplayXLBold = Template.bind({});
DisplayXLBold.args = {
  variation: 'xl',
  weight: 'bold',
  children: 'Display xl Bold',
};

// =======================================================
// Heading Typefaces for Display 2xl
// Display 2xl/Normal
export const Display2XLNormal = Template.bind({});
Display2XLNormal.args = {
  variation: '2xl',
  weight: 'regular',
  children: 'Display 2xl Normal',
};

// Display 2XL/Medium
export const Display2XLMedium = Template.bind({});
Display2XLMedium.args = {
  variation: '2xl',
  weight: 'medium',
  children: 'Display 2XL Medium',
};

// Display 2xl/semiBold
export const Display2XLSemibold = Template.bind({});
Display2XLSemibold.args = {
  variation: '2xl',
  weight: 'semiBold',
  children: 'Display 2xl Semibold',
};

// Display 2xl/bold
export const Display2XLBold = Template.bind({});
Display2XLBold.args = {
  variation: '2xl',
  weight: 'bold',
  children: 'Display 2xl Bold',
};
