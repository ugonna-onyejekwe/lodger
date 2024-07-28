"use client";
import "./page.scss";
import { useState } from "react";
import { House } from "@/components/house-box";
import { houseData } from "@/components/data";

export default function Home() {
  const [houseList, setHouseList] = useState(houseData);
  return (
    <section className="home_page">
      <div className="container">
        <div className="box_con">
          {houseList.map((house, key) => {
            return (
              <House
                houseId={house.houseId}
                // images={house.images}
                address={house.address}
                type={house.type}
                price={house.price}
                durationOfPay={house.durationOfPay}
                name={house.name}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
