"use client";
import { BsHouseCheck } from "react-icons/bs";
import "./styles.scss";
import { agents } from "@/components/data";
import { FaPhoneAlt } from "react-icons/fa";
import { FaStar, FaWhatsapp } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiShareForwardLine, RiVerifiedBadgeFill } from "react-icons/ri";
import { PiHouseLight } from "react-icons/pi";
import Link from "next/link";

interface AgentParamsProps {
  children: React.ReactNode;
  params: {
    agentId: string;
  };
}

export default function Layout({ params, children }: AgentParamsProps) {
  const { agentId } = params;
  const agentInfo = agents.find((i) => i.agentId === Number(agentId));

  return (
    <section className="agent_page">
      <div className="container">
        <div className="profile_section">
          <div className="col1">
            <div className="img_wrapper">
              <div className="img_con">
                <img src={agentInfo?.image} alt="agent image" />
              </div>
            </div>

            <div className="txt_con">
              <div className="top_agent_badge">
                {agentInfo?.averageRating && agentInfo?.averageRating >= 4.5 ? (
                  <p>
                    top agent{" "}
                    <span>
                      <RiVerifiedBadgeFill />
                    </span>
                  </p>
                ) : (
                  ""
                )}
              </div>

              <h3>{agentInfo?.name}</h3>
              <p>
                <span>
                  <IoLocationOutline />
                </span>{" "}
                {agentInfo?.location}
              </p>
              <p>
                Languages:{" "}
                {agentInfo?.language?.map((i, key) => {
                  return <b key={key}>{i}</b>;
                })}{" "}
              </p>
            </div>
          </div>

          <div className="col2">
            <p>
              <b>{agentInfo?.name}</b> is always available for you
            </p>

            <div className="btn_sections">
              <button>
                <span>
                  <FaWhatsapp />
                </span>{" "}
                whatsapp
              </button>

              <button>
                <span>
                  <FaPhoneAlt />
                </span>
                call
              </button>

              <button className="share_btn">
                <RiShareForwardLine />
              </button>
            </div>
          </div>
        </div>

        <div className="status_container">
          <div className="box">
            <div className="div">
              <h4>{agentInfo?.averageRating}</h4>
              <span>
                <FaStar />
              </span>
            </div>

            <small>Ratings</small>
          </div>

          <div className="box">
            <div>
              <h4>{agentInfo?.listing}</h4>
              <span>
                <PiHouseLight />
              </span>
            </div>

            <small>Listings</small>
          </div>

          <div className="box">
            <div>
              <h4>{agentInfo?.closedDeal}</h4>
              <span>
                <BsHouseCheck />
              </span>
            </div>

            <small>Closed deal</small>
          </div>
        </div>

        <div className="main_wrapper">
          <div className="nav">
            <Link href={`listing`}>Listings</Link>
            <Link href={`${agentId}/reviews`}>reviews</Link>
          </div>

          <div className="wrapper">{children}</div>
        </div>
      </div>
    </section>
  );
}
