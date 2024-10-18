import React, { useContext, useEffect } from "react";
import "./Profile.scss";
import Card from "../../components/Card/Card";
import { listData, userData } from "../../lib/dummyData";
import List from "../../components/List/List";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  let data = listData;

  const navigate = useNavigate();

  const { updateUser, currentUser } = useContext(AuthContext);


  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/logout",
        {}, // Empty object as request body, if needed
        {
          withCredentials: true, // Ensure cookies are sent and received
        }
      );

      console.log(res);
      // localStorage.removeItem("user"); // Remove user data from local storage
      updateUser(null);

      navigate("/"); // Redirect after logout
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="profile-section">
        <div className="information-section">
          {/* user information */}
          <div className="user-information">
            <div className="user-heading">
              <h3>User Information</h3>
            </div>
            <div className="user-bio">
              <img src={userData.img} alt="" />
              <div className="user-data">
                <span>username: {currentUser.username}</span>{" "}
                <span>email: {currentUser.email}</span>
              </div>
              <div className="edit-buttons">
                <Link to={"/profile/update"}><button className="update-profile">update profile</button></Link>
                <button onClick={handleLogout} className="logout">
                  logout
                </button>
              </div>
            </div>
          </div>

          {/* list */}
          <div className="list">
            <div className="list-heading">
              <h3>List</h3>
              <button>create post</button>
            </div>
            <List />
          </div>

          {/* saved list */}
          <div className="saved">
            <div className="saved-heading">
              <h3>saved</h3>
              <Link to="/profile/update">
                <button>update profile</button>
              </Link>
            </div>
            <List />
          </div>
        </div>
        <div className="messages-section"></div>
      </div>
    </>
  );
}
