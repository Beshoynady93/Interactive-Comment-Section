import { commentType, userType, replyType } from '../types/types';
import DeleteCommentModal from './DeleteCommentModel';
import EditCommentModal from './EditCommentModal';
import Reply from './Reply';
import { useState } from 'react';

type commentPropsType = {
  comment: commentType;
  currentUser: userType;
  setcomments: React.Dispatch<React.SetStateAction<commentType[]>>;
};

const Comment = ({ comment, currentUser, setcomments }: commentPropsType) => {
  const [replies, setReplies] = useState<replyType[] | undefined>(
    comment.replies
  );
  const [isDeleteCommentModalShown, setisDeleteCommentModalShown] =
    useState(false);
  const [isEditCommentModalShown, setisEditCommentModalShown] = useState(false);

  const deleteCommentHandler = () => {
    setisDeleteCommentModalShown(true);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md grid grid-cols-2 gap-y-4 shadow-sm md:grid-cols-comments-replies-md md:grid-rows-2 md:gap-4">
        <div className="flex gap-4 items-center col-span-2 md:col-start-2">
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

        <div className="text-neutral-blue-200 col-span-2 md:col-start-2 md:col-span-3">
          {comment.content}
        </div>

        <div className="flex items-center md:flex-col md:justify-between bg-neutral-grey-200 w-max px-4 py-2 rounded-md md:col-start-1 md:row-start-1 md:row-span-2 md:py-8 md:px-1 md:rounded-full">
          <button className="p-2">
            <img src="./images/icon-plus.svg" alt="" />
          </button>
          <span className="text-primary-blue-400 font-bold-7 mx-2">
            {comment.score}
          </span>
          <button className="p-2">
            <img src="./images/icon-minus.svg" alt="" />
          </button>
        </div>

        {comment.user.username === currentUser.username ? (
          <div className="flex items-center gap-4 sm:justify-end md:col-start-4 md:row-start-1">
            <button
              onClick={deleteCommentHandler}
              className="flex items-center gap-2 font-bold-7 hover:opacity-50 transition-colors duration-200"
            >
              <img src="./images/icon-delete.svg" alt="" />
              <span className="text-primary-red-400">Delete</span>
            </button>
            <button
              onClick={() => setisEditCommentModalShown(true)}
              className="flex items-center gap-2 font-bold-7 hover:opacity-50 transition-colors duration-200"
            >
              <img src="./images/icon-edit.svg" alt="" />
              <span className="text-primary-blue-400">Edit</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-end md:col-start-4 md:row-start-1">
            <button className="flex items-center gap-2 font-bold-7 hover:opacity-50 transition-colors duration-200">
              <img src="./images/icon-reply.svg" alt="" />
              <span className=" text-primary-blue-400">Reply</span>
            </button>
          </div>
        )}
      </div>

      {replies?.length !== 0 ? (
        <div className="space-y-2 border-l-2 pl-4 sm:ml-4">
          {replies?.map((reply) => (
            <Reply
              setReplies={setReplies}
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
        setcomments={setcomments}
      />

      <DeleteCommentModal
        isDeleteCommentModalShown={isDeleteCommentModalShown}
        setisDeleteCommentModalShown={setisDeleteCommentModalShown}
        commentID={comment.id}
        setcomments={setcomments}
      />
    </>
  );
};

export default Comment;
