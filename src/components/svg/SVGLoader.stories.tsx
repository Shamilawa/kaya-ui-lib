import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SVGLoader from './SvgLoader';
import { argTypes } from './argTypes';

export default {
  title: 'Components/SvgLoader',
  component: SVGLoader,
  argTypes,
} as ComponentMeta<typeof SVGLoader>;

const Template: ComponentStory<typeof SVGLoader> = (args) => (
  <SVGLoader {...args} />
);

// defualt with name
export const SvgDefault = Template.bind({});
SvgDefault.args = {
  name: 'clock',
  color: '',
  className: '',
  width: '',
  height: '',
  style: {},
  wrapper: undefined,
  strokeWidth: '',
};

export const customColor = Template.bind({});
customColor.args = {
  name: 'clock',
  color: '#f2095e',
};

export const customClassName = Template.bind({});
customClassName.args = {
  name: 'clock',
  className: '--hover',
};

export const customSize = Template.bind({});
customSize.args = {
  name: 'clock',
  width: '50px',
  height: '50px',
};

export const customStyle = Template.bind({});
customStyle.args = {
  name: 'clock',
  style: { padding: '24px' },
};

export const customWrapper = Template.bind({});
customWrapper.args = {
  name: 'clock',
  wrapper: 'span',
};

export const customStrokeWidth = Template.bind({});
customStrokeWidth.args = {
  name: 'clock',
  strokeWidth: '2px',
};
