import React from "react";
import { Button } from "reactstrap";
import "./PhotoList.scss";

function PhotoList({ listPhoto, onEditPhoto, onRemovePhoto }) {
  const handleClickEdit = (photo) => {
    if (onEditPhoto) onEditPhoto(photo);
  };
  const handleClickRemove = (photo) => {
    if (onRemovePhoto) onRemovePhoto(photo);
  };

  return (
    <div className="photolist__container">
      {listPhoto &&
        listPhoto.map((photo) => (
          <div key={photo.title} className="photolist-item">
            <img src={photo.photo} alt="not found" />
            <div className="photolist-item__overlay">
              <h3 className="photolist-item__title">{photo.title}</h3>
              <div className="photolist-item__actions">
                <Button
                  onClick={() => handleClickEdit(photo)}
                  outline
                  color="light"
                  className="btn-edit"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleClickRemove(photo)}
                  outline
                  color="danger"
                  className="btn-remove"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PhotoList;
