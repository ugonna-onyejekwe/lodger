import { useState } from "react";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoLocationOutline,
} from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";
import { ForRentBtn, ForSaleBtn, RoommateWantedBtn } from "./buttons/buttons";

export const House = ({
  houseId,
  price,
  type,
  images,
  address,
  name,
  durationOfPay,
  roommateWanted,
  forSale,
}: HouseType) => {
  const [bookMarked, setBookMarked] = useState(false);

  return (
    <div
      className="house_box"
      onClick={(e: any) => {
        if (
          e.target.className !== "bookmark_btn" &&
          e.target.parentNode.className !== "bookmark_btn"
        ) {
          window.location.replace(`/house-details/${houseId}`);
        }
      }}
    >
      <div className="img_con">
        <img src={images[0]} alt="image" />

        {roommateWanted && (
          <div className="active_btn">
            <RoommateWantedBtn />
          </div>
        )}

        <div className="btn">{forSale ? <ForSaleBtn /> : <ForRentBtn />}</div>
      </div>

      <div className="txt_con">
        <h3>
          <span>
            <TbCurrencyNaira />
          </span>
          {price.toLocaleString()}
          {forSale || <small>/{durationOfPay}</small>}
        </h3>

        <h4>{name.length > 30 ? name.slice(0, 35) + "..." : name}</h4>

        <div className="btn_section">
          <p className="location">
            <span>
              <IoLocationOutline />
            </span>
            {address}
          </p>
          <span
            className="bookmark_btn"
            onClick={(e) => {
              setBookMarked(!bookMarked);
            }}
          >
            {bookMarked ? (
              <IoHeartSharp className="bookmark_icon" />
            ) : (
              <IoHeartOutline className="bookmark_icon" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
