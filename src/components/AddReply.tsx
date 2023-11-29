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
  const [replyContent, setreplyContent] = useState(
    `@${comment.user.username}, `
  );

  const replyToCommentHandler = (commentID: number) => {
    if (
      !replyContent ||
      replyContent.trim().length === 0 ||
      (replyContent.startsWith(`@${comment.user.username}, `) &&
        replyContent.slice(comment.user.username.length + 2).trim().length ===
          0)
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

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`grid grid-cols-2 gap-4 items-end bg-white mt-4 px-4 py-2 md:grid-cols-add-comment-section md:items-start md:gap-4 ${
        isReplyModalShown ? 'grid' : 'hidden'
      }`}
      id="add-reply"
    >
      <textarea
        name="add-reply"
        value={replyContent}
        onChange={(e) => setreplyContent(e.target.value)}
        id="add-reply"
        rows={3}
        placeholder=""
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
        <button
          onClick={() => setisReplyModalShown(false)}
          className="font-bold-7 underline text-slate-600"
        >
          Cancle
        </button>
      </div>
    </form>
  );
};

export default AddReply;
