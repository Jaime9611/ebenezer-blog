import React, { useEffect, useState } from 'react';

import moment from 'moment';
import { PostItem } from '../../types';
import { getRecentPosts, getSimilarPosts } from '../../services';
import Link from 'next/link';

type Props = {
  categories: [];
  slug: string;
};

const PostWidget = ({ categories, slug }: Props) => {
  const [relatedPosts, setRelatedPosts] = useState<PostItem[] | null>(null);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Historias Relacionadas' : 'Historias Recientes'}
      </h3>
      {relatedPosts?.map((post) => (
        <div key={post.title} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              height="60px"
              width="60px"
              alt={post.title}
              className="rounded-full object-cover align-middle"
            />
          </div>
          <div className="ml-4 flex-row">
            <p className="font-xs text-gray-500">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`post/${post.slug}`}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
