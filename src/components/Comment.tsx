import { commentType, userType } from '../types/types';
import EditCommentModal from './EditCommentModal';
import Reply from './Reply';
import { useState } from 'react';

type commentPropsType = {
  comment: commentType;
  currentUser: userType;
  setisDeleteCommentModalShown: React.Dispatch<React.SetStateAction<boolean>>;
};

const Comment = ({
  comment,
  currentUser,
  setisDeleteCommentModalShown,
}: commentPropsType) => {
  const [isEditCommentModalShown, setisEditCommentModalShown] = useState(false);

  const deleteCommentHandler = () => {
    setisDeleteCommentModalShown(true);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md grid grid-cols-2 gap-y-4 shadow-sm">
        <div className="flex gap-4 items-center col-span-2">
          <img className="w-10" src={comment.user.image.webp} alt="" />
          <span className="text-neutral-blue-400 font-bold-7">
            {comment.user.username}
          </span>
          {currentUser.username === comment.user.username ? (
            <span className="bg-primary-blue-400 text-white text-xs px-2 font-medium">
              YOU
            </span>
          ) : (
            ''
          )}
          <span className="text-neutral-blue-200">{comment.createdAt}</span>
        </div>

        <div className="text-neutral-blue-200 col-span-2">
          {comment.content}
        </div>

        <div className="flex items-center bg-neutral-grey-200 w-max px-4 py-2 rounded-md">
          <button>
            <img src="./images/icon-plus.svg" alt="" />
          </button>
          <span className="text-primary-blue-400 font-bold-7 mx-2">
            {comment.score}
          </span>
          <button>
            <img src="./images/icon-minus.svg" alt="" />
          </button>
        </div>

        {comment.user.username === currentUser.username ? (
          <div className="flex items-center gap-4">
            <button
              onClick={deleteCommentHandler}
              className="flex items-center gap-2 font-bold-7"
            >
              <img src="./images/icon-delete.svg" alt="" />
              <span className="text-primary-red-400">Delete</span>
            </button>
            <button
              onClick={() => setisEditCommentModalShown(true)}
              className="flex items-center gap-2 font-bold-7"
            >
              <img src="./images/icon-edit.svg" alt="" />
              <span className="text-primary-blue-400">Edit</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-end">
            <button className="flex items-center gap-2 font-bold-7">
              <img src="./images/icon-reply.svg" alt="" />
              <span className=" text-primary-blue-400">Reply</span>
            </button>
          </div>
        )}
      </div>

      {comment.replies?.length !== 0 ? (
        <div className="space-y-2 border-l-2 pl-4">
          {comment.replies?.map((reply) => (
            <Reply
              setisDeleteCommentModalShown={setisDeleteCommentModalShown}
              setisEditCommentModalShown={setisEditCommentModalShown}
              currentUser={currentUser}
              reply={reply}
              key={reply.id}
            />
          ))}
        </div>
      ) : (
        ''
      )}

      <EditCommentModal
        currentUser={currentUser}
        comment={comment}
        isEditCommentModalShown={isEditCommentModalShown}
        setisEditCommentModalShown={setisEditCommentModalShown}
      />
    </>
  );
};

export default Comment;
