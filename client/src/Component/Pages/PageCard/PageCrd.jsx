import React from "react";
import "./PageCard.css";
import CardHeading from "./CardHeading";
import { PiPlugChargingBold } from "react-icons/pi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillTag } from "react-icons/ai";

const PageCrd = () => {
  return (
    <div className="pagecard">
      <CardHeading />
      <div className="card_bottom_section">
        <p className="user_p">user : markus ulrich</p>
        <div className="buttons_card">
          <div>
            <div className="card_button">
              <PiPlugChargingBold />
              <p>My Profile</p>
            </div>
            <div className="card_button">
              <AiFillTag />
              <p>Charging Plan</p>
            </div>
          </div>
          <div>
            <div className="card_button">
              <AiOutlineClockCircle />
              <p>Charging History</p>
            </div>
            <div className="card_button card_button_last">
              <p className="bold">blabla</p>
            </div>
          </div>
        </div>
        {/* -------------------------- charging Process  */}
        <div className="carging_process">
          <p className="bold">Charging Process</p>
          <img src="./images/chargingp.PNG" alt="" />
          <span>derzwitige Ladezeit fur 100lm: 2h</span>
          <p>geladen: 67.KWH @ 0.3€/KWH=20.34€</p>
          <p>lot#23. eaaioraier-street. berlin</p>
          <a>back</a>
        </div>
      </div>
    </div>
  );
};

export default PageCrd;
