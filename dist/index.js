"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style/style.css");
const eventHandlers_1 = require("./utils/eventHandlers");
const classes_1 = require("./components/classes");
const initializeLoad = () => {
    classes_1.Comments.initializeComments();
    (0, eventHandlers_1.commentSubmission)();
};
window.onload = initializeLoad;
