import React from 'react';

interface Props {
	type: 'text' | 'number' | 'file' | 'date' | 'time' | 'password';
	name: string;
	placeholder: string;
}

export const Input = ({ type, name, placeholder }: Props) => {
	return (
		<div>
			<label
				htmlFor={name}
				className={'block pl-7 text-sm font-medium text-gray-700'}
			>
				{name.toUpperCase()}
			</label>
			<input
				type={type}
				name={name}
				placeholder={`Enter ${name} ${placeholder}`}
				className={
					'border-1 border-grey-300 block w-full rounded-md border-2 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
				}
			></input>
		</div>
	);
};
