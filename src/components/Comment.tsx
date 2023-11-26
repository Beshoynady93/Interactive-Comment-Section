import { commentType, userType } from '../types/types';
import Reply from './Reply';

type commentProps = {
  comment: commentType;
  currentUser: userType;
};

const Comment = ({ comment, currentUser }: commentProps) => {
  return (
    <div>
      <div>
        <img src={comment.user.image.webp} alt="" />
        <span>{comment.user.username}</span>
        {currentUser.username === comment.user.username ? <span>YOU</span> : ''}
        <span>{comment.createdAt}</span>
      </div>

      <div>{comment.content}</div>

      <div>
        <button>
          <img src="./images/icon-plus.svg" alt="" />
        </button>
        {comment.score}
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

      {comment.replies?.map((reply) => (
        <div key={reply.id}>
          <Reply currentUser={currentUser} reply={reply} />
        </div>
      ))}
    </div>
  );
};

export default Comment;
