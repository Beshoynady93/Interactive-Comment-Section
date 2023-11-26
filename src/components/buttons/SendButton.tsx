type sendButtonType = {
  sendCommentHandler: () => void;
};

const SendButton = ({ sendCommentHandler }: sendButtonType) => {
  return (
    <button
      className="bg-primary-blue-400 text-white font-medium px-7 py-2 rounded-md"
      onClick={sendCommentHandler}
    >
      SEND
    </button>
  );
};

export default SendButton;
