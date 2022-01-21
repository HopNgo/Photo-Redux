import React from "react";
import "./RandomPhoto.scss";
import { Button } from "reactstrap";

function RandomPhoto({ imageUrl, onImageUrlChange, classname }) {
  const getRandomUrl = () => {
    const randomId = Math.floor(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
  };
  const handleRandomPhoto = () => {
    if (onImageUrlChange) {
      const urlRandom = getRandomUrl();
      onImageUrlChange(urlRandom);
    }
  };
  return (
    <div className={"random-photo " + classname}>
      <div className="random-photo__btn">
        <Button
          color="primary"
          outline
          onClick={handleRandomPhoto}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1.7rem",
            borderRadius: "1rem",
          }}
        >
          Random a photo
        </Button>
        <div className="random-photo__photo">
          {imageUrl && <img src={imageUrl} alt="Not Found" />}
        </div>
      </div>
    </div>
  );
}

export default RandomPhoto;
