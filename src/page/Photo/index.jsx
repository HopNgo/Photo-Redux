import React from "react";
import Banner from "../../components/Banner";
import { Link } from "react-router-dom";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import "animate.css";
import images from "../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "../../components/PhotoList";
import { removePhoto } from "../../redux/photoSlice";
import "./Photo.scss";
import {useNavigate} from 'react-router-dom';

function PhotoPage() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickEditPhoto = (photoSelected) => {
      const photoID = photoSelected.id;
      navigate(`/photos/edit/${photoID}`);
  };
  const handleClickRemovePhoto = (photoSelected) => {
    const action = removePhoto(photoSelected.id);
    console.log(action);
    dispatch(action);
    store.addNotification({
      title: "Thành Công",
      message: "Bạn đã xóa thành công !!",
      type: "success",
      width: 300,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        showIcon: true,
        duration: 1500,
      }
    });
  };
  return (
    <>
      <Banner title="Your awesome photos" backgroundUrl={images.PINK_BG} />
      <div className="link">
        <Link className="link__add-new-photo" to="/photos/add">
          Add New Photo
        </Link>
      </div>
      <PhotoList
        listPhoto={photos}
        onEditPhoto={handleClickEditPhoto}
        onRemovePhoto={handleClickRemovePhoto}
      />
    </>
  );
}

export default PhotoPage;
