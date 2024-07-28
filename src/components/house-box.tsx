import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoLocationOutline,
} from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";

// Image import
import image from "../assets/signUp-bg.jpg";

export const House = ({
  houseId,
  price,
  type,
  address,
  name,
  durationOfPay,
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
        <Image src={image} alt="image" />
      </div>

      <div className="txt_con">
        <h3>
          <span>
            <TbCurrencyNaira />
          </span>
          {price.toLocaleString()}
          <small>/{durationOfPay}</small>
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
