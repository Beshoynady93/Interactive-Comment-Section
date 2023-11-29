# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![](./src/assets/Screenshot%202023-11-29%20at%2018-14-12%20Vite%20React%20TS.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- Typescript
- [React](https://reactjs.org/) - JS library

### What I learned

One of the main challenges in this app was to manipulate an array that is in a state that is an array.

Code example:

```js
const replyToCommentHandler = (commentID: number) => {
  if (
    !replyContent ||
    replyContent.trim().length === 0 ||
    (replyContent.startsWith(`@${comment.user.username}, `) &&
      replyContent.slice(comment.user.username.length + 2).trim().length === 0)
  )
    return;

  const commentToReplyIndex = comments.findIndex(
    (comment) => comment.id === commentID
  );

  const newReply = {
    id: new Date().getTime(),
    content: replyContent,
    createdAt: `${new Date().getDate()}-${
      new Date().getMonth() + 1
    }-${new Date().getFullYear()}`,
    score: 0,
    replyingTo: comment.user.username,
    user: currentUser,
  };

  const newComments = [...comments];
  newComments[commentToReplyIndex].replies?.push(newReply);

  setcomments(newComments);
  setreplyContent(`@${comment.user.username}, `);
  setisReplyModalShown(false);
};
```

## Author

- Frontend Mentor - [@Beshoynady93](https://www.frontendmentor.io/profile/Beshoynady93)
- Twitter - [@BeshoyNN](https://www.twitter.com/BeshoyNN)
