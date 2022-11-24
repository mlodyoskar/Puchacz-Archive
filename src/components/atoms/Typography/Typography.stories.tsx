import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Typography } from './Typography';

export default {
	title: 'Atoms/Typography',
	component: Typography,
} as ComponentMeta<typeof Typography>;

export const h1: ComponentStory<typeof Typography> = (props) => (
	<Typography {...props}>h1 tag</Typography>
);

h1.args = {
	component: 'h1',
};
export const h2: ComponentStory<typeof Typography> = (props) => (
	<Typography {...props}>h2 tag</Typography>
);

h2.args = {
	component: 'h2',
};
export const h3: ComponentStory<typeof Typography> = (props) => (
	<Typography {...props}>h3 tag</Typography>
);

h3.args = {
	component: 'h3',
};
export const h4: ComponentStory<typeof Typography> = (props) => (
	<Typography {...props}>h4 tag</Typography>
);

h4.args = {
	component: 'h4',
};
export const h5: ComponentStory<typeof Typography> = (props) => (
	<Typography {...props}>h5 tag</Typography>
);

h5.args = {
	component: 'h5',
};
export const h6: ComponentStory<typeof Typography> = (props) => (
	<Typography {...props}>h6 tag</Typography>
);

h6.args = {
	component: 'h6',
};

export const P: ComponentStory<typeof Typography> = (props) => (
	<Typography {...props}>p tag</Typography>
);

P.args = {
	component: 'p',
};
export const Span: ComponentStory<typeof Typography> = (props) => (
	<Typography {...props}>span tag</Typography>
);

Span.args = {
	component: 'span',
};
