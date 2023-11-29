import { commentType, replyType } from '../types/types';

type deleteReplyModalType = {
  isDeleteReplyModalShown: boolean;
  setIsDeleteReplyModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  setReplies: React.Dispatch<React.SetStateAction<replyType[] | undefined>>;
  replyIdToDelete: number | undefined;
  comments: commentType[];
  setcomments: React.Dispatch<React.SetStateAction<commentType[]>>;
  comment: commentType;
};

const DeleteReplyModal = ({
  setIsDeleteReplyModalShown,
  isDeleteReplyModalShown,
  replyIdToDelete,
  comments,
  setcomments,
  comment,
}: deleteReplyModalType) => {
  const cancelDeleteCommentHalndler = () => {
    setIsDeleteReplyModalShown(false);
  };

  const deleteReplyHandler = () => {
    const commentID = comment.id;
    const commentIndex = comments.findIndex(
      (comment) => comment.id === commentID
    );

    if (!comments[commentIndex].replies) return;

    const replyIndex = comments[commentIndex].replies?.findIndex(
      (reply) => reply.id === replyIdToDelete
    );

    if (replyIndex === undefined) return;

    const newComments = [...comments];
    newComments[commentIndex].replies?.splice(replyIndex, 1);
    setcomments(newComments);

    setIsDeleteReplyModalShown(false);
  };

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 bg-black bg-opacity-40 z-10  items-center justify-center ${
        isDeleteReplyModalShown ? 'flex' : 'hidden'
      }`}
    >
      <div className="bg-white w-11/12 px-8 py-6 rounded-md space-y-2 max-w-xs">
        <h3 className="text-neutral-blue-400 font-bold-7">Delete reply</h3>
        <p className="text-neutral-blue-200">
          Are you sure you want to delete this reply? This will remove the reply
          and can't be undone
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={cancelDeleteCommentHalndler}
            className="bg-neutral-blue-200 px-4 py-2 rounded-md text-white font-medium text-sm hover:opacity-50 transition-colors duration-200"
          >
            NO, CANCEL
          </button>
          <button
            onClick={deleteReplyHandler}
            className="bg-primary-red-400 px-4 py-2 rounded-md text-white font-medium text-sm hover:opacity-50 transition-colors duration-200"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteReplyModal;
