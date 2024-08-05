"use client";
import "./styles.scss";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../assets/avatar.jpg";
import { Logo } from "../logo/logo";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="container">
          <Logo />

          <div className="search_bar">
            <input
              type="search"
              placeholder="Search by address, city or zip code"
            />
          </div>

          <div className={isActive ? "navigators active" : "navigators"}>
            <div
              className="menu_btn close_btn"
              onClick={() => setIsActive(false)}
            >
              <IoClose />
            </div>
            <div className="links">
              <Link href={"/"}> all</Link>
              <Link href={"/"}> rent</Link>
              <Link href={"/"}> buy</Link>
              <Link href={"/"}>our agents</Link>
            </div>

            {false ? (
              <Link href={"/"} className="btn login_btn">
                login
              </Link>
            ) : (
              <Link href="/user-profile" className="user_con">
                <div className="avatar">
                  <Image src={avatar} alt="image" />
                </div>

                <p>profile</p>
              </Link>
            )}
          </div>

          <div className="menu_btn open_btn" onClick={() => setIsActive(true)}>
            <LuMenu />
          </div>
        </div>

        <div className={isActive ? "backdrop active" : "backdrop"}></div>
      </div>
    </>
  );
}
