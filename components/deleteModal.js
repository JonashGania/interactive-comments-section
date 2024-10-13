"use strict";
// import { Comments } from "./classes";
// import DisplayComments from "./commentCards";
// const DeleteModal = (commentId: ) => {
//     const body = <HTMLElement>document.querySelector('body');
//     const overlay = document.createElement("div");
//     const modalContainer = document.createElement("div");
//     overlay.classList.add('modal-overlay');
//     modalContainer.classList.add('delete-modal-container');
//     modalContainer.innerHTML = `
//         <h2>Delete comment</h2>
//         <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
//         <div class="cancel-delete-container">
//             <button class="cancel-delete">NO, CANCEL</button>
//             <button class="yes-delete">YES, DELETE</button>
//         </div>
//     `
//     const cancelBtn = <HTMLButtonElement>modalContainer.querySelector('.cancel-delete');
//     const deleteBtn = <HTMLButtonElement>modalContainer.querySelector('.yes-delete');
//     cancelBtn.addEventListener('click', () => {
//         overlay.classList.remove('open');
//         modalContainer.classList.remove('open');
//     })
//     deleteBtn.addEventListener('click', () => {
//         Comments.removeComment(commentId);
//         DisplayComments(Comments.getComments());
//         overlay.classList.remove('open');
//         modalContainer.classList.remove('open');
//     })
//     overlay.appendChild(modalContainer);
//     body.appendChild(overlay);
// }
// export default DeleteModal
