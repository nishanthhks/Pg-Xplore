import { AuthContext } from "../../context/AuthContext";
import "./ProfileUpdate.scss";
import { listData, userData } from "../../lib/dummyData";

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/UploadWidget/UploadWidget";

export default function ProfileUpdate() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const payload = {
        username,
        email,
      };
      if (password) {
        payload.password = password;
      }
      if (avatar.length) {
        payload.avatar = avatar[0];
      }

      const res = await apiRequest.put(`/user/${currentUser.id}`, payload);

      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="profileUpdatePage">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h1>Update Profile</h1>
            <div className="item">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={currentUser.username}
              />
            </div>
            <div className="item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={currentUser.email}
              />
            </div>
            <div className="item">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" />
            </div>
            <button>Update</button>
            {error && <span>{error}</span>}
          </form>
        </div>
        <div className="sideContainer">
          <img
            src={currentUser.avatar || userData.img}
            alt="avatar"
            className="avatar"
            height={"100px"}
          />
          <UploadWidget
            uwConfig={{
              cloudName: "nishanth-cloud",
              uploadPreset: "nishanth",
              multiple: false,
              maxImageFileSize: 2000000,
              folder: "avatars",
            }}
            setAvatar={setAvatar}
          />
        </div>
      </div>
    </>
  );
}
