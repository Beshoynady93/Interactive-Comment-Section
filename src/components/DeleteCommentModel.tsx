import { commentType } from '../types/types';

type deleteCommentModalType = {
  isDeleteCommentModalShown: boolean;
  setisDeleteCommentModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  commentID: number;
  setcomments: React.Dispatch<React.SetStateAction<commentType[]>>;
};

const DeleteCommentModal = ({
  isDeleteCommentModalShown,
  setisDeleteCommentModalShown,
  commentID,
  setcomments,
}: deleteCommentModalType) => {
  const cancelDeleteCommentHalndler = () => {
    setisDeleteCommentModalShown(false);
  };

  const deleteCommentHandler = () => {
    setcomments((comments) =>
      comments.filter((comment) => comment.id !== commentID)
    );

    setisDeleteCommentModalShown(false);
  };

  return (
    <div
      className={`w-full h-full top-0 left-0 bg-black bg-opacity-40 fixed z-10  items-center justify-center ${
        isDeleteCommentModalShown ? 'flex' : 'hidden'
      }`}
    >
      <div className="bg-white w-11/12 px-8 py-4 rounded-md space-y-2 max-w-xs">
        <h3 className="text-neutral-blue-400 font-bold-7">Delete comment</h3>
        <p className="text-neutral-blue-200">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={cancelDeleteCommentHalndler}
            className="bg-neutral-blue-200 px-4 py-2 rounded-md text-white font-medium text-sm hover:opacity-50 transition-colors duration-200"
          >
            NO, CANCEL
          </button>
          <button
            onClick={deleteCommentHandler}
            className="bg-primary-red-400 px-4 py-2 rounded-md text-white font-medium text-sm hover:opacity-50 transition-colors duration-200"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCommentModal;
