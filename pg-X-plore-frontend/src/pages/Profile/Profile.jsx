import React from "react";
import "./Profile.scss";
import Card from "../../components/Card/Card";
import { listData, userData } from "../../lib/dummyData";
import List from "../../components/List/List";

export default function Profile() {
  let data = listData;

  return (
    <>
      <div className="profile-section">
        <div className="information-section">
          {/* {data.map((item) => {
            return <Card key={item.id} item={item} />;
          })} */}
          {/* user information */}
          <div className="user-information">
            <div className="user-heading">
              <h3>User Information</h3>
              <button>update profile</button>
            </div>
            <div className="user-bio">
              <img src={userData.img} alt="" />
              <div className="user-data">
                <span>username: johndo</span> <span>email: john@gmail.com</span>
              </div>
            </div>
          </div>

          {/* list */}
          <div className="list">
            <div className="list-heading">
              <h3>List</h3>
              <button>update profile</button>
            </div>
            <List />
          </div>

          {/* saved list */}
          <div className="saved">
          <div className="saved-heading">
              <h3>saved</h3>
              <button>update profile</button>
            </div>
            <List />
          </div>
        </div>
        <div className="messages-section"></div>
      </div>
    </>
  );
}
