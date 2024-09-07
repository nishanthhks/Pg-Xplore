import React from "react";
import "./Singlepage.scss";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import ArrowUp from "../../assets/icons/ArrowUp";

import { singlePostData } from "../../lib/dummyData";
import { userData } from "../../lib/dummyData";
import Map from "../../components/Map/Map";

export default function SinglePage() {
  const data = singlePostData;
  console.log(data);

  return (
    <div className="single-page">
      {/* left */}
      <div className="left-container">
        {/* image */}
        <div className="image-wrapper">
          <ImageSlider images={data.images} />
        </div>

        {/* heading */}
        <Heading data={data} userData={userData} />

        {/* description */}
        <div className="description ">
          <p>{data.description}</p>
        </div>
      </div>

      {/* right */}
      <div className="right-container">
        {/* general details */}
        <General data={data} />

        {/* room details */}
        <Room />

        {/* nearby place */}
        <Place data={data} />

        {/* location */}
        <div className="location">
          <Map data={data} />
        </div>
      </div>
    </div>
  );
}

function Heading({ data, userData }) {
  return (
    <div className="heading">
      <div className="title">
        <h3>{data.title}</h3>
        <span>{data.address}</span>
        <span>₹{data.price}</span>
      </div>
      <div className="profile">
        <img src={userData.img} alt="profilr" />
        <span>{userData.name}</span>
      </div>
    </div>
  );
}

function General({ data }) {
  return (
    <div className="general-details">
      <h4>General</h4>

      <div className="general-list">
        <div className="icon">
          <ArrowUp />
        </div>
        <div className="list-desc">
          <h5>Utilities</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="general-list">
        <div className="icon">
          <ArrowUp />
        </div>
        <div className="list-desc">
          <h5>Utilities</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="general-list">
        <div className="icon">
          <ArrowUp />
        </div>
        <div className="list-desc">
          <h5>Utilities</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}

function Room({ data }) {
  return (
    <div className="room-details">
      <h4>room</h4>

      <div className="list-comtainer">
        <div className="room-list">
          <div className="icon">
            <ArrowUp />
          </div>
          <div className="room-desc">
            <p>Lorem.</p>
          </div>
        </div>

        <div className="room-list">
          <div className="icon">
            <ArrowUp />
          </div>
          <div className="room-desc">
            <p>Lorem.</p>
          </div>
        </div>

        <div className="room-list">
          <div className="icon">
            <ArrowUp />
          </div>
          <div className="room-desc">
            <p>Lorem.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Place({ data }) {
  return (
    <div className="near-places-details">
      <h4>General</h4>

      <div className="place-container">
        <div className="place-list">
          <div className="icon">
            <ArrowUp />
          </div>
          <div className="place-list-desc">
            <h5>School</h5>
            <p>{data.school} </p>
          </div>
        </div>

        <div className="place-list">
          <div className="icon">
            <ArrowUp />
          </div>
          <div className="place-list-desc">
            <h5>Bus stop</h5>
            <p>{data.bus} </p>
          </div>
        </div>

        <div className="place-list">
          <div className="icon">
            <ArrowUp />
          </div>
          <div className="place-list-desc">
            <h5>restaurent</h5>
            <p>{data.restaurant} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
