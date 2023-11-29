import { useState } from 'react';
import { userType, commentType } from '../types/types';
import SendButton from './buttons/SendButton';

type addCommentPropsType = {
  currentUser: userType;
  setComment: React.Dispatch<React.SetStateAction<commentType[]>>;
};

const AddComment = ({ currentUser, setComment }: addCommentPropsType) => {
  const [commentContent, setcommentContent] = useState('');

  const sendCommentHandler = (commentContent: string) => {
    if (!commentContent || commentContent.trim().length === 0) return;
    setComment((comments: commentType[]) => [
      ...comments,
      {
        id: new Date().getTime(),
        content: commentContent,
        createdAt: `${new Date().getDate()}-${
          new Date().getMonth() + 1
        }-${new Date().getFullYear()}`,
        score: 0,
        user: {
          image: currentUser.image,
          username: currentUser.username,
        },
        replies: [],
      },
    ]);
    setcommentContent('');
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      id="add-comment-id"
      className="grid grid-cols-2 gap-4 items-end bg-white mt-4 px-4 py-2 md:grid md:grid-cols-add-comment-section md:items-start md:gap-4"
    >
      <textarea
        name="add-comment"
        value={commentContent}
        onChange={(e) => setcommentContent(e.target.value)}
        id="add-comment-id"
        // cols={30}
        rows={3}
        placeholder="Add a comment ..."
        className="col-span-2 resize-none w-full p-4 border border-neutral-grey-400 text-neutral-blue-400 md:col-start-2"
      />
      <img
        className="w-10 md:col-start-1 md:row-start-1"
        src={currentUser.image.webp}
        alt=""
      />
      <SendButton
        sendCommentHandler={sendCommentHandler}
        commentContent={commentContent}
      />
    </form>
  );
};

export default AddComment;
