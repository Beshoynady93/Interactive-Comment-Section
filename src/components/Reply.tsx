import { commentType, replyType, userType } from '../types/types';
import DeleteReplyModal from './DeleteReplyModal';
import { useState } from 'react';
import EditReplyModal from './EditReplyModal';

type replyPropsType = {
  reply: replyType;
  currentUser: userType;
  setReplies: React.Dispatch<React.SetStateAction<replyType[] | undefined>>;
  comments: commentType[];
  setcomments: React.Dispatch<React.SetStateAction<commentType[]>>;
  comment: commentType;
  setisReplyModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  replies: replyType[];
};

const Reply = ({
  reply,
  currentUser,
  setReplies,
  comments,
  setcomments,
  comment,
  setisReplyModalShown,
}: replyPropsType) => {
  const [isDeleteReplyModalShown, setIsDeleteReplyModalShown] = useState(false);
  const [isEditReplyModalShown, setIsEditReplyModalShown] = useState(false);
  const [replyScore] = useState(reply.score);

  const incrementReplyScore = (replyID: number) => {
    const commentID = comment.id;
    const commentIndex = comments.findIndex(
      (comment) => comment.id === commentID
    );

    const replyIndex = comments[commentIndex].replies?.findIndex(
      (reply) => reply.id === replyID
    );

    const newComments = [...comments];

    if (replyIndex === undefined) return;

    if (!newComments[commentIndex].replies) return;

    if (newComments[commentIndex].replies[replyIndex].score >= replyScore + 1)
      return;

    newComments[commentIndex].replies[replyIndex].score++;

    setcomments(newComments);
  };

  const decrementReplyScore = (replyID: number) => {
    const commentID = comment.id;

    const commentIndex = comments.findIndex(
      (comment) => comment.id === commentID
    );

    const replyIndex = comments[commentIndex].replies?.findIndex(
      (reply) => reply.id === replyID
    );

    const newComments = [...comments];

    if (replyIndex === undefined) return;
    if (newComments[commentIndex].replies === undefined) return;

    if (newComments[commentIndex].replies[replyIndex].score <= replyScore - 1)
      return;

    newComments[commentIndex].replies[replyIndex].score--;

    setcomments(newComments);
  };

  const deleteCommentHandler = () => {
    setIsDeleteReplyModalShown(true);
  };

  return (
    <>
      <div className="col-span-2 bg-white p-4 rounded-md grid grid-cols-2 gap-y-4 shadow-sm sm:ml-4 md:grid-cols-comments-replies-md md:grid-rows-2 md:gap-4">
        <div className="flex gap-4 items-center col-span-2 md:col-start-2">
          <img className="w-10" src={reply.user.image.webp} alt="" />
          <span className="text-neutral-blue-400 font-bold-7">
            {reply.user.username}
          </span>
          {currentUser.username === reply.user.username ? (
            <span className="bg-primary-blue-400 text-white text-xs px-2 font-medium">
              YOU
            </span>
          ) : (
            ''
          )}
          <span className="text-neutral-blue-200">{reply.createdAt}</span>
        </div>

        <div className="text-neutral-blue-200 col-span-2 md:col-start-2 md:col-span-3">
          {reply.content}
        </div>

        <div className="flex items-center md:flex-col md:justify-between bg-neutral-grey-200 w-max px-4 py-2 rounded-md md:col-start-1 md:row-start-1 md:row-span-2 md:py-8 md:px-1 md:rounded-full">
          <button className="p-2" onClick={() => incrementReplyScore(reply.id)}>
            <img src="./images/icon-plus.svg" alt="" />
          </button>
          <span className="text-primary-blue-400 font-bold-7 mx-2">
            {reply.score}
          </span>
          <button className="p-2" onClick={() => decrementReplyScore(reply.id)}>
            <img src="./images/icon-minus.svg" alt="" />
          </button>
        </div>

        {reply.user.username === currentUser.username ? (
          <div className="flex items-center gap-4 sm:justify-end md:col-start-4 md:row-start-1">
            <button
              onClick={deleteCommentHandler}
              className="flex items-center gap-2 font-bold-7 hover:opacity-50 transition-colors duration-200"
            >
              <img src="./images/icon-delete.svg" alt="" />
              <span className="text-primary-red-400">Delete</span>
            </button>
            <button
              onClick={() => setIsEditReplyModalShown(true)}
              className="flex items-center gap-2 font-bold-7 hover:opacity-50 transition-colors duration-200"
            >
              <img src="./images/icon-edit.svg" alt="" />
              <span className="text-primary-blue-400">Edit</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-end hover:opacity-50 md:col-start-4 md:row-start-1">
            <button
              onClick={() => setisReplyModalShown(true)}
              className="flex items-center gap-2 font-bold-7"
            >
              <img src="./images/icon-reply.svg" alt="" />
              <span className=" text-primary-blue-400">Reply</span>
            </button>
          </div>
        )}
      </div>

      <DeleteReplyModal
        replyIdToDelete={reply.id}
        isDeleteReplyModalShown={isDeleteReplyModalShown}
        setIsDeleteReplyModalShown={setIsDeleteReplyModalShown}
        setReplies={setReplies}
        comments={comments}
        setcomments={setcomments}
        comment={comment}
      />

      <EditReplyModal
        isEditReplyModalShown={isEditReplyModalShown}
        setIsEditReplyModalShown={setIsEditReplyModalShown}
        setReplies={setReplies}
        reply={reply}
        currentUser={currentUser}
      />
    </>
  );
};

export default Reply;
