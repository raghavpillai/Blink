import React from "react";
import axios from "axios"

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
            {/* axios.get("http://localhost:4000/api/user/info/classes/"+username).then((response) => console.log(response.data)); */}

            {/* axios.get("http://localhost:4000/api/class/info/"+class).then((response) => console.log(response.data)); */}

            <ClassItem
              src={img}
              text="Mathematics / 11:30 - 12:30"
              label="Mrs. BJÖRKSNÄS"
              path="/studentview"
            />
            <ClassItem
              src={img}
              text="Science / 1:00 - 2:00"
              label="Mr. FJÄDERMOLN"
              path="/studentview"
            />
            <ClassItem
              src={img}
              text="English / 9:30 - 10:30"
              label="Mr. FRÖJERED"
              path="/studentview"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
