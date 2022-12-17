import { Button } from 'components/atoms/Button/Button';
import { Sidebar } from 'components/atoms/Sidebar/Sidebar';
import { Typography } from 'components/atoms/Typography/Typography';
import { MainLayout } from 'components/layouts/MainLayout';

const HomePage = () => {
	return (
		<MainLayout>
			<Typography component="h1">Strona główna</Typography>
			<div className="bg-indigo-800 w-10 h-[2000px]"></div>
		</MainLayout>
	);
};

export default HomePage;
