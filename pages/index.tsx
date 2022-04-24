import type { NextPage } from 'next';
import Head from 'next/head';

import Categories from '../components/Categories';
import PostCard from '../components/PostCard';
import PostWidget from '../components/PostWidget';

import Navbar from '../components/Navbar';

const posts: { title: string; excerpt: string }[] = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
];

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Ebenezer Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero-img flex flex-col items-center justify-center bg-red-50">
        <img className="w-48" src="/flower.png" alt="logo" />
        <h1 className="text-3xl font-bold tracking-wider">Ebenezer</h1>
      </div>
      <Navbar />
      <div className="h-screen w-full">faf</div>
    </div>
  );
};

export default Home;
