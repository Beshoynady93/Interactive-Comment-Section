import { useState } from 'react';
import { commentType, userType } from '../types/types';

type editCommentModal = {
  isEditCommentModalShown: boolean;
  comment: commentType;
  currentUser: userType;
  setisEditCommentModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  setcomments: React.Dispatch<React.SetStateAction<commentType[]>>;
};

const EditCommentModal = ({
  isEditCommentModalShown,
  comment,
  currentUser,
  setisEditCommentModalShown,
  setcomments,
}: editCommentModal) => {
  const [commentEditedText, setcommentEditedText] = useState(comment.content);

  const editedCommentTextHandler = (editedText: string) => {
    setcommentEditedText(editedText);
  };

  const sendCommentHandler = (commentID: number) => {
    if (!commentEditedText || commentEditedText.trim().length === 0) return;
    setcomments((comments) => {
      const commentToEdit = comments.find(
        (comment) => comment.id === commentID
      );

      const commentToEditIndex = comments.findIndex(
        (comment) => comment.id === commentID
      );

      if (!commentToEdit) return comments;
      commentToEdit.content = commentEditedText;
      comments[commentToEditIndex] = commentToEdit;
      return comments;
    });

    setisEditCommentModalShown(false);
  };

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

          <textarea
            onChange={(e) => editedCommentTextHandler(e.target.value)}
            value={commentEditedText}
            className="text-neutral-blue-200 col-span-2 resize-none p-4 border border-primary-blue-200 rounded-md"
          />

          <div className="flex items-center bg-neutral-grey-200 w-max px-4 py-2 rounded-md">
            <button onClick={() => setisEditCommentModalShown(false)}>
              Close
            </button>
          </div>

          <div className="flex items-center justify-end">
            <button
              className="bg-primary-blue-400 text-white font-medium px-7 py-2 rounded-md"
              onClick={() => sendCommentHandler(comment.id)}
            >
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCommentModal;
