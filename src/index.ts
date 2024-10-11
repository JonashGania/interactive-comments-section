import "./style/style.css";
import { commentSubmission } from "./components/eventHandlers";
import { Comments } from "./components/classes";

const initializeLoad = (): void => {
  Comments.initializeComments();
  commentSubmission();
};

window.onload = initializeLoad;
