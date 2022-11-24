import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import { trpc } from '../utils/trpc';
import { MainLayout } from 'src/components/layouts/MainLayout/MainLayout';

const Home: NextPage = () => {
	const hello = trpc.example.hello.useQuery({ name: 'from tRPC' });

	return <MainLayout>asd</MainLayout>;
};

export default Home;
