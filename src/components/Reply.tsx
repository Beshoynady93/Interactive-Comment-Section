import { replyType, userType } from '../types/types';

type replyPropsType = {
  reply: replyType;
  currentUser: userType;
  setisDeleteCommentModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  setisEditCommentModalShown: React.Dispatch<React.SetStateAction<boolean>>;
};

const Reply = ({
  reply,
  currentUser,
  setisDeleteCommentModalShown,
  setisEditCommentModalShown,
}: replyPropsType) => {
  const deleteCommentHandler = () => {
    setisDeleteCommentModalShown(true);
  };

  return (
    <div className="col-span-2 bg-white p-4 rounded-md grid grid-cols-2 gap-y-4 shadow-sm">
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
  );
};

export default Reply;
