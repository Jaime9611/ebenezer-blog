import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import Author from '../../components/Author';
import Categories from '../../components/Categories';
import Comments from '../../components/Comments';
import CommentsForm from '../../components/CommentsForm';
import Navbar from '../../components/Navbar';
import PostDetail from '../../components/PostDetail';
import PostWidget from '../../components/PostWidget';
import { getPostDetails, getPosts } from '../../services';
import { PostItem } from '../../types';

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const data = await getPostDetails(params?.slug as string);

  return { props: { post: data } };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}

type Props = {
  post: PostItem;
};

const PostDetails = ({ post }: Props) => {
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
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky lg:top-24">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
