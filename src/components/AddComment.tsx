import { useRef } from 'react';
import { userType, commentType } from '../types/types';
import SendButton from './buttons/SendButton';

type addCommentPropsType = {
  currentUser: userType;
  setComment: React.Dispatch<React.SetStateAction<commentType[]>>;
};

const AddComment = ({ currentUser, setComment }: addCommentPropsType) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const sendCommentHandler = () => {
    if (!textareaRef.current?.value) return;
    setComment((comments: commentType[]) => [
      ...comments,
      {
        id: new Date().getTime(),
        content: textareaRef.current?.value ? textareaRef.current?.value : '',
        createdAt: `${new Date().getDate()}-${
          new Date().getMonth() + 1
        }-${new Date().getFullYear()}`,
        score: 0,
        user: {
          image: currentUser.image,
          username: currentUser.username,
        },
        replies: [],
      },
    ]);
    // textareaRef.current.value = '';
  };

  return (
    <>
      <textarea
        name="add-comment"
        ref={textareaRef}
        id=""
        // cols={30}
        rows={3}
        placeholder="Add a comment ..."
        className="resize-none w-full p-4 border border-neutral-grey-400 text-neutral-blue-400 "
      />
      <div className="flex justify-between items-center space-y-2">
        <img className="w-10" src={currentUser.image.webp} alt="" />
        <SendButton sendCommentHandler={sendCommentHandler} />
      </div>
    </>
  );
};

export default AddComment;
