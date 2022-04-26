import Head from 'next/head';
import React from 'react';

import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';

import { getPosts } from '../services';

import { PostNode, PostsList } from '../types';

export async function getStaticProps() {
  const posts: PostNode = (await getPosts()) || [];

  return { props: { posts } };
}

type Props = {
  posts: PostsList;
};

function Blog({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Ebenezer - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto mt-8 mb-8 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post) => (
              <PostCard key={post.node.title} post={post.node} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
