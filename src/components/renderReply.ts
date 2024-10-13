import { Replies } from '../interface/dataInterface';
import { sortedRepliesByScore } from '../utils/utils';
import ReplyCard from './replyCard';

const DisplayReplies = (replies: Replies[], commentId: number, replyLength: number) => {
  const replyLists = <HTMLUListElement>document.createElement('ul');
  replyLists.classList.add('reply-lists');
  replyLists.innerHTML = ' ';

  const sortedReplies = sortedRepliesByScore(replies);
  sortedReplies.forEach((reply) => {
    const replyElement = ReplyCard(reply, commentId, replyLength);
    replyLists.appendChild(replyElement);
  });

  return replyLists;
};

export default DisplayReplies;
