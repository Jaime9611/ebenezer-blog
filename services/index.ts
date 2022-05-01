import { gql, request } from 'graphql-request';
import { Categories, Comment, PostItem, PostNode } from '../types';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';

export const getPosts = async (): Promise<PostNode[]> => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              about
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            categories {
              name
              slug
            }
            abstract
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug: string): Promise<PostItem> => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          about
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        categories {
          name
          slug
        }
        abstract
        featuredImage {
          url
        }
        content {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getRecentPosts = async (): Promise<PostItem[]> => {
  const query = gql`
    query GetPostDetails() {
      posts(orderBy: createdAt_ASC last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getSimilarPosts = async (
  categories: string[],
  slug: string
): Promise<PostItem[]> => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { categories, slug });

  return result.posts;
};

export const getCategories = async (): Promise<Categories> => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const submitComment = async (obj: Comment) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug: string): Promise<Comment[]> => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};
