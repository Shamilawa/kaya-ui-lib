import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import { RightOutlined } from '@ant-design/icons';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'primary', 'freelancer', 'employer'],
      },
      order: 1,
    },
    shape: {
      control: {
        type: 'radio',
        options: ['default', 'circle', 'round'],
      },
      description: 'Can be set button shape',
      defaultValue: 'default',
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'middle', 'large'],
      },
      defaultValue: 'small',
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} as ComponentMeta<typeof Button>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Reuse that template for creating Default Button
export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  variant: 'default',
};

// Reuse that template for creating Primary Button
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
};

// Reuse that template for creating freelancer Button
export const FreelancerButton = Template.bind({});
FreelancerButton.args = {
  children: 'Freelancer Button',
  variant: 'freelancer',
};

// Reuse that template for creating employer Button
export const EmployerButton = Template.bind({});
EmployerButton.args = {
  children: 'Employer Button',
  variant: 'employer',
};

// Reuse that template for creating Link Button
export const LinkButton = Template.bind({});
LinkButton.args = {
  children: 'Primary Button',
  variant: 'link',
};

// Reuse that template for creating Icon Button
export const IconButton = Template.bind({});
IconButton.args = {
  children: 'Icon Button',
  variant: 'default',
  icon: <RightOutlined />,
};
