import "./style/style.css";
import CommentCard from "./components/commentCards";
import { data } from "./data";

const initializeLoad = (): void => {
  const userComments = data.comments;
  CommentCard(userComments);
};

window.onload = initializeLoad;
