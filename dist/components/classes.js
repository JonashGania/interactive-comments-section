"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reply = exports.Comments = void 0;
const data_1 = require("../constant/data");
const utils_1 = require("../utils/utils");
const image_juliusomo_png_1 = __importDefault(require("../assets/avatars/image-juliusomo.png"));
const image_juliusomo_webp_1 = __importDefault(require("../assets/avatars/image-juliusomo.webp"));
const commentCards_1 = __importDefault(require("./commentCards"));
const userProfile = {
    image: {
        png: image_juliusomo_png_1.default,
        webp: image_juliusomo_webp_1.default,
    },
    username: "juliusomo",
};
class Comments {
    constructor(content) {
        this.id = Comments.comments.length + 1;
        this.content = content;
        this.createdAt = new Date().toISOString();
        this.score = 0;
        this.user = userProfile;
        this.replies = [];
    }
    static addComment(newComment) {
        Comments.comments.push(newComment);
        (0, utils_1.saveToLocalStorage)("comments", Comments.comments);
    }
    static removeComment(commentId) {
        Comments.comments = Comments.comments.filter((comment) => comment.id !== commentId);
        (0, utils_1.saveToLocalStorage)("comments", Comments.comments);
    }
    static getComments() {
        return Comments.comments;
    }
    static initializeComments() {
        const comments = (0, utils_1.loadFromLocalStorage)("comments");
        if (comments) {
            Comments.comments = comments;
        }
        else {
            Comments.comments = data_1.data.comments;
        }
        (0, commentCards_1.default)(Comments.comments);
    }
    static getCommentsById(id) {
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
    addReply(newReply) {
        this.replies.push(newReply);
        (0, utils_1.saveToLocalStorage)("comments", Comments.comments);
    }
    removeReply(id) {
        if (this.replies) {
            this.replies = this.replies.filter((reply) => reply.id !== id);
            const commentIndex = Comments.comments.findIndex((comment) => comment.id === this.id);
            if (commentIndex !== -1) {
                Comments.comments[commentIndex] = this;
                (0, utils_1.saveToLocalStorage)("comments", Comments.comments);
            }
        }
    }
}
exports.Comments = Comments;
Comments.comments = data_1.data.comments;
class Reply {
    constructor(id, content, replyingTo) {
        this.id = id;
        this.content = content;
        this.createdAt = new Date().toISOString();
        this.score = 0;
        this.user = userProfile;
        this.replyingTo = replyingTo;
    }
}
exports.Reply = Reply;
