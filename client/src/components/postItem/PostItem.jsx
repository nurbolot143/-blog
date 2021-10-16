import React from "react";
import { PostDetails } from "..";

function PostItem() {
  return (
    <div className="post">
      <div className="post__inner">
        <img
          className="post__img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzGFjnkMZINu3Zs_lbh-4k1BMHmq6pds6dw&usqp=CAU"
          alt="post img"
        />
        <div className="post__contnent">
          <h3 className="post__title">
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <p className="post__excerpt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            alias distinctio voluptate tempora numquam modi laboriosam
            voluptatum mollitia officiis ab atque, qui eum dignissimos unde iste
            ipsam illo delectus voluptatem. Ipsa quod fugiat facilis voluptate
            temporibus quisquam numquam velit accusantium facere aliquid quia
            harum voluptatum explicabo odio architecto.
          </p>
        </div>
      </div>
      <PostDetails />
    </div>
  );
}

export default PostItem;
