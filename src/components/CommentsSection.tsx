import { useState } from 'react';
import data from '../assets/data.json';
import Comment from './Comment';
import AddComment from './AddComment';

const CommentsSection = () => {
  const [currentUser] = useState(data.currentUser);
  const [comments, setcomments] = useState(data.comments);
  return (
    <section>
      <div>
        {comments.map((comment) => (
          <Comment
            currentUser={currentUser}
            comment={comment}
            key={comment.id}
          />
        ))}
      </div>
      <div>
        <AddComment currentUser={currentUser} />
      </div>
    </section>
  );
};

export default CommentsSection;
