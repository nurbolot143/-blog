import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PersonIcon from "@mui/icons-material/Person";

function PostDetails() {
  return (
    <div className="postDetails">
      <span className="postDetails__wrapper postDetails__author">
        <PersonIcon className="postDetails__icon" /> John Doe
      </span>
      <div className="postDetails__wrapper postDetails__categories">
        <FolderOpenIcon className="postDetails__icon" />
        <span className="postDetails__category">Technology</span>
        <span className="postDetails__category">Coding</span>
      </div>
      <time className="postDetails__wrapper postDetails__date" dateTime="">
        <DateRangeIcon className="postDetails__icon" /> 2 hours ago
      </time>
    </div>
  );
}

export default PostDetails;
