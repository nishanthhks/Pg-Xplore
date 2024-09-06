import React from "react";
import "./Singlepage.scss";
export default function SinglePage() {
  return (
    <div className="single-page">
      
      <div className="left-container">
        <div className="image-wrapper"></div>
        <div className="title"></div>
        <div className="description"></div>
      </div>
      <div className="right-container">
        <div className="general-details"></div>
        <div className="room-details"></div>
        <div className="rear-places"></div>
        <div className="location"></div>
      </div>
    </div>
  );
}
