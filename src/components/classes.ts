import { data } from "../data";
import { IComments, Replies, User } from "../interface/dataInterface";
import {
  getDateCreated,
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../utils/utils";
import juliusomoPng from "../assets/avatars/image-juliusomo.png";
import juliusomoWebp from "../assets/avatars/image-juliusomo.webp";
import DisplayComments from "./commentCards";

const userProfile: User = {
  image: {
    png: juliusomoPng,
    webp: juliusomoWebp,
  },
  username: "juliusomo",
};

class Comments {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Replies[];

  static comments: IComments[] = data.comments;

  constructor(content: string) {
    this.id = Comments.comments.length + 1;
    this.content = content;
    this.createdAt = getDateCreated(new Date());
    this.score = 0;
    this.user = userProfile;
    this.replies = [];
  }

  static addComment(newComment: IComments) {
    Comments.comments.push(newComment);
    saveToLocalStorage("comments", Comments.comments);
  }

  static removeComment(commentId: number) {
    Comments.comments = Comments.comments.filter(
      (comment) => comment.id !== commentId,
    );
    saveToLocalStorage("comments", Comments.comments);
  }

  static getComments(): IComments[] {
    return Comments.comments;
  }

  static initializeComments() {
    const comments = loadFromLocalStorage("comments");
    if (comments) {
      Comments.comments = comments;
    } else {
      Comments.comments = data.comments;
    }

    DisplayComments(Comments.comments);
  }

  static getCommentsById(id: number): Comments | undefined {
    const commentData = Comments.comments.find((comm) => comm.id === id);

    if (commentData) {
      const comment = new Comments(commentData.content);
      comment.id = commentData.id;
      comment.createdAt = commentData.createdAt;
      comment.score = commentData.score;
      comment.user = commentData.user;
      comment.replies = commentData.replies;

      return comment;
    }

    return undefined;
  }

  addReply(newReply: Replies) {
    this.replies.push(newReply);
    saveToLocalStorage("comments", Comments.comments);
  }

  removeReply(id: string) {
    if (this.replies) {
      this.replies = this.replies.filter((reply) => reply.id !== id);

      const commentIndex = Comments.comments.findIndex(
        (comment) => comment.id === this.id,
      );

      if (commentIndex !== -1) {
        Comments.comments[commentIndex] = this;
        saveToLocalStorage("comments", Comments.comments);
      }
    }
  }
}

class Reply {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo: string;

  constructor(id: string, content: string, replyingTo: string) {
    this.id = id;
    this.content = content;
    this.createdAt = getDateCreated(new Date());
    this.score = 0;
    this.user = userProfile;
    this.replyingTo = replyingTo;
  }
}

export { Comments, Reply };
