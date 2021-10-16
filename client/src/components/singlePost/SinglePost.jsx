import { React, useEffect, useState } from "react";
import axios from "axios";
import { PostDetails } from "..";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation } from "react-router";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/" + path);
      setPost(res.data);
    };
  }, [path]);

  return (
    <article className="singlePost">
      {post.postImg && (
        <img className="singlePost__img" src={post.postImg} alt="" />
      )}

      <header className="singlePost__header">
        <h3 className="singlePost__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
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
