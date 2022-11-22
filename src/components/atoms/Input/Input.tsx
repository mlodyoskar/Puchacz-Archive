import React from 'react';
import cx from 'clsx';

type Variants = 'default' | 'error';

interface Props {
	type: React.HTMLInputTypeAttribute;
	name: string;
	placeholder: string;
	variant: Variants;
	error: string;
}

export const Input = ({ type, name, placeholder, variant, error }: Props) => {
	return (
		<div>
			<label
				htmlFor={name}
				className={cx(
					{
						'border-slate-400': variant === 'default',
						'border-red-400': variant === 'error',
					},
					'block overflow-hidden rounded-md border px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
				)}
			>
				<span className="text-xs font-medium text-gray-700"> {name} </span>

				<input
					type={type}
					placeholder={placeholder}
					className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
				/>
			</label>
			{variant === 'error' ? (
				<p className="mt-1 text-sm text-red-400">{error}</p>
			) : (
				<></>
			)}
		</div>
	);
};
