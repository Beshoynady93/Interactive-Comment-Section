import { replyType, userType } from '../types/types';
import DeleteReplyModal from './DeleteReplyModal';
import { useState } from 'react';
import EditReplyModal from './EditReplyModal';

type replyPropsType = {
  reply: replyType;
  currentUser: userType;
  setReplies: React.Dispatch<React.SetStateAction<replyType[] | undefined>>;
};

const Reply = ({ reply, currentUser, setReplies }: replyPropsType) => {
  const [isDeleteReplyModalShown, setIsDeleteReplyModalShown] = useState(false);
  const [isEditReplyModalShown, setIsEditReplyModalShown] = useState(false);

  const deleteCommentHandler = () => {
    setIsDeleteReplyModalShown(true);
  };

  return (
    <>
      <div className="col-span-2 bg-white p-4 rounded-md grid grid-cols-2 gap-y-4 shadow-sm sm:ml-4">
        <div className="flex gap-4 items-center col-span-2">
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

        <div className="text-neutral-blue-200 col-span-2">{reply.content}</div>

        <div className="flex items-center bg-neutral-grey-200 w-max px-4 py-2 rounded-md">
          <button>
            <img src="./images/icon-plus.svg" alt="" />
          </button>
          <span className="text-primary-blue-400 font-bold-7 mx-2">
            {reply.score}
          </span>
          <button>
            <img src="./images/icon-minus.svg" alt="" />
          </button>
        </div>

        {reply.user.username === currentUser.username ? (
          <div className="flex items-center gap-4 sm:justify-end">
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
          <div className="flex items-center justify-end hover:opacity-50">
            <button className="flex items-center gap-2 font-bold-7">
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
