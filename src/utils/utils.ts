import { formatDistanceToNow } from "date-fns";
import { IComments } from "../interface/dataInterface";

const getDateCreated = (dateCreated: Date): string => {
  const formattedDate = formatDistanceToNow(dateCreated, { addSuffix: true });
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

export { getDateCreated, saveToLocalStorage, loadFromLocalStorage };
