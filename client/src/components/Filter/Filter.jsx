import React from "react";
import "./filter.scss";
import Search from "../../assets/icons/Search";

export default function Filter() {
  return (
    <div className="filter-component">
      {/* <div className="upper"></div> */}

      {/* container */}
      <h3>search result for : </h3>

      <div className="location-search">
        {/* location */}
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter Location"
        />
        <div className="search-button">
          <Search  color="rgb(20, 61, 123)"/>
        </div>
      </div>

      <div className="filters">
        {/* type */}
        <div className="filter-options">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
        </div>

        {/* property */}
        <div className="filter-options">
          <label htmlFor="type">Property</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="ppartment">buy</option>
            <option value="house">rent</option>
            <option value="land">land</option>
          </select>
        </div>

        {/* Min Price */}
        <div className="filter-options">
          <label htmlFor="minPrice">Min Price</label>
          <input type="text" id="minPrice" name="minPrice" placeholder="any" />
        </div>

        {/* Max Price */}
        <div className="filter-options">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="text" id="maxPrice" name="maxPrice" placeholder="any" />
        </div>
      </div>
    </div>
  );
}
