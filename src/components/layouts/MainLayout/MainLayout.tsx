import Link from 'next/link';
import HomeIcon from 'icons/home.svg';
import EventIcon from 'icons/event.svg';
import BudgetIcon from 'icons/budget.svg';
import LogsIcon from 'icons/logs.svg';
import LogoutIcon from 'icons/logout.svg';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
		name: 'Budżet',
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
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	console.log(pathname);

	const toggleMenuOpen = () => {
		setIsMenuVisible((prevValue) => !prevValue);
	};
	return (
		<>
			<div className="flex flex-col">
				<div className="flex h-12 items-center bg-blue-600">
					<button
						onClick={() => toggleMenuOpen()}
						className="relative z-10 my-auto ml-2 flex h-10 w-8 flex-col justify-center p-4 md:hidden"
					>
						<span
							className={clsx(
								'absolute left-0  h-[4px] w-full rounded-full bg-gray-900 transition-all',
								{
									'translate-y-0 -rotate-45': isMenuVisible,
									'-translate-y-2': !isMenuVisible,
								}
							)}
						></span>
						<span
							className={clsx(
								' absolute left-0 h-[4px] w-full rounded-full bg-gray-900 ',
								{
									hidden: isMenuVisible,
								}
							)}
						></span>
						<span
							className={clsx(
								'absolute left-0 h-[4px] w-full rounded-full bg-gray-900 transition-all',
								{
									'translate-y-0 rotate-45': isMenuVisible,
									'translate-y-2': !isMenuVisible,
								}
							)}
						></span>
					</button>
				</div>

				<aside
					className={clsx('absolute h-screen w-full md:flex md:w-64', {
						flex: isMenuVisible,
						hidden: !isMenuVisible,
					})}
					aria-label="Sidebar"
				>
					<div className="flex h-full w-full flex-col overflow-y-auto  bg-gray-50 py-4 px-3 ">
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
												{ 'bg-blue-700 text-white': isLinkActive }
											)}
										>
											<Icon width={24} />
											<span className="ml-3 text-base">{name}</span>
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
				<main className="p-4 md:w-3/4">{children}</main>
			</div>
		</>
	);
};
