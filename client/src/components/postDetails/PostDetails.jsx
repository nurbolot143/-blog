import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PersonIcon from "@mui/icons-material/Person";

function PostDetails({ post }) {
  const categories = post.categories;

  return (
    <div className="postDetails">
      <span className="postDetails__wrapper postDetails__author">
        <PersonIcon className="postDetails__icon" /> {post.username}
      </span>
      {categories && (
        <div className="postDetails__wrapper postDetails__categories">
          {categories.map((cat) => (
            <span className="postDetails__category" key={cat}>
              {cat}
            </span>
          ))}
          <FolderOpenIcon className="postDetails__icon" />
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
