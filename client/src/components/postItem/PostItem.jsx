import React from "react";
import { Link } from "react-router-dom";
import { PostDetails } from "..";

function PostItem({ post }) {
  return (
    <div className="post">
      <div className="post__inner">
        {post.postImg && (
          <img className="post__img" src={post.img} alt={post.title} />
        )}
        <div className="post__contnent">
          <h3 className="post__title">
            <Link to={`/post/${post._id}`}>{post.title}</Link>
          </h3>
          <p className="post__excerpt">{post.description}</p>
        </div>
      </div>
      <PostDetails post={post} />
    </div>
  );
}

export default PostItem;
