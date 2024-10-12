const UserAvatar = (pngAvatar: string, webAvatar: string) => {
  const pictureElement = document.createElement('picture');
  pictureElement.innerHTML = `
        <source srcset="${webAvatar}" type="image/webp">
        <source srcset="${pngAvatar}" type="image/png">
        <img src="${webAvatar}" class="user-avatar" alt="user-avatar">
    `;

  return pictureElement;
};

export default UserAvatar;
