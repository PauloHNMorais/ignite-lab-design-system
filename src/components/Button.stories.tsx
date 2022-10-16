import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create Account',
  },
  argTypes: {
    children: {
      description: 'Label of the button',
    },
    asChild: {
      description:
        'Determines if this component will have another component as its child',
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
