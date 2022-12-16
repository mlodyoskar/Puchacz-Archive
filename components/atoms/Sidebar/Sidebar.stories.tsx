import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Sidebar } from './Sidebar';

export default {
	title: 'Atoms/Sidebar',
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Default: ComponentStory<typeof Sidebar> = (props) => (
	<Sidebar />
);

Default.args = {
	
};
