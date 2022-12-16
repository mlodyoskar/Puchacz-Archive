import React from 'react';
import cx from 'clsx';

type Variants = 'default' | 'warning';

interface Props {
	children: React.ReactNode;
	size?: 'small' | 'medium';
	variant?: Variants;
	fullWidth?: boolean;
}

export const Button = ({
	children,
	variant = 'default',
	size = 'medium',
	fullWidth = false,
}: Props) => {
	return (
		<button
			type="button"
			className={cx(
				{
					'text-sm': size === 'small',
					'text-base': size === 'medium',
					'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300': variant === 'default',
					'bg-red-600 hover:bg-red-800  focus:ring-red-300': variant === 'warning',
					'w-full': fullWidth,
				},
				'mr-2 mb-2 rounded-lg  px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4'
			)}
		>
			{children}
		</button>
	);
};
