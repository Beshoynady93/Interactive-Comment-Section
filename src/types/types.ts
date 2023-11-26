export type userType = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

export type replyType = commentType & {
  replyingTo: string;
};

export type commentType = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: userType;
  replies?: replyType[];
};
