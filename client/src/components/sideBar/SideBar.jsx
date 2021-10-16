import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

function sideBar() {
  return (
    <aside className="sideBar">
      <div className="sideBar__item">
        <h4 className="sideBar__item-title">About Us</h4>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam iste
          nulla explicabo aspernatur a tempora perspiciatis ipsa numquam
          architecto impedit exercitationem repellendus ex ab aliquam, accusamus
          quaerat, cupiditate laboriosam nemo.
        </p>
      </div>
      <div className="sideBar__item">
        <h4 className="sideBar__item-title">Categories</h4>
        <ul className="sideBar__categories">
          <li className="sideBar__categories-item">
            <FolderOpenIcon className="sideBar__categories-item-icon" />
            Technology
          </li>
          <li className="sideBar__categories-item">
            <FolderOpenIcon className="sideBar__categories-item-icon" />
            Coding
          </li>
          <li className="sideBar__categories-item">
            <FolderOpenIcon className="sideBar__categories-item-icon" />
            Livestyle
          </li>
          <li className="sideBar__categories-item">
            <FolderOpenIcon className="sideBar__categories-item-icon" />
            Music
          </li>
          <li className="sideBar__categories-item">
            <FolderOpenIcon className="sideBar__categories-item-icon" />
            Travel
          </li>
          <li className="sideBar__categories-item">
            <FolderOpenIcon className="sideBar__categories-item-icon" />
            Health
          </li>
        </ul>
      </div>
      <div className="sideBar__item">
        <h4 className="sideBar__item-title">Follow Me</h4>
        <ul className="sideBar__socials">
          <li className="sideBar__socials-item">
            <a
              href="https://github.com/zhanybekovych"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
          <li className="sideBar__socials-item">
            <a href="https://fb.com" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
          </li>
          <li className="sideBar__socials-item">
            <a href="https://fb.com" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default sideBar;
