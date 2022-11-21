import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
	title: 'Atoms/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

export const FormInput: ComponentStory<typeof Input> = (props) => (
	<Input {...props}></Input>
);
FormInput.args = {
	name: 'Input',
	type: 'text',
	placeholder: 'data',
};
