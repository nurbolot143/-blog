import { React, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

import { PostDetails } from "..";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/"[2]);
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };

    getPost();
  }, [path]);

  return (
    <article className="singlePost">
      {post.postImg && (
        <img className="singlePost__img" src={post.postImg} alt={post.title} />
      )}

      <header className="singlePost__header">
        <h3 className="singlePost__title">{post.title}</h3>
        <div className="singlePost__edit">
          <button className="singlePost__btn singlePost__btn-edit">
            <EditIcon />
          </button>
          <button className="singlePost__btn singlePost__btn-del">
            <DeleteIcon />
          </button>
        </div>
      </header>
      <div className="singlePost__content">
        <p>{post.descriptions}</p>
      </div>
      <PostDetails post={post} />
    </article>
  );
}

export default SinglePost;
