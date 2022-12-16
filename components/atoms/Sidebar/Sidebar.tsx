import Link from 'next/link';
import { Button } from '../Button/Button';
import LogoutIcon from '../../icons/Logobut.svg';

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
	return (
		<aside className="w-64 h-screen" aria-label="Sidebar">
			<div className="overflow-y-auto py-4 px-3 h-full bg-gray-50 rounded flex flex-col">
				<h1 className="mb-4 text-xl">Puchacz Label App</h1>
				<LogoutIcon />
				<ul className="space-y-2">
					{sidebarItems.map(({ text, link }) => (
						<li key={text}>
							<Link
								href={link}
								className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200"
							>
								<svg
									aria-hidden="true"
									className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 -white"
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
					))}
				</ul>
				<div className="mt-auto">
					<Button fullWidth={true}>
						<LogoutIcon />
						Wyloguj się
					</Button>
				</div>
			</div>
		</aside>
	);
};
