"use client";
import "./style.scss";
import Image from "next/image";
import loginImage from "@/assets/signUp-bg.jpg";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="login_page auth_page">
      <section className="form_container">
        <h1 className="logo">
          <span></span>
          lodgeFinder
        </h1>

        <h2>join our network</h2>
        <p className="txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          asperiores illum rerum dolorum impedit cupiditate, eaque.
        </p>

        <button className="google_signIn">
          <span>
            <FcGoogle />
          </span>{" "}
          Sign in with google
        </button>

        <div className="divider">or</div>

        <form action="#">
          <div className="input_con">
            <input type="email" name="email" id="email" placeholder="email" />
            {false && <span className="error">no name</span>}
          </div>

          <div className="input_con">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            {false && <span className="error">no name</span>}
          </div>

          <button type="submit" className="submit_btn">
            sign in
          </button>
        </form>

        <p className="switch">
          Don't have an account? <Link href="/">sign up</Link>
        </p>
      </section>
      <div className="img_con">
        <Image src={loginImage} alt="image" />

        <div className="txt_con">
          <h2>welcome!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            vitae recusandae possimus! Neque a repudiandae deleniti nostrum
            explicabo quos quae ratione dignissimos. Voluptatum officiis
            distinctio porro voluptates aspernatur voluptas id.
          </p>
        </div>
      </div>
    </div>
  );
}
