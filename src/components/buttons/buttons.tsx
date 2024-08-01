import { useState } from "react";
import "./styles.scss";

export const OnOffBtn = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className={isOn ? "off_on_btn_con on" : "off_on_btn_con off"}
      onClick={() => setIsOn(!isOn)}
    >
      <div className="btn"></div>
    </div>
  );
};

export const ForSaleBtn = () => {
  return (
    <div className="for_sale_btn_con">
      <small className="for_sale">for sale</small>
    </div>
  );
};

export const ForRentBtn = () => {
  return (
    <div className="for_rent_btn_con">
      <small className="for_rent">for rent</small>
    </div>
  );
};

export const RoommateWantedBtn = () => {
  return (
    <div className="roommate_wanted_con">
      <div className="roommate_wanted"></div>
    </div>
  );
};
