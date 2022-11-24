import Link from 'next/link';
import HomeIcon from '../../../../public/icons/home.svg';
import EventIcon from '../../../../public/icons/event.svg';
import BudgetIcon from '../../../../public/icons/budget.svg';
import LogsIcon from '../../../../public/icons/logs.svg';
import LogoutIcon from '../../../../public/icons/logout.svg';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface Props {
	children: React.ReactNode;
}

const sidebarLinks: SiderbarLink[] = [
	{
		name: 'Strona główna',
		link: '/',
		icon: HomeIcon,
	},
	{
		name: 'Imprezy',
		link: '/events',
		icon: EventIcon,
	},
	{
		name: 'Budzet',
		link: '/budget',
		icon: BudgetIcon,
	},
	{
		name: 'Logi',
		link: '/logs',
		icon: LogsIcon,
	},
];

type SiderbarLink = {
	name: string;
	link: string;
	icon: 'svg';
};

export const MainLayout = ({ children }: Props) => {
	const { pathname } = useRouter();
	console.log(pathname);
	return (
		<div className="flex">
			<aside className="h-screen w-64" aria-label="Sidebar">
				<div className="flex h-full flex-col overflow-y-auto  bg-gray-50 py-4 px-3 ">
					<div className="flex items-center justify-center">
						{/* //TODO: Add our logo here */}
						<h1 className="text-2xl">Puchacz Label 🦉</h1>
					</div>
					<ul className="mt-6 space-y-4">
						{sidebarLinks.map(({ name, link, icon: Icon }) => {
							const isLinkActive = pathname === link;
							return (
								<li key={name}>
									<Link
										href={link}
										className={clsx(
											'flex items-center rounded-lg px-2 py-2 text-base font-normal',
											{ ' text-gray-900': !isLinkActive },
											{ 'bg-indigo-700 text-white': isLinkActive }
										)}
									>
										<Icon width={24} />
										<span className="ml-3 text-lg">{name}</span>
									</Link>
								</li>
							);
						})}
					</ul>
					<div className="mt-auto">
						<Link
							//TODO: Add logout logic
							href="/"
							className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 "
						>
							<LogoutIcon width={24} />
							<span className="ml-3">Logout</span>
						</Link>
					</div>
				</div>
			</aside>
			<main className="p-4">{children}</main>
		</div>
	);
};
