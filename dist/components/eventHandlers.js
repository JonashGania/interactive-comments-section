"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUpdateReplyScore = exports.handleUpdateCommentScore = exports.handleUpdatingReply = exports.handleUpdatingComment = exports.replySubmission = exports.handleDeleteReply = exports.handleDeleteComment = exports.commentSubmission = exports.handleReplyButton = void 0;
const classes_1 = require("./classes");
const commentCards_1 = __importDefault(require("./commentCards"));
const utils_1 = require("../utils/utils");
const handleReplyButton = (button, form, textarea) => {
    button.addEventListener("click", () => {
        form.classList.remove("close");
        textarea.focus();
    });
};
exports.handleReplyButton = handleReplyButton;
const commentSubmission = () => {
    const addCommentForm = (document.querySelector(".add-comment-form"));
    addCommentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const commentTextArea = (document.getElementById("add-comment"));
        const content = commentTextArea.value;
        if (content) {
            const newComment = new classes_1.Comments(content);
            classes_1.Comments.addComment(newComment);
            (0, commentCards_1.default)(classes_1.Comments.getComments());
            addCommentForm.reset();
            console.log(classes_1.Comments.getComments());
        }
    });
};
exports.commentSubmission = commentSubmission;
const replySubmission = (replyTextArea, commentId, replyLength, commentUser) => {
    const replyId = replyLength + 1;
    const content = replyTextArea.value;
    const replyIdDecimal = `${commentId}.${replyId}`;
    const replyingTo = commentUser;
    if (content) {
        const newReply = new classes_1.Reply(replyIdDecimal, content, replyingTo);
        const currentComment = classes_1.Comments.getCommentsById(commentId);
        if (currentComment) {
            currentComment.addReply(newReply);
            (0, commentCards_1.default)(classes_1.Comments.getComments());
        }
    }
};
exports.replySubmission = replySubmission;
const handleDeleteComment = (cancelBtn, deleteBtn, yesDeleteBtn, overlay, modalContainer, commentId) => {
    let commentIdToDelete = null;
    cancelBtn.addEventListener("click", () => {
        overlay.classList.remove("open");
        modalContainer.classList.remove("open");
        commentIdToDelete = null;
    });
    yesDeleteBtn.addEventListener("click", () => {
        if (commentIdToDelete !== null) {
            classes_1.Comments.removeComment(commentIdToDelete);
            (0, commentCards_1.default)(classes_1.Comments.getComments());
        }
        overlay.classList.remove("open");
        modalContainer.classList.remove("open");
        commentIdToDelete = null;
    });
    if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
            commentIdToDelete = commentId;
            overlay.classList.add("open");
            modalContainer.classList.add("open");
        });
    }
};
exports.handleDeleteComment = handleDeleteComment;
const handleDeleteReply = (cancelBtn, deleteBtn, yesDeleteBtn, overlay, modalContainer, commentId, replyId) => {
    let replyIdToDelete = null;
    cancelBtn.addEventListener("click", () => {
        overlay.classList.remove("open");
        modalContainer.classList.remove("open");
        replyIdToDelete = null;
    });
    yesDeleteBtn.addEventListener("click", () => {
        if (replyIdToDelete !== null) {
            const currentComment = classes_1.Comments.getCommentsById(commentId);
            if (currentComment) {
                console.log("Replies before deletion:", currentComment.replies);
                currentComment.removeReply(replyId);
                console.log("Replies after deletion:", currentComment.replies);
                (0, commentCards_1.default)(classes_1.Comments.getComments());
            }
            overlay.classList.remove("open");
            modalContainer.classList.remove("open");
            replyIdToDelete = null;
            console.log(classes_1.Comments.getComments());
        }
    });
    if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
            replyIdToDelete = replyId;
            overlay.classList.add("open");
            modalContainer.classList.add("open");
        });
    }
};
exports.handleDeleteReply = handleDeleteReply;
const handleUpdatingComment = (editBtn, updateBtn, contentContainer, commentContent, commentElement, commentId) => {
    editBtn.addEventListener("click", () => {
        const textarea = (commentElement.querySelector(".update-comment-content"));
        const currentComment = classes_1.Comments.getComments().find((comm) => comm.id === commentId);
        if (currentComment) {
            textarea.value = currentComment.content;
        }
        contentContainer.classList.remove("close");
        commentContent.classList.add("close");
    });
    updateBtn.addEventListener("click", () => {
        const textarea = (commentElement.querySelector(".update-comment-content"));
        const currentComment = classes_1.Comments.getComments().find((comm) => comm.id === commentId);
        const newContent = textarea.value;
        if (currentComment) {
            currentComment.content = newContent;
            (0, utils_1.saveToLocalStorage)("comments", classes_1.Comments.comments);
            (0, commentCards_1.default)(classes_1.Comments.getComments());
        }
        contentContainer.classList.add("remove");
        commentContent.classList.remove("close");
    });
};
exports.handleUpdatingComment = handleUpdatingComment;
const handleUpdatingReply = (editBtn, updateBtn, contentContainer, replyContent, replyElement, commentId, replyId) => {
    editBtn.addEventListener("click", () => {
        const textarea = (replyElement.querySelector(".update-reply-content"));
        const currentComment = classes_1.Comments.getComments().find((comm) => comm.id === commentId);
        if (currentComment) {
            const currentReply = currentComment.replies.find((reply) => reply.id === replyId);
            if (currentReply) {
                textarea.value = currentReply.content;
                contentContainer.classList.remove("close");
                replyContent.classList.add("close");
            }
        }
    });
    updateBtn.addEventListener("click", () => {
        const textarea = (replyElement.querySelector(".update-reply-content"));
        const currentComment = classes_1.Comments.getComments().find((comm) => comm.id === commentId);
        const newContent = textarea.value;
        if (currentComment) {
            const currentReply = currentComment.replies.find((reply) => reply.id === replyId);
            if (currentReply) {
                currentReply.content = newContent;
                (0, utils_1.saveToLocalStorage)("comments", classes_1.Comments.comments);
                (0, commentCards_1.default)(classes_1.Comments.getComments());
                contentContainer.classList.add("remove");
                replyContent.classList.remove("close");
            }
        }
    });
};
exports.handleUpdatingReply = handleUpdatingReply;
const handleUpdateCommentScore = (upvote, downvote, voteScore, commentId) => {
    upvote.addEventListener("click", () => {
        const currentComment = classes_1.Comments.getComments().find((comm) => comm.id === commentId);
        if (currentComment) {
            currentComment.score++;
            voteScore.textContent = `${currentComment.score}`;
            (0, utils_1.saveToLocalStorage)("comments", classes_1.Comments.comments);
            (0, commentCards_1.default)(classes_1.Comments.getComments());
        }
    });
    downvote.addEventListener("click", () => {
        const currentComment = classes_1.Comments.getComments().find((comm) => comm.id === commentId);
        if (currentComment) {
            currentComment.score--;
            voteScore.textContent = `${currentComment.score}`;
            (0, utils_1.saveToLocalStorage)("comments", classes_1.Comments.comments);
            (0, commentCards_1.default)(classes_1.Comments.getComments());
        }
    });
};
exports.handleUpdateCommentScore = handleUpdateCommentScore;
const handleUpdateReplyScore = (upvote, downvote, voteScore, commentId, replyId) => {
    upvote.addEventListener("click", () => {
        const currentComment = classes_1.Comments.getComments().find((comm) => comm.id === commentId);
        if (currentComment) {
            const currentReply = currentComment.replies.find((reply) => reply.id === replyId);
            if (currentReply) {
                currentReply.score++;
                voteScore.textContent = `${currentReply.score}`;
                (0, utils_1.saveToLocalStorage)("comments", classes_1.Comments.comments);
                (0, commentCards_1.default)(classes_1.Comments.getComments());
            }
        }
    });
    downvote.addEventListener("click", () => {
        const currentComment = classes_1.Comments.getComments().find((comm) => comm.id === commentId);
        if (currentComment) {
            const currentReply = currentComment.replies.find((reply) => reply.id === replyId);
            if (currentReply) {
                currentReply.score--;
                voteScore.textContent = `${currentReply.score}`;
                (0, utils_1.saveToLocalStorage)("comments", classes_1.Comments.comments);
                (0, commentCards_1.default)(classes_1.Comments.getComments());
            }
        }
    });
};
exports.handleUpdateReplyScore = handleUpdateReplyScore;
