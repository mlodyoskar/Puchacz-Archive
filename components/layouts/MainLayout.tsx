import { Sidebar } from 'components/atoms/Sidebar/Sidebar';
import React from 'react';

interface Props {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
	return (
		<div className="flex">
			<div className="fixed">
				<Sidebar />
			</div>
			<main className="ml-64 p-4">{children}</main>
		</div>
	);
};
