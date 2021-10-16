import React from "react";
import { Banner, Posts, SideBar } from "../../components";

function Home() {
  return (
    <>
      <Banner />
      <div className="home">
        <div className="container">
          <div className="home__inner">
            <Posts />
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
