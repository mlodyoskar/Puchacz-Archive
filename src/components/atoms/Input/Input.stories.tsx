import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
	title: 'Atoms/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (props) => (
	<Input {...props}>Input</Input>
);

Default.args = {
	type: 'text',
	placeholder: 'data',
};

export const Error: ComponentStory<typeof Input> = (props) => (
	<Input {...props}>Input</Input>
);

Error.args = {
	type: 'text',
	placeholder: 'Wrong data',
	error: 'Error message',
};
