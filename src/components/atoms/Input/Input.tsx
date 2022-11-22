import React from 'react';
import cx from 'clsx';

type Variants = 'default' | 'error';

interface Props {
	type: React.HTMLInputTypeAttribute;
	name: string;
	placeholder: string;
	variant: Variants;
}

export const Input = ({ type, name, placeholder, variant }: Props) => {
	return (
		<div>
			<label htmlFor={name} className={'pl-7 text-sm font-medium text-gray-700'}>
				{name.toUpperCase()}
			</label>
			<input
				type={type}
				name={name}
				placeholder={
					variant === 'default' ? `Enter ${name} ${placeholder}` : `${placeholder}`
				}
				className={cx(
					{
						'border-slate-400': variant === 'default',
						'border-red-300': variant === 'error',
					},
					'border-1 block w-full rounded-md border-2 pl-7 pr-12 focus:border-indigo-500 sm:text-sm'
				)}
			></input>
			{variant === 'error' ? (
				<p className="text-sm">Something went wrong!</p>
			) : (
				<></>
			)}
		</div>
	);
};
