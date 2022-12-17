import Link from 'next/link';
import { Button } from '../Button/Button';
import LogoutIcon from '../../icons/Logout.svg';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const sidebarItems = [
	{
		text: 'Home',
		link: '/',
		icon: 'LogoutIcon',
	},
	{
		text: 'Budzet',
		link: '/budzet',
		icon: 'ICON',
	},
	{
		text: 'Imprezy',
		link: '/imprezy',
		icon: 'ICON',
	},
	{
		text: 'Logi',
		link: '/logi',
		icon: 'ICON',
	},
];

export const Sidebar = () => {
	const router = useRouter();
	return (
		<aside className="w-64 h-screen" aria-label="Sidebar">
			<div className="overflow-y-auto py-4 px-3 h-full bg-gray-50 rounded flex flex-col">
				<h1 className="mb-4 text-xl">Puchacz Label App</h1>
				<ul className="space-y-2">
					{sidebarItems.map(({ text, link, icon: Icon }) => {
						const isActive = link === router.pathname;
						return (
							<li key={text}>
								<Link
									href={link}
									className={clsx(
										'flex items-center p-2 text-base group font-normal rounded-lg',
										{ 'bg-blue-600 hover:bg-blue-700 text-white': isActive },
										{
											' text-gray-900  hover:bg-gray-200': !isActive,
										}
									)}
								>
									<svg
										aria-hidden="true"
										className={clsx(
											'w-6 h-6  transition duration-75',
											{ ' text-white': isActive },
											{
												' text-gray-500  hover:bg-gray-200': !isActive,
											}
										)}
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
										<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
									</svg>
									<span className="ml-3">{text}</span>
								</Link>
							</li>
						);
					})}
				</ul>
				<div className="mt-auto">
					<Button fullWidth={true}>
						<LogoutIcon className="w-6 h-6" />
						Wyloguj się
					</Button>
				</div>
			</div>
		</aside>
	);
};
