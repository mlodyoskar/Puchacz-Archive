import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Typography } from './Typography';

export default {
	title: 'Atoms/Typography',
	component: Typography,
} as ComponentMeta<typeof Typography>;

export const Default: ComponentStory<typeof Typography> = (props) => (
	<Typography {...props}>Sample text</Typography>
);

Default.args = {
	component: 'p',
};
