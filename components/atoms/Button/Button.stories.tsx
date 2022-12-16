import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
	title: 'Atoms/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => (
	<Button {...props}>Button</Button>
);

Default.args = {
	size: 'medium',
	variant: 'default',
};

export const Warning: ComponentStory<typeof Button> = (props) => (
	<Button {...props}>Button</Button>
);

Warning.args = {
	size: 'medium',
	variant: 'warning',
};
