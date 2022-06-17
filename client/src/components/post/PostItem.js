import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { addLike, removeLike } from "../../action/post";
function PostItem({ post }) {
  const { user, isLoading } = useSelector((st) => st.authReducer);

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${post._id}`}>
          <img className="round-img" src={post.avatar} alt={post.name} />
          <h4>{post.name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{post.text}</p>
        <p className="post-date">
          Posted on <Moment format="DD/MM/YYYY">{post.date}</Moment>
        </p>
        <button type="button" className="btn btn-light">
          <i className="fa fa-thumbs-up"></i>
          <span> {post.likes.length}</span>
        </button>
        <button type="button" className="btn btn-light">
          <i className="fa fa-thumbs-down"></i>
          <span> {post.likes.length}</span>
        </button>
        {post.comments.length > 0 && (
          <Link to="/post" className="btn btn-primary">
            Discussion{" "}
            <span className="comment-count"> {post.comments.length}</span>
          </Link>
        )}

        {post.user === user._id && !isLoading && (
          <button type="button" className="btn btn-danger">
            <i className="fa fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default PostItem;
