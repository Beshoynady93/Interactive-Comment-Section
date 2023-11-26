import { useState } from 'react';
import data from '../assets/data.json';
import Comment from './Comment';
import AddComment from './AddComment';
import DeleteCommentModal from './DeleteCommentModel';

const CommentsSection = () => {
  const [currentUser] = useState(data.currentUser);
  const [comments, setcomments] = useState(data.comments);
  const [isDeleteCommentModalShown, setisDeleteCommentModalShown] =
    useState(false);

  return (
    <>
      <section className="max-w-sm mx-auto px-4 py-8">
        <div className="space-y-4">
          {comments.map((comment) => (
            <Comment
              currentUser={currentUser}
              comment={comment}
              setisDeleteCommentModalShown={setisDeleteCommentModalShown}
              key={comment.id}
            />
          ))}
        </div>
        <div className="bg-white mt-4 px-4 py-2">
          <AddComment setComment={setcomments} currentUser={currentUser} />
        </div>
      </section>
      <DeleteCommentModal
        isDeleteCommentModalShown={isDeleteCommentModalShown}
        setisDeleteCommentModalShown={setisDeleteCommentModalShown}
      />
    </>
  );
};

export default CommentsSection;
