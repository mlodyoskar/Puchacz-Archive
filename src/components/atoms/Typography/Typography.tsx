import React from 'react';
import cx from 'clsx';

interface Props {
	children: React.ReactNode;
	component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export const Typography = ({ children, component }: Props) => {
	const Component = component;
	return (
		<Component
			className={cx({
				'text-xs': component === 'h6' || component === 'p',
				'text-sm': component === 'h5',
				'text-base': component === 'h4',
				'text-lg': component === 'h3',
				'text-xl': component === 'h2',
				'text-2xl': component === 'h1',
			})}
		>
			{children}
		</Component>
	);
};
