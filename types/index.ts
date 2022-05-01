export type Author = {
  about: string;
  name: string;
  id: string;
  photo: { url: string | null };
};
export type TextNode = {
  text: string[];
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};
export type ImgNode = {
  title: string;
  width: string;
  height: string;
  src: string;
};
export type Comment = {
  name: string;
  email: string;
  comment: string;
  slug: string;
  createdAt: string;
};

export type TextTypes =
  | 'paragraph'
  | 'heading-three'
  | 'heading-four'
  | 'image';
export type ContentNode = {
  children: TextNode[];
  type: TextTypes;
};
export type Content = {
  raw: { children: ContentNode[] };
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
  content: Content;
};
export type PostNode = {
  node: PostItem;
};
export type PostsList = PostNode[];
