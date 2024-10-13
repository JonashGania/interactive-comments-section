"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortedRepliesByScore = exports.sortCommentsByScore = exports.loadFromLocalStorage = exports.saveToLocalStorage = exports.getDateCreated = void 0;
const date_fns_1 = require("date-fns");
const getDateCreated = (dateCreated) => {
    const parsedDate = new Date(dateCreated);
    if (isNaN(parsedDate.getTime())) {
        return "Invalid Date";
    }
    const formattedDate = (0, date_fns_1.formatDistanceToNow)(parsedDate, { addSuffix: true });
    return formattedDate;
};
exports.getDateCreated = getDateCreated;
const saveToLocalStorage = (key, comments) => {
    const serializedData = JSON.stringify(comments);
    localStorage.setItem(key, serializedData);
};
exports.saveToLocalStorage = saveToLocalStorage;
const loadFromLocalStorage = (key) => {
    const savedData = localStorage.getItem(key);
    if (savedData) {
        return JSON.parse(savedData);
    }
    return null;
};
exports.loadFromLocalStorage = loadFromLocalStorage;
const sortCommentsByScore = (comments) => {
    return comments.sort((a, b) => b.score - a.score);
};
exports.sortCommentsByScore = sortCommentsByScore;
const sortedRepliesByScore = (replies) => {
    return replies.sort((a, b) => b.score - a.score);
};
exports.sortedRepliesByScore = sortedRepliesByScore;
