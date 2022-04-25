import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';

const posts: { title: string; excerpt: string }[] = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
];

type Props = {};

function Blog({}: Props) {
  return (
    <>
      <Head>
        <title>Ebenezer - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto mt-8 mb-8 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 bg-gray-300 lg:col-span-8">
            {posts.map((post) => (
              <div>
                {post.title}
                {post.excerpt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
