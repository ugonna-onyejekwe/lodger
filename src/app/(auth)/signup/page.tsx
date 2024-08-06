"use client";

import { Logo } from "@/components/logo/logo";
import "./styles.scss";
import { BsCheck2Circle } from "react-icons/bs";
import { useState } from "react";
import { SignUpForm } from "@/components/signupForm";

export default function SignUp() {
  const [isAgent, setIsAgent] = useState(false);

  return (
    <div className="signup_page">
      <div className="container">
        <div className="logo_con">
          <Logo />
        </div>
        <div className="wrapper">
          <h2>let's get you started</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint
            inventore id doloremque quos.
          </p>

          {/* form for sign up */}
          <SignUpForm />

          {/* type of user section */}
          <div className="user_category_section">
            <div
              className={isAgent ? "box_con " : "box_con active"}
              onClick={() => setIsAgent(false)}
            >
              <h4>sign up as a client</h4>

              <div className="benefits">
                <p>
                  <span>
                    <BsCheck2Circle />
                  </span>
                  Free access to all agents contact
                </p>
                <p>
                  <span>
                    <BsCheck2Circle />
                  </span>
                  Free access to checkout property avaliablity
                </p>
                <p className="disabled">
                  <span>
                    <BsCheck2Circle />
                  </span>
                  Free access to posting
                </p>
                <p className="disabled">
                  <span>
                    <BsCheck2Circle />
                  </span>
                  Free 10 clients contact on first registration
                </p>
              </div>
            </div>

            <div
              className={isAgent ? "box_con active" : "box_con"}
              onClick={() => setIsAgent(true)}
            >
              <h4>sign up as an agent</h4>

              <div className="benefits">
                <p>
                  <span>
                    <BsCheck2Circle />
                  </span>
                  Free access to all agents contact
                </p>
                <p>
                  <span>
                    <BsCheck2Circle />
                  </span>
                  Free access to checkout property avaliablity
                </p>
                <p>
                  <span>
                    <BsCheck2Circle />
                  </span>
                  Unlimited access to posting
                </p>
                <p>
                  <span>
                    <BsCheck2Circle />
                  </span>
                  Free 10 clients contact for new users
                </p>
              </div>
            </div>

            <div className="btn_section">
              <button>register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
