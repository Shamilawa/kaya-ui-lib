export const argTypes = {
  name: {
    description:
      'Name of the icon. List of the icon name can be found on the CDN',
  },
  color: {
    name: 'Icon Color',
    description:
      'Color of the Icon. Use Hex format for color. This will change the strock color',
    table: {
      defaultValue: { summary: '#999ea6' },
    },
    control: { type: 'color' },
  },
  className: {
    description: 'Add a custom color using custome color prop.',
    control: { type: 'text' },
  },
  width: {
    description:
      'Add custom width to icon. Note that to custom height to work properly, you must provide height as well.',
    table: {
      defaultValue: { summary: '20px' },
    },
    control: { type: 'text' },
  },
  height: {
    description:
      'Add custom height to icon. Note that to custom height to work properly, you must provide width as well.',
    table: {
      defaultValue: { summary: '20px' },
    },
    control: { type: 'text' },
  },
  style: {
    description:
      'Add custom inline css style to svg loarder by passing CSSProperties',
  },
  wrapper: {
    description: 'Define the wrapper element',
    table: {
      type: {
        summary: "'div' | 'span' | 'svg' | 'undefined'",
      },
    },
    control: {
      type: 'radio',
      options: ['div', 'span', 'svg'],
    },
  },
  strokeWidth: {
    description: 'Define the width of the string in px',
    table: {
      defaultValue: { summary: '1px' },
    },
  },
};
