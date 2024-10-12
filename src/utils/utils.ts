import { formatDistanceToNow } from 'date-fns';
import { IComments, Replies } from '../interface/dataInterface';

const getDateCreated = (dateCreated: string): string => {
  const parsedDate = new Date(dateCreated);

  if (isNaN(parsedDate.getTime())) {
    return 'Invalid Date';
  }

  const formattedDate = formatDistanceToNow(parsedDate, { addSuffix: true });
  return formattedDate;
};

const saveToLocalStorage = (key: string, comments: IComments[]) => {
  const serializedData = JSON.stringify(comments);
  localStorage.setItem(key, serializedData);
};

const loadFromLocalStorage = (key: string) => {
  const savedData = localStorage.getItem(key);
  if (savedData) {
    return JSON.parse(savedData);
  }

  return null;
};

const sortCommentsByScore = (comments: IComments[]) => {
  return comments.sort((a, b) => b.score - a.score);
};
const sortedRepliesByScore = (replies: Replies[]) => {
  return replies.sort((a, b) => b.score - a.score);
};

export {
  getDateCreated,
  saveToLocalStorage,
  loadFromLocalStorage,
  sortCommentsByScore,
  sortedRepliesByScore,
};
