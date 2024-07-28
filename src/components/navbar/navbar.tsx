"use client";
import "./styles.scss";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../assets/avatar.jpg";
import { Logo } from "../logo/logo";

export default function Navbar() {
  return (
    <div
      className="navbar"
      style={{
        display: `${window.location.pathname === "/login" ? "none" : "block"}`,
      }}
    >
      <div className="container">
        <Logo />

        <div className="navigators">
          <div className="links">
            <Link href={"/"}> home</Link>
            {false && (
              <Link href={"/"} className="btn login_btn">
                login{" "}
              </Link>
            )}
            {false && (
              <Link href={"/"} className="btn signin_btn">
                sign up
              </Link>
            )}
          </div>

          <Link href="/" className="user_con">
            <div className="avatar">
              <Image src={avatar} alt="image" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
