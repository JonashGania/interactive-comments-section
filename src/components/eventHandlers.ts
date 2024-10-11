import { Comments, Reply } from "./classes";
import DisplayComments from "./commentCards";
import { saveToLocalStorage } from "../utils/utils";

const handleReplyButton = (
  button: HTMLButtonElement,
  form: HTMLFormElement,
  textarea: HTMLTextAreaElement,
  username: string,
) => {
  button.addEventListener("click", () => {
    form.classList.remove("close");

    if (!textarea.value) {
      textarea.value = `@${username} `;
    }
    textarea.focus();
  });
};

const commentSubmission = () => {
  const addCommentForm = <HTMLFormElement>(
    document.querySelector(".add-comment-form")
  );
  addCommentForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const commentTextArea = <HTMLTextAreaElement>(
      document.getElementById("add-comment")
    );
    const content = commentTextArea.value;

    if (content) {
      const newComment = new Comments(content);

      Comments.addComment(newComment);
      DisplayComments(Comments.getComments());
      addCommentForm.reset();
      console.log(Comments.getComments());
    }
  });
};

const replySubmission = (
  replyTextArea: HTMLTextAreaElement,
  commentId: number,
  replyLength: number,
  commentUser: string,
) => {
  const replyId = replyLength + 1;

  const content = replyTextArea.value;
  const replyIdDecimal = `${commentId}.${replyId}`;
  const replyingTo = commentUser;

  if (content) {
    const newReply = new Reply(replyIdDecimal, content, replyingTo);
    const currentComment = Comments.getCommentsById(commentId);
    if (currentComment) {
      (currentComment as Comments).addReply(newReply);
      DisplayComments(Comments.getComments());
    }
  }
};

const handleDeleteComment = (
  cancelBtn: HTMLButtonElement,
  deleteBtn: HTMLButtonElement,
  yesDeleteBtn: HTMLButtonElement,
  overlay: HTMLDivElement,
  modalContainer: HTMLDivElement,
  commentId: number,
) => {
  let commentIdToDelete: number | null = null;

  cancelBtn.addEventListener("click", () => {
    overlay.classList.remove("open");
    modalContainer.classList.remove("open");
    commentIdToDelete = null;
  });

  yesDeleteBtn.addEventListener("click", () => {
    if (commentIdToDelete !== null) {
      Comments.removeComment(commentIdToDelete);
      DisplayComments(Comments.getComments());
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

const handleDeleteReply = (
  cancelBtn: HTMLButtonElement,
  deleteBtn: HTMLButtonElement,
  yesDeleteBtn: HTMLButtonElement,
  overlay: HTMLDivElement,
  modalContainer: HTMLDivElement,
  commentId: number,
  replyId: string,
) => {
  let replyIdToDelete: string | null = null;

  cancelBtn.addEventListener("click", () => {
    overlay.classList.remove("open");
    modalContainer.classList.remove("open");
    replyIdToDelete = null;
  });

  yesDeleteBtn.addEventListener("click", () => {
    if (replyIdToDelete !== null) {
      const currentComment = Comments.getCommentsById(commentId);

      if (currentComment) {
        console.log("Replies before deletion:", currentComment.replies);
        currentComment.removeReply(replyId);
        console.log("Replies after deletion:", currentComment.replies);
        DisplayComments(Comments.getComments());
      }
      overlay.classList.remove("open");
      modalContainer.classList.remove("open");
      replyIdToDelete = null;
      console.log(Comments.getComments());
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

const handleUpdatingComment = (
  editBtn: HTMLButtonElement,
  updateBtn: HTMLButtonElement,
  contentContainer: HTMLDivElement,
  commentContent: HTMLParagraphElement,
  commentElement: HTMLLIElement,
  commentId: number,
) => {
  editBtn.addEventListener("click", () => {
    const textarea = <HTMLTextAreaElement>(
      commentElement.querySelector(".update-comment-content")
    );
    const currentComment = Comments.getComments().find(
      (comm) => comm.id === commentId,
    );

    if (currentComment) {
      textarea.value = currentComment.content;
    }

    contentContainer.classList.remove("close");
    commentContent.classList.add("close");
  });

  updateBtn.addEventListener("click", () => {
    const textarea = <HTMLTextAreaElement>(
      commentElement.querySelector(".update-comment-content")
    );
    const currentComment = Comments.getComments().find(
      (comm) => comm.id === commentId,
    );
    const newContent = textarea.value;

    if (currentComment) {
      currentComment.content = newContent;
      saveToLocalStorage("comments", Comments.comments);
      DisplayComments(Comments.getComments());
    }

    contentContainer.classList.add("remove");
    commentContent.classList.remove("close");
  });
};

export {
  handleReplyButton,
  commentSubmission,
  handleDeleteComment,
  handleDeleteReply,
  replySubmission,
  handleUpdatingComment,
};
