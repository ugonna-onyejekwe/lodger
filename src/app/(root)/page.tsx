"use client";
import "./page.scss";
import { useState } from "react";
import { House } from "@/components/house-box";
import { houseData } from "@/components/data";
import { FilterContainer } from "@/components/filter/filter";

export default function Home() {
  const [houseList, setHouseList] = useState(houseData);
  return (
    <section className="home_page">
      <div className="container">
        <div className="filter_section">
          <FilterContainer />
        </div>
        <div className="house_wrapper">
          {houseList.map((house, key) => {
            return <House {...house} key={key} />;
          })}
        </div>
      </div>
    </section>
  );
}
