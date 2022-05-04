import type { NextPage } from 'next';
import Head from 'next/head';

import Categories from '../components/Categories';
import PostCard from '../components/PostCard';
import PostWidget from '../components/PostWidget';

import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Ebenezer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero-img flex flex-col items-center justify-center object-cover">
        <img className="w-48" src="/logo-blog.svg" alt="logo" />
        <p className="hero-about mt-10 w-60 text-center text-lg font-bold tracking-widest text-white md:w-1/2">
          Un blog donde aprenderás cosas nuevas para crecer espiritualmente,
          conocer más de Dios y ponerte en la tarea de reflexionar sobre tu
          vida.
        </p>
      </div>
      <Navbar />
      <div
        id="sobremi"
        className="flex h-screen w-full items-center justify-center bg-amber-200 text-3xl"
      >
        SOBRE MI
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-lime-200 text-3xl">
        BLOG
      </div>
      <div
        id="escribeme"
        className="flex h-screen w-full items-center justify-center bg-slate-200 text-3xl"
      >
        ESCRIBEME
      </div>
    </div>
  );
};

export default Home;
