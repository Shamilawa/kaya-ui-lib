import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// Text XS
// Text xs/Normal
export const TextXSNormal = Template.bind({});
TextXSNormal.args = {
  variation: 'xs',
  weight: 'regular',
  children: 'Text xs Normal',
};

// Text xs/medium
export const TextXSMedium = Template.bind({});
TextXSMedium.args = {
  variation: 'xs',
  weight: 'medium',
  children: 'Text xs Medium',
};

// Text xs/semibold
export const TextXSSemibold = Template.bind({});
TextXSSemibold.args = {
  variation: 'xs',
  weight: 'semiBold',
  children: 'Text xs Semibold',
};

// Text xs/semibold
export const TextXSBold = Template.bind({});
TextXSBold.args = {
  variation: 'xs',
  weight: 'bold',
  children: 'Text xs Bold',
};

// =======================================================

// Text SM
// Text sm/Normal
export const TextSMNormal = Template.bind({});
TextSMNormal.args = {
  variation: 'sm',
  weight: 'regular',
  children: 'Text sm Normal',
};

// Text sm/medium
export const TextSMMedium = Template.bind({});
TextSMMedium.args = {
  variation: 'sm',
  weight: 'medium',
  children: 'Text sm Medium',
};

// Text sm/semibold
export const TextSMSemibold = Template.bind({});
TextSMSemibold.args = {
  variation: 'sm',
  weight: 'semiBold',
  children: 'Text sm Semibold',
};

// Text sm/semibold
export const TextSMBold = Template.bind({});
TextSMBold.args = {
  variation: 'sm',
  weight: 'bold',
  children: 'Text sm Bold',
};

// =======================================================

// Text md
// Text md/Normal
export const TextMDNormal = Template.bind({});
TextMDNormal.args = {
  variation: 'md',
  weight: 'regular',
  children: 'Text md Normal',
};

// Text md/medium
export const TextMDMedium = Template.bind({});
TextMDMedium.args = {
  variation: 'md',
  weight: 'medium',
  children: 'Text md Medium',
};

// Text md/semibold
export const TextMDSemibold = Template.bind({});
TextMDSemibold.args = {
  variation: 'md',
  weight: 'semiBold',
  children: 'Text md Semibold',
};

// Text md/semibold
export const TextMDBold = Template.bind({});
TextMDBold.args = {
  variation: 'md',
  weight: 'bold',
  children: 'Text md Bold',
};

// =======================================================

// Text lg
// Text lg/Normal
export const TextLGNormal = Template.bind({});
TextLGNormal.args = {
  variation: 'lg',
  weight: 'regular',
  children: 'Text lg Normal',
};

// Text lg/medium
export const TextLGMedium = Template.bind({});
TextLGMedium.args = {
  variation: 'lg',
  weight: 'medium',
  children: 'Text lg Medium',
};

// Text lg/semibold
export const TextLGSemibold = Template.bind({});
TextLGSemibold.args = {
  variation: 'lg',
  weight: 'semiBold',
  children: 'Text lg Semibold',
};

// Text lg/semibold
export const TextLGBold = Template.bind({});
TextLGBold.args = {
  variation: 'lg',
  weight: 'bold',
  children: 'Text lg Bold',
};

// =======================================================

// Text xl
// Text xl/Normal
export const TextXLNormal = Template.bind({});
TextXLNormal.args = {
  variation: 'xl',
  weight: 'regular',
  children: 'Text xl Normal',
};

// Text xl/medium
export const TextXLMedium = Template.bind({});
TextXLMedium.args = {
  variation: 'xl',
  weight: 'medium',
  children: 'Text xl Medium',
};

// Text xl/semibold
export const TextXLSemibold = Template.bind({});
TextXLSemibold.args = {
  variation: 'xl',
  weight: 'semiBold',
  children: 'Text xl Semibold',
};

// Text xl/semibold
export const TextXLBold = Template.bind({});
TextXLBold.args = {
  variation: 'xl',
  weight: 'bold',
  children: 'Text xl Bold',
};
