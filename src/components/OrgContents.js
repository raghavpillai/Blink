import React from "react";
import "../styles/OrgContents.css";
import ClassItem from "./ClassItem";
import img from "../images/class.jpg"

function Cards() {
  return (
    <div className="cards h-screen">
      <title>Organizations</title>
      <p>My classes</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ClassItem
              src={img}
              text="Mathematics / 11:30 - 12:30"
              label="Mrs. BJÖRKSNÄS"
              path="https://hypixel.net"
            />
            <ClassItem
              src={img}
              text="Science / 1:00 - 2:00"
              label="Mr. FJÄDERMOLN"
              path="https://hypixel.net"
            />
            <ClassItem
              src={img}
              text="English / 9:30 - 10:30"
              label="Mr. FRÖJERED"
              path="https://hypixel.net"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
