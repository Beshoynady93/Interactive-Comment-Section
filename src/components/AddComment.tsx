import { userType } from '../types/types';

const AddComment = ({ currentUser }: { currentUser: userType }) => {
  return (
    <div>
      <textarea
        name="add-comment"
        id=""
        cols={30}
        rows={10}
        placeholder="Add a comment"
      />
      <div>
        <img src={currentUser.image.webp} alt="" />
        <button>SEND</button>
      </div>
    </div>
  );
};

export default AddComment;
