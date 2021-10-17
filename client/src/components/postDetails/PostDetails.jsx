import React from "react";
import { Link } from "react-router-dom";

import DateRangeIcon from "@mui/icons-material/DateRange";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PersonIcon from "@mui/icons-material/Person";

function PostDetails({ post }) {
  const categories = post.categories;

  return (
    <div className="postDetails">
      <Link to={`/?user=${post.username}`}>
        <span className="postDetails__wrapper postDetails__author">
          <PersonIcon className="postDetails__icon" /> {post.username}
        </span>
      </Link>

      {categories && (
        <div className="postDetails__wrapper postDetails__categories">
          {categories.map((cat) => (
            <span className="postDetails__category" key={`${cat}__${cat}`}>
              <Link to={`/?cat=${cat}`}>
                <FolderOpenIcon className="postDetails__icon" /> {cat}
              </Link>
            </span>
          ))}
        </div>
      )}

      <time
        className="postDetails__wrapper postDetails__date"
        dateTime={post.updatedAt}
      >
        <DateRangeIcon className="postDetails__icon" />
        {new Date(post.updatedAt).toDateString()}
      </time>
    </div>
  );
}

export default PostDetails;
