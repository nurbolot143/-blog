import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function Write() {
  return (
    <div className="write">
      <div className="container">
        <form action="" className="write__form">
          <div className="write__form-group">
            <label htmlFor="fileInput" className="write__file-label">
              <AddPhotoAlternateIcon
                className="write__file-icon"
                style={{ fontSize: 35 }}
              />
              Choose Image
            </label>
            <img
              src="https://photoeditor.polarr.co/img/onboarding/04_01_preview_2x.jpg"
              alt="Photo"
            />
            <input type="file" id="fileInput" className="write__file-input" />
            <input
              type="title"
              placeholder="Title"
              autoFocus={true}
              className="write__input"
              required
            />
          </div>
          <div className="write__form-group">
            <textarea
              className="write__input write__textarea"
              placeholder="Your content"
              required
            ></textarea>
          </div>
          <button className="write__publishBtn">
            <span></span> Publish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;
