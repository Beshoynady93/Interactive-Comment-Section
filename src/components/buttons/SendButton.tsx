type sendButtonType = {
  sendCommentHandler: (commentContent: string) => void;
  commentContent: string;
};

const SendButton = ({ sendCommentHandler, commentContent }: sendButtonType) => {
  return (
    <button
      className="w-max justify-self-end bg-primary-blue-400 text-white font-medium px-7 py-2 rounded-md hover:opacity-50 transition-colors duration-200 md:col-start-3"
      onClick={() => sendCommentHandler(commentContent)}
    >
      SEND
    </button>
  );
};

export default SendButton;
