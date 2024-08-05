import { agents } from "@/components/data";
import "./styles.scss";
import Link from "next/link";

export default function OurAgents() {
  return (
    <section className="our_agent_section">
      <div className="container">
        {agents.map((i, key) => {
          return (
            <Link href={`/our-agent/${i.agentId}}`} className="box" key={key}>
              <div className="img_con">
                <img src={i.image} alt="image" />
              </div>

              <div className="txt_con">
                <h3>{i.name}</h3>
                <p>{i.location}</p>
                <p>Listng: {i.listing}</p>
                <p>Closed deal: {i.closedDeal}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
