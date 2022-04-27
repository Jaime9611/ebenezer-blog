export type Author = {
  about: string;
  name: string;
  id: string;
  photo: { url: string | null };
};
export type Categories = { name: string; slug: string }[];
export type PostItem = {
  createdAt: string;
  slug: string;
  abstract: string;
  author: Author;
  categories: Categories;
  title: string;
  featuredImage: { url: string };
};
export type PostNode = {
  node: PostItem;
};
export type PostsList = PostNode[];
