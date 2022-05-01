import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { PostsList } from '../../types';
import Loader from '../../components/Loader';
import PostCard from '../../components/PostCard';
import Categories from '../../components/Categories';
import { getCategories, getCategoryPost } from '../../services';
import Navbar from '../../components/Navbar';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getCategoryPost(params?.slug as string);

  return {
    props: { posts },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

type Props = {
  posts: PostsList;
};

const CategoryPost = ({ posts }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Ebenezer - Category</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto mt-8 mb-8 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky lg:top-24">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPost;
