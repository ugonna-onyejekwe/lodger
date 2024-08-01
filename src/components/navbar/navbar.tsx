"use client";
import "./styles.scss";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../assets/avatar.jpg";
import { Logo } from "../logo/logo";
import { MdFilterList, MdOutlineExplore } from "react-icons/md";
import { useState } from "react";
import { PiHandCoinsFill } from "react-icons/pi";
import { BiFilterAlt } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";

export default function Navbar() {
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

          <div className="navigators">
            <div className="links">
              <Link href={"/"}> all</Link>
              <Link href={"/"}> rent</Link>
              <Link href={"/"}> buy</Link>
            </div>

            {true ? (
              <Link href={"/"} className="btn login_btn">
                login
              </Link>
            ) : (
              <Link href="/" className="user_con">
                <div className="avatar">
                  <Image src={avatar} alt="image" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="tablet_nav">
        <div className="container">
          <Link href="/">
            <small>
              <MdOutlineExplore />
            </small>
            <span>all</span>
          </Link>

          <Link href="/">
            <small>
              <PiHandCoinsFill />
            </small>
            <span>rent</span>
          </Link>

          <Link href="/">
            <small>
              <FaChartLine />
            </small>
            <span>buy</span>
          </Link>

          <Link href="/">
            <small>
              <BiFilterAlt />
            </small>
            <span>filter</span>
          </Link>
        </div>
      </div>
    </>
  );
}
