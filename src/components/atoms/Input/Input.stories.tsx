import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
	title: 'Atoms/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (props) => (
	<Input {...props}></Input>
);
Default.args = {
	name: 'Input',
	type: 'text',
	placeholder: 'data',
	variant: 'default',
};

export const Error: ComponentStory<typeof Input> = (props) => (
	<Input {...props}></Input>
);

Error.args = {
	name: 'Input',
	type: 'text',
	placeholder: 'Wrong data',
	variant: 'error',
};
