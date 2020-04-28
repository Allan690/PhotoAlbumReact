import React from "react";
import "../assets/css/PhotoComponent.css";

const Photo = ({ thumbnailUrl, id, title }) => {
  return (
    <div className="photo">
      <img className="photo-url" src={ thumbnailUrl } alt="photoUrl" />
      <span className="photo-id"> { id } </span>
      <span className="photo-title"> { title } </span>
    </div>
  );
};

export default Photo;
