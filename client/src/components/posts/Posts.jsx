import React from "react";
import { PostItem } from "..";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <PostItem post={p} key={p.title} />
      ))}
    </div>
  );
}

export default Posts;
