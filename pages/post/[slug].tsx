import Head from 'next/head';
import React from 'react';
import Author from '../../components/Author';
import Categories from '../../components/Categories';
import Comments from '../../components/Comments';
import CommentsForm from '../../components/CommentsForm';
import Navbar from '../../components/Navbar';
import PostDetail from '../../components/PostDetail';
import PostWidget from '../../components/PostWidget';

type Props = {};

export async function getStaticProps({ params }) {}

const PostDetails = (props: Props) => {
  return (
    <>
      <Head>
        <title>Ebenezer - Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto mt-8 mb-8 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail />
            <Author />
            <CommentsForm />
            <Comments />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky lg:top-24">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
