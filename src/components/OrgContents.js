import React from "react";
import axios from "axios";
import Username from './Username';

import "../styles/OrgContents.css";
import ClassItem from "./ClassItem";
import img from "../images/class.jpg";

function Cards(prop) {
  let classes = [];
  const user = new Username();
  user.name = ""
  axios.get("http://localhost:4000/api/user/info/classes/" + prop).then((response => classes))



  // axios.get("http://localhost:4000/api/class/info/"+class).then((response) => console.log(response.data));


  return (
    <div className="cards h-screen">
      <title>Organizations</title>
      <p>My classes</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">

            {/* {classes.map(elem => (
              <ClassItem
                src={img}
                text={`${elem.name}` + " " + `${elem.date}`}
                label={`${elem.teacher}`}
              />

            ))} */}



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
