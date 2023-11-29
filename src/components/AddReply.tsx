import { commentType, userType } from '../types/types';
import { useState } from 'react';

type AddReplyPropsType = {
  comment: commentType;
  currentUser: userType;
  isReplyModalShown: boolean;
  setisReplyModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  setcomments: React.Dispatch<React.SetStateAction<commentType[]>>;
  comments: commentType[];
};

const AddReply = ({
  comment,
  currentUser,
  isReplyModalShown,
  setisReplyModalShown,
  setcomments,
  comments,
}: AddReplyPropsType) => {
  const [replyContent, setreplyContent] = useState('');

  const replyToCommentHandler = (commentID: number) => {
    if (!replyContent || replyContent.trim().length === 0) return;

    const commentToReplyIndex = comments.findIndex(
      (comment) => comment.id === commentID
    );

    const newReply = {
      id: new Date().getTime(),
      content: replyContent,
      createdAt: `${new Date().getDate()}-${
        new Date().getMonth() + 1
      }-${new Date().getFullYear()}`,
      score: 4,
      replyingTo: comment.user.username,
      user: currentUser,
    };

    const newComments = [...comments];
    newComments[commentToReplyIndex].replies?.push(newReply);

    setcomments(newComments);
    setreplyContent('');
    setisReplyModalShown(false);
  };

  return (
    <div
      className={`grid grid-cols-2 gap-4 items-end bg-white mt-4 px-4 py-2 md:grid-cols-add-comment-section md:items-start md:gap-4 ${
        isReplyModalShown ? 'grid' : 'hidden'
      }`}
    >
      <textarea
        name="add-comment"
        value={replyContent}
        onChange={(e) => setreplyContent(e.target.value)}
        id="add-comment"
        rows={3}
        placeholder="Add a reply ..."
        className="col-span-2 resize-none w-full p-4 border border-neutral-grey-400 text-neutral-blue-400 md:col-start-2 md:row-start-1 md:col-span-1"
      />
      <img
        className="w-10 md:col-start-1 md:row-start-1"
        src={currentUser.image.webp}
        alt=""
      />

      <div className="flex flex-col items-center justify-between self-stretch md:col-start-3 md:row-start-1">
        <button
          className="bg-primary-blue-400 text-white font-medium px-4 py-2 rounded-md hover:opacity-50"
          onClick={() => replyToCommentHandler(comment.id)}
        >
          REPLY
        </button>
        <button onClick={() => setisReplyModalShown(false)}>Cancle</button>
      </div>
    </div>
  );
};

export default AddReply;
