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
    <>
      <textarea
        name="add-comment"
        value={commentContent}
        onChange={(e) => setcommentContent(e.target.value)}
        id="add-comment"
        // cols={30}
        rows={3}
        placeholder="Add a comment ..."
        className="resize-none w-full p-4 border border-neutral-grey-400 text-neutral-blue-400 "
      />
      <div className="flex justify-between items-center space-y-2">
        <img className="w-10" src={currentUser.image.webp} alt="" />
        <SendButton
          sendCommentHandler={sendCommentHandler}
          commentContent={commentContent}
        />
      </div>
    </>
  );
};

export default AddComment;
