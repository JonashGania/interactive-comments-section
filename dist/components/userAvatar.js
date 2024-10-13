"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserAvatar = (pngAvatar, webAvatar) => {
    const pictureElement = document.createElement("picture");
    pictureElement.innerHTML = `
        <source srcset="${webAvatar}" type="image/webp">
        <source srcset="${pngAvatar}" type="image/png">
        <img src="${webAvatar}" class="user-avatar" alt="user-avatar">
    `;
    return pictureElement;
};
exports.default = UserAvatar;
