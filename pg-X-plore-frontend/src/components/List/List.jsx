import React from "react";
import "./List.scss";
import { listData } from "../../lib/dummyData";
import Card from "../Card/Card";
export default function List() {
  return (
    <div>
      {listData.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
}
