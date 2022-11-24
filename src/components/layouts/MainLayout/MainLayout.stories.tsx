import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { MainLayout } from './MainLayout';

export default {
	title: 'Layouts/Main Layout',
	component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

export const Default: ComponentStory<typeof MainLayout> = (props) => (
	<MainLayout {...props}>children</MainLayout>
);

Default.args = {};
