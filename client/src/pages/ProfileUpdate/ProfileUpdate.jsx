import { AuthContext } from "../../context/AuthContext";
import "./ProfileUpdate.scss";
import { listData, userData } from "../../lib/dummyData";

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

export default function ProfileUpdate() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
//   const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      console.log(username, email, password);
      const res = await apiRequest.put(`/user/${currentUser.id}`, {
        username,
        email,
        password,
        //   avatar:avatar[0]
      });
      console.log(res.data);

      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
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
            {error && <span>error</span>}
          </form>
        </div>
        <div className="sideContainer">
          <img
            src={currentUser.avatar || userData.img}
            alt=""
            className="avatar"
            height={"100px"}
          />
          {/* <UploadWidget
            uwConfig={{
              cloudName: "lamadev",
              uploadPreset: "estate",
              multiple: false,
              maxImageFileSize: 2000000,
              folder: "avatars",
            }}
            setState={setAvatar}
          /> */}
        </div>
      </div>
    </>
  );
}
