export type Author = {
  about: string;
  name: string;
  id: string;
  photo: string | null;
};
export type Categories = string[];
export type PostItem = {
  createdAt: string;
  slug: string;
  abstract: string;
  author: Author;
  categories: Categories;
  title: string;
};
export type PostNode = {
  node: PostItem;
};
export type PostsList = PostNode[];
