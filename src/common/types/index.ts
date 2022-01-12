export type ISubreddit = {
  name: string;
  tag: string;
  imageUrl: string;
};

export type IThread = {
  id: number;
  author: string;
  title: string;
  content: string;
  upvotes: number;
  comments: IComment[];
};

export type IComment = {
  id: number;
  author: string;
  imageUrl: string;
  content: string;
  upvotes: number;
};

export type IVote = {
  direction: 'vertical' | 'horizontal';
  upvotes: number;
};
