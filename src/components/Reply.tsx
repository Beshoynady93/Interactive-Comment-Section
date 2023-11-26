import { replyType, userType } from '../types/types';

type replyProps = {
  reply: replyType;
  currentUser: userType;
};

const Reply = ({ reply, currentUser }: replyProps) => {
  return (
    <div>
      <div>
        <img src={reply.user.image.webp} alt="" />
        <span>{reply.user.username}</span>
        {currentUser.username === reply.user.username ? <span>YOU</span> : ''}
        <span>{reply.createdAt}</span>
      </div>

      <div>{reply.content}</div>

      <div>
        <button>
          <img src="./images/icon-plus.svg" alt="" />
        </button>
        {reply.score}
        <button>
          <img src="./images/icon-minus.svg" alt="" />
        </button>
      </div>

      <div>
        <button>
          <img src="./images/icon-reply.svg" alt="" />
          <span>Reply</span>
        </button>
      </div>
    </div>
  );
};

export default Reply;
