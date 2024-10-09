interface User {
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

export interface Replies extends UserData {
  replyingTo: string;
}

export interface Comments extends UserData {
  replies: Replies[];
}
