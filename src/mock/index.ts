import { IComment, ISubreddit, IThread } from '../common/types';

export const MOCK_SUBREDDIT: ISubreddit = {
  imageUrl:
    'https://styles.redditmedia.com/t5_2mz580/styles/communityIcon_91qyk88t3y051.jpg?width=256&format=pjpg&s=296a830c026568cc5204a3bdd9ebd147be1cb3cf',
  name: 'smurfdomuca',
  tag: 'r/smurfdomuca',
};

export const MOCK_COMMENT: IComment = {
  id: 1,
  author: 'SlimGust',
  imageUrl:
    'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto at consequatur cum, debitis dolores ducimus est, hic illum, minus nesciunt optio quod similique vel velit? Accusantium necessitatibus porro suscipit?',
  upvotes: 456,
};

export const MOCK_COMMENT_2: IComment = {
  id: 2,
  author: 'SlimGust',
  imageUrl:
    'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto at consequatur cum, debitis dolores ducimus est, hic illum, minus nesciunt optio quod similique vel velit? Accusantium necessitatibus porro suscipit?',
  upvotes: 225,
};

export const MOCK_THREAD: IThread = {
  id: 1,
  author: 'SlimGust',
  title: 'O PANO DE CHÃO COM CARA DO MUQUINHA ESTÁ VINDO',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa cumque excepturi expedita harum iusto minima minus nobis non nostrum possimus ratione repudiandae ut velit. Adipisci praesentium provident quisquam!',
  upvotes: 556,
  comments: [MOCK_COMMENT, MOCK_COMMENT_2],
};

export const MOCK_THREAD_2: IThread = {
  id: 2,
  author: 'SlimGust',
  title: 'O PANO DE CHÃO COM CARA DO MUQUINHA CHEGOU',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa cumque excepturi expedita harum iusto minima minus nobis non nostrum possimus ratione repudiandae ut velit. Adipisci praesentium provident quisquam!',
  upvotes: 772,
  comments: [MOCK_COMMENT, MOCK_COMMENT_2],
};
