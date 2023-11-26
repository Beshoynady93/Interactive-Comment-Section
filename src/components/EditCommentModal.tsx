import { commentType, userType } from '../types/types';
import SendButton from './buttons/SendButton';

type editCommentModal = {
  isEditCommentModalShown: boolean;
  comment: commentType;
  currentUser: userType;
  setisEditCommentModalShown: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditCommentModal = ({
  isEditCommentModalShown,
  comment,
  currentUser,
  setisEditCommentModalShown,
}: editCommentModal) => {
  const sendCommentHandler = () => {};
  return (
    <div
      className={`w-full h-full mt-0 top-0 left-0 bg-black bg-opacity-40 fixed z-10  items-center justify-center ${
        isEditCommentModalShown ? 'flex' : 'hidden'
      }`}
    >
      <div className="bg-white w-11/12 px-8 py-4 rounded-md space-y-2">
        <div className="bg-white p-4 rounded-md grid grid-cols-2 gap-y-4 shadow-sm">
          <div className="flex gap-4 items-center col-span-2">
            <img className="w-10" src={currentUser.image.webp} alt="" />
            <span className="text-neutral-blue-400 font-bold-7">
              {currentUser.username}
            </span>
            <span className="text-neutral-blue-200">{comment.createdAt}</span>
          </div>

          <textarea className="text-neutral-blue-200 col-span-2 resize-none p-4 border border-primary-blue-200 rounded-md">
            {comment.content}
          </textarea>

          <div className="flex items-center bg-neutral-grey-200 w-max px-4 py-2 rounded-md">
            <button onClick={() => setisEditCommentModalShown(false)}>
              Close
            </button>
          </div>

          <div className="flex items-center justify-end">
            <SendButton sendCommentHandler={sendCommentHandler} />
            {/* <button className="flex items-center gap-2 font-bold-7">
              <span className=" text-primary-blue-400">SEND</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCommentModal;
