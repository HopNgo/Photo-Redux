import React from "react";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import Banner from "../../components/Banner";
import FormPhoto from "../../components/Formik/FormPhoto";
import images from "../../constants/images";
import "./AddPhoto.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "../../redux/photoSlice";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import randomNumber from "../../utils/RandomNumber";

function AddPhotoPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoID } = useParams();

  const isAddMode = !photoID;
  const selectedPhotoEdit = useSelector((state) => {
    const foundPhoto = state.photos.find((photo) => photo.id === +photoID);
    return foundPhoto;
  });
  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : selectedPhotoEdit;
  console.log(initialValues);
  const handleSubmitAddPhoto = (value) => {
    console.log(value);
    if (isAddMode) {
      const newPhoto = {
        id: randomNumber(10000, 99999),
        ...value,
      };
      const action = addPhoto(newPhoto);
      dispatch(action);
      store.addNotification({
        title: "Thành Công",
        message: "Bạn đã thêm thành công !!",
        type: "success",
        width: 300,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          showIcon: true,
          duration: 1500,
        },
      });
    } else {
      const action = updatePhoto(value);
      dispatch(action);
      store.addNotification({
        title: "Thành Công",
        message: "Bạn đã cập nhật thành công !!",
        type: "success",
        width: 300,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          showIcon: true,
          duration: 1500,
        },
      });
    }
    navigate("/photos");
  };

  return (
    <>
      <Banner
        title={
          isAddMode ? "Pick Your Amazing Photo" : "Update Your Amazing Photo"
        }
        backgroundUrl={images.ORANGE_BG}
      />
      <div className="form-photo">
        <FormPhoto
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmitAddPhoto}
        />
      </div>
    </>
  );
}

export default AddPhotoPage;
