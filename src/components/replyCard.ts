import UserAvatar from './userAvatar';
import currentUserAvatarPng from '../assets/avatars/image-juliusomo.png';
import currentUserAvatarWebp from '../assets/avatars/image-juliusomo.webp';
import { Replies } from '../interface/dataInterface';
import { data } from '../constant/data';
import {
  handleDeleteReply,
  handleUpdatingReply,
  handleUpdateReplyScore,
  handleReplyButton,
  replySubmission,
} from '../utils/eventHandlers';
import { getDateCreated } from '../utils/utils';

const ReplyCard = (replies: Replies, commentId: number, replyLength: number) => {
  const { id, content, createdAt, score, user, replyingTo } = replies;

  const replyElement = <HTMLLIElement>document.createElement('li');
  replyElement.classList.add('reply-card');
  replyElement.setAttribute('reply-index', `${id}`);
  replyElement.innerHTML = `
    <div class="user-comment-container">
           <div class="vote-container">
             <div class="vote-wrapper">
               <button class="upvote-btn">
                   <svg width="11" height="11" xmlns="http:www.w3.org/2000/svg" class="plus-icon">
                       <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                   </svg>
               </button>
               <span class="vote-score">${score}</span>
               <button class="downvote-btn">
                   <svg width="11" height="3" xmlns="http:www.w3.org/2000/svg" class="minus-icon">
                       <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
                   </svg>
               </button>
             </div>
            
               ${
                 user.username === data.currentUser.username
                   ? `
              <div class="edit-delete-container">
                  <button class="delete-btn">
                      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" class="delete-icon">
                          <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/>
                      </svg>
                      <span class="delete-span">Delete</span>
                  </button>
                  <button class="edit-btn">
                      <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" class="edit-icon">
                          <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/>
                      </svg>
                      <span class="edit-span">Edit</span>
                  </button>
              </div>
            `
                   : `
              <button class="reply-button">
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg" class="reply-icon">
                    <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/>
                </svg>
                <span class="reply-span">Reply</span>
              </button>
            `
               }
          </div>

            <div class="comment-content-container">
                <div class="content-head">
                    ${
                      user.username === data.currentUser.username
                        ? `
                        <div class="comment-head-wrapper">
                            <div class="user-avatar-container"></div>
                            <h3 class="comment-username">${user.username}</h3>
                            <span class="you-span">you</span>
                            <span class="comment-date-created">${getDateCreated(createdAt)}</span>
                        </div>
                        <div class="edit-delete-container">
                            <button class="delete-btn">
                                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" class="delete-icon">
                                    <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/>
                                </svg>
                                <span class="delete-span">Delete</span>
                            </button>
                            <button class="edit-btn">
                                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" class="edit-icon">
                                    <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/>
                                </svg>
                                <span class="edit-span">Edit</span>
                            </button>
                        </div>
                    `
                        : `
                        <div class="comment-head-wrapper">
                            <div class="user-avatar-container"></div>
                            <h3 class="reply-username">${user.username}</h3>
                            <span class="reply-date-created">${getDateCreated(createdAt)}</span>
                        </div>
                        <button class="reply-button">
                            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg" class="reply-icon">
                                <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/>
                            </svg>
                            <span class="reply-span">Reply</span>
                        </button>
                    `
                    } 
                </div>
                <div>
                    <p class="user-reply-content"><span class="mention-user">@${replyingTo}</span> ${content}</p>
                    <div class="update-content-container close">
                      <textarea id="update-reply-content" class="update-reply-content" cols="10" rows="5"></textarea>
                      <button class="update-button">Update</button>
                    </div>
                </div>
            </div>
        </div>
        <form action="" class="reply-form close">
            <div class="user-reply-message">
            <picture>
                <source srcset=${currentUserAvatarWebp} type="image/webp">
                <source srcset=${currentUserAvatarPng} type="image/png">
                <img src=${currentUserAvatarWebp} class="currentUser-reply-avatar" alt="user-avatar">
            </picture>
            <textarea id="add-reply" class="add-reply" cols="10" rows="5"></textarea>
            <button class="submit-reply-btn">Reply</button>
            </div>
        </form>
  `;

  const userAvatar = UserAvatar(user.image.png, user.image.webp);

  const userAvatarContainer = <HTMLDivElement>replyElement.querySelector('.user-avatar-container');
  const deleteBtn = replyElement.querySelectorAll('.delete-btn') as NodeListOf<HTMLButtonElement>;
  const editBtn = replyElement.querySelectorAll('.edit-btn') as NodeListOf<HTMLButtonElement>;
  const updateBtn = <HTMLButtonElement>replyElement.querySelector('.update-button');
  const replyContent = <HTMLParagraphElement>replyElement.querySelector('.user-reply-content');
  const addReply = <HTMLTextAreaElement>replyElement.querySelector('.add-reply');
  const replyForm = <HTMLFormElement>replyElement.querySelector('.reply-form');
  const upvoteBtn = <HTMLButtonElement>replyElement.querySelector('.upvote-btn');
  const downvoteBtn = <HTMLButtonElement>replyElement.querySelector('.downvote-btn');
  const voteScoreSpan = <HTMLSpanElement>replyElement.querySelector('.vote-score');
  const updateContentContainer = <HTMLDivElement>replyElement.querySelector('.update-content-container');
  const replyBtn = replyElement.querySelectorAll('.reply-button') as NodeListOf<HTMLButtonElement>;

  replyForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    replySubmission(addReply, commentId, replyLength, user.username);
    replyForm.classList.add('close');
  });

  if (editBtn) {
    editBtn.forEach((editButton) => {
      handleUpdatingReply(
        editButton,
        updateBtn,
        updateContentContainer,
        replyContent,
        replyElement,
        commentId,
        id,
      );
    });
  }

  if (deleteBtn) {
    deleteBtn.forEach((deleteButton) => {
      handleDeleteReply(deleteButton, commentId, id);
    });
  }

  if (replyBtn) {
    replyBtn.forEach((replyButton) => {
      handleReplyButton(replyButton, replyForm, addReply);
    });
  }

  handleUpdateReplyScore(upvoteBtn, downvoteBtn, voteScoreSpan, commentId, id);

  userAvatarContainer.appendChild(userAvatar);
  return replyElement;
};

export default ReplyCard;
