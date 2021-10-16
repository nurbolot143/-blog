import React from "react";
import { SideBar, SinglePost } from "../../components";

function Single() {
  return (
    <div className="single">
      <div className="container">
        <div className="single__inner">
          <SinglePost />
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default Single;
