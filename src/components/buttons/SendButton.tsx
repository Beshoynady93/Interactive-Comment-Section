type sendButtonType = {
  sendCommentHandler: (commentContent: string) => void;
  commentContent: string;
};

const SendButton = ({ sendCommentHandler, commentContent }: sendButtonType) => {
  return (
    <button
      className="bg-primary-blue-400 text-white font-medium px-7 py-2 rounded-md"
      onClick={() => sendCommentHandler(commentContent)}
    >
      SEND
    </button>
  );
};

export default SendButton;
