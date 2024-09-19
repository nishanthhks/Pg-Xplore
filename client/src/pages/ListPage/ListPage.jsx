import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import Map from "../../components/Map/Map";
import { listData } from "../../lib/dummyData";
import "./ListPage.scss";
import ArrowDown from "../../assets/icons/ArrowDown";
import ArrowUp from "../../assets/icons/ArrowUp";

export default function ListPage() {
  let data = listData;
  const [expand, setExpand] = useState(false);
  
  // console.log(data);
  return (
    <>
      {/* <div className="listPage"> */}
        <div className="page-container">
          <div className="listContainer">

            <Filter />
            {data.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
            <Card />
          </div>
          <div
            style={{ ...(expand ? { height: "300%" } : {}) }}
            className="mapContainer">
            <button
              className="expandButton"
              onClick={() => {
                setExpand((prev) => !prev);
              }}>
              {expand ? <ArrowDown /> : <ArrowUp />}
            </button>

            <Map data={data} />
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
