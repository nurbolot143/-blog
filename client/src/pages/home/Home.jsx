import { React, useEffect, useState } from "react";
import axios from "axios";
import { Banner, Posts, SideBar } from "../../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Banner />
      <div className="home">
        <div className="container">
          <div className="home__inner">
            <Posts posts={posts} />
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
