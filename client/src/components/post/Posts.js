import React, { useEffect } from "react";
import Spinner from "../../spinner";
import { getPosts } from "../../action/post";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import PostItem from "./PostItem";
function Posts(props) {
  console.log(props.history);
  const his = useNavigate();
  console.log();

  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      {posts.length === 0 || isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="large text-primary">Posts</h1>
          <p className="lead">
            <i className="fa fa-user"></i> Welcome To Dev Center
          </p>
          <div className="posts">
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Posts;
