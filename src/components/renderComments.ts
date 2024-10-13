import { IComments } from '../interface/dataInterface';
import { sortCommentsByScore } from '../utils/utils';
import commentCard from './commentCard';

const DisplayComments = (comments: IComments[]) => {
  const commentsList = <HTMLUListElement>document.querySelector('.comments-list');
  if (!commentsList) return;

  commentsList.innerHTML = ' ';
  const sortedComments = sortCommentsByScore(comments);

  sortedComments.forEach((comment) => {
    const commentElement = commentCard(comment);
    commentsList.appendChild(commentElement);
  });
};

export default DisplayComments;
