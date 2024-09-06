import React, { useState } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import MapMarker2 from "../../assets/icons/MapMarker2";
import BookMarkNotSave from "../../assets/icons/BookMarkNotSave";
import MessageCircle from "../../assets/icons/MessageCircle";
import BookMarkSave from "../../assets/icons/BookMarkSave";

export default function Card({ item = {} }) {
  const [save, setSave] = useState(false);

  return (
    <div className="card">
      {/* left image */}
      <Link to={`/${item.id}`} className="image-container">
        <img src={item.img} alt="" />
      </Link>

      {/* right description */}
      <div className="text-container">
        {/* title */}
        <h4 className="title text-clamp">
          <Link to={`/${item.id}`}> {item.title}</Link>
        </h4>

        {/* address */}
        <p className="address">
          <MapMarker2 />
          <span>{item.address}</span>
        </p>

        {/* price */}
        <span className="price">${item.price}</span>

        {/* features */}
        <div className="features">
          <span className="bedroom">Bedroom: {item.bedroom}</span>
          <span className="bathroom">Bathroom: {item.bathroom}</span>
          <div className="options">
            <div
              onClick={() => {
                setSave((prev) => !prev);
              }}>
              {save ? <BookMarkSave /> : <BookMarkNotSave />}
            </div>
            <MessageCircle />
          </div>
        </div>
      </div>
    </div>
  );
}
