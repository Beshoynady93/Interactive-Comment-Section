import { useState } from 'react';
import { replyType, userType } from '../types/types';

type EditReplyModalPropsType = {
  isEditReplyModalShown: boolean;
  setIsEditReplyModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  reply: replyType;
  setReplies: React.Dispatch<React.SetStateAction<replyType[] | undefined>>;
  currentUser: userType;
};

const EditReplyModal = ({
  isEditReplyModalShown,
  setIsEditReplyModalShown,
  reply,
  setReplies,
  currentUser,
}: EditReplyModalPropsType) => {
  const [replyEditedText, setreplyEditedText] = useState(reply.content);

  const editedReplyTextHandler = (editedText: string) => {
    setreplyEditedText(editedText);
  };

  const sendCommentHandler = (replyID: number) => {
    if (!replyEditedText || replyEditedText.trim().length === 0) return;
    setReplies((replies) => {
      const replyToEdit = replies?.find((reply) => reply.id === replyID);

      const replyToEditIndex = replies?.findIndex(
        (reply) => reply.id === replyID
      );

      if (!replyToEdit) return replies;
      replyToEdit.content = replyEditedText;
      if (!replyToEditIndex || !replies) return replies;
      replies[replyToEditIndex] = replyToEdit;
      return replies;
    });

    setIsEditReplyModalShown(false);
  };

  return (
    <div
      className={`w-full h-full mt-0 top-0 left-0 bg-black bg-opacity-40 fixed z-10  items-center justify-center ${
        isEditReplyModalShown ? 'flex' : 'hidden'
      }`}
    >
      <div className="bg-white w-11/12 px-2 rounded-md space-y-1">
        <div className="bg-white p-4 rounded-md grid grid-cols-2 gap-y-4 shadow-sm">
          <div className="flex gap-4 items-center col-span-2">
            <img className="w-10" src={currentUser.image.webp} alt="" />
            <span className="text-neutral-blue-400 font-bold-7">
              {currentUser.username}
            </span>
            <span className="text-neutral-blue-200">{reply.createdAt}</span>
          </div>

          <textarea
            onChange={(e) => editedReplyTextHandler(e.target.value)}
            value={replyEditedText}
            className="text-neutral-blue-200 col-span-2 resize-none p-4 border border-primary-blue-200 rounded-md"
          />

          <div className="flex items-center bg-neutral-grey-200 w-max px-4 py-2 rounded-md hover:bg-slate-500 hover:text-white transition-colors duration-200">
            <button onClick={() => setIsEditReplyModalShown(false)}>
              Close
            </button>
          </div>

          <div className="flex items-center justify-end">
            <button
              className="bg-primary-blue-400 text-white font-medium px-4 py-2 rounded-md hover:opacity-50"
              onClick={() => sendCommentHandler(reply.id)}
            >
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReplyModal;
