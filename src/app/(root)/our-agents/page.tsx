import { agents } from "@/components/data";
import "./styles.scss";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { PiHouseLight } from "react-icons/pi";
import { BsHouseCheck } from "react-icons/bs";

export default function OurAgents() {
  return (
    <section className="our_agent_section">
      <div className="container">
        {agents.map((i, key) => {
          return (
            <Link href={`/our-agents/${i.agentId}`} className="box" key={key}>
              <div className="img_con">
                <img src={i.image} alt="image" />
              </div>

              <div className="txt_con">
                <p className="rating">
                  {i.averageRating}{" "}
                  <small>
                    <FaStar />
                  </small>
                </p>
                <h3>{i.name}</h3>
                <p>
                  <span>
                    <IoLocationOutline />
                  </span>{" "}
                  {i.location}
                </p>

                <div className="property">
                  <p>
                    {" "}
                    <span>
                      <PiHouseLight />
                    </span>
                    Listings: {i.listing}
                  </p>
                  <p>
                    {" "}
                    <span>
                      <BsHouseCheck />
                    </span>
                    Closed deal: {i.closedDeal}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
