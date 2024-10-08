import React, { useState } from "react";
import "./SearchBar.scss";
import Search from "../../assets/icons/Search";
import "../../styles/colors.scss"

export default function SearchBar() {
  const [searchData, setSearchData] = useState({
    type: "stay",
    lication: "",
    minPrice: 0,
    maxprice: 0,
  });
  const types = ["stay", "rent"];

  const switchType = (val) => {
    setSearchData((prev) => ({ ...prev, type: val }));
  };

  return (
    <section className="search-bar">
    
      <div className="types">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={searchData.type === type ? "active" : ""}>
            {type}
          </button>
        ))}
      </div>

      <form action="/">
        <input
          type="text"
          name="location"
          id="location"
          placeholder="City Location"
        />
        <input
          type="text"
          name="minPrice"
          id="minPrice"
          placeholder="Min Price"
        />
        <input
          type="text"
          name="maxPrice"
          id="maxPrice"
          placeholder="max Price"
        />
        {/* stay arent */}
        <div className="search-button">
          <Search  color="rgb(20, 61, 123)"/>
        </div>
      </form>
    </section>
  );
}
