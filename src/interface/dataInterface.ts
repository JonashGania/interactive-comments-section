export interface User {
  image: { png: string; webp: string };
  username: string;
}

interface UserData {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
}

export interface Replies {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo: string;
}

export interface IComments extends UserData {
  replies: Replies[];
}
