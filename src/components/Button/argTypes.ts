// argTypes configuration for button
// these args file need for
// generating story book docs table

export const argTypes = {
  onClick: { action: 'clicked' },
  variant: {
    control: {
      type: 'radio',
      options: ['default', 'primary', 'freelancer', 'employer'],
    },
    description: 'Get different button variant',
    table: {
      type: {
        summary: "'default' | 'primary' | 'freelancer' | 'employer'",
      },
    },
  },
  shape: {
    control: {
      type: 'radio',
      options: ['default', 'circle', 'round'],
    },
    description: 'Can be set button shape',
    table: {
      type: {
        summary: "'default' | 'circle' | 'round'",
      },
    },
    defaultValue: {
      summary: "'default'",
    },
  },
  size: {
    control: {
      type: 'radio',
      options: ['small', 'middle', 'large'],
    },
    description: 'Get different Button Size',
    table: {
      type: {
        summary: "'small' | 'middle' | 'large'",
      },
    },
    defaultValue: {
      summary: "'small'",
    },
  },
  disabled: {
    control: 'boolean',
    description: 'Disables the button if set to true.',
    table: {
      type: {
        summary: 'boolean',
        detail: undefined,
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
  loading: {
    control: 'boolean',
    description: 'Set the button loading state',
    table: {
      type: {
        summary: 'boolean',
        detail: undefined,
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
};
