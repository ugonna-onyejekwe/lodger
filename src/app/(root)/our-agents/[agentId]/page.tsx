"use client";
import "./styles.scss";
import { houseData } from "@/components/data";
import { House } from "@/components/house-box";

export default function Listings() {
  return (
    <div className="listing_wrapper">
      {houseData.map((i, key) => {
        return <House {...i} key={key} />;
      })}
    </div>
  );
}
