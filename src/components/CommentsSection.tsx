import { useState } from 'react';
import data from '../assets/data.json';
import Comment from './Comment';
import AddComment from './AddComment';
import { commentType } from '../types/types';

const CommentsSection = () => {
  const [currentUser] = useState(data.currentUser);
  const [comments, setcomments] = useState<commentType[]>(data.comments);

  return (
    <>
      <section className="max-w-sm mx-auto px-4 py-8 sm:max-w-md md:max-w-2xl">
        <div className="space-y-4">
          {comments.map((comment) => (
            <Comment
              currentUser={currentUser}
              comment={comment}
              setcomments={setcomments}
              key={comment.id}
            />
          ))}
        </div>
        <AddComment setComment={setcomments} currentUser={currentUser} />
      </section>
    </>
  );
};

export default CommentsSection;
