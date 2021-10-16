import React from "react";
import { PostDetails } from "..";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function SinglePost() {
  return (
    <article className="singlePost">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzGFjnkMZINu3Zs_lbh-4k1BMHmq6pds6dw&usqp=CAU"
        alt="post img"
        className="singlePost__img"
      />
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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
          blanditiis numquam cum provident corrupti impedit modi incidunt, sit
          nobis ab esse facilis dolor voluptatum aspernatur et qui, facere
          accusantium neque? Accusantium soluta amet aspernatur voluptates
          possimus odio temporibus, ea optio. Reiciendis similique adipisci
          possimus cum obcaecati nesciunt, nemo quidem ratione harum officiis
          ullam dolor facilis eum quo dignissimos! Numquam, corporis. Earum
          vitae, culpa sed nam, ducimus deserunt sint dignissimos cupiditate
          laborum officiis delectus et voluptatibus voluptas maiores dolorum
          excepturi voluptatem ea aut dicta fugiat repudiandae, ipsum veniam
          perspiciatis. Suscipit, deleniti. Odio maiores veritatis ullam nobis
          fugiat reprehenderit, culpa sed porro nesciunt illum fuga cupiditate
          minima quam molestias debitis corrupti vitae impedit? Rem doloremque
          magnam vel saepe, hic quia eveniet cumque.
        </p>
      </div>
      <PostDetails />
    </article>
  );
}

export default SinglePost;
