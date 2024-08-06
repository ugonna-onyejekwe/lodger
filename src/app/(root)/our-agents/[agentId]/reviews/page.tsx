import "./styles.scss";
import { reviews } from "@/components/data";
import { FaStar } from "react-icons/fa6";

export default function Reviews() {
  return (
    <section className="review_page">
      <div className="form_wrapper">
        <h3>leave a review</h3>

        <form action="#">
          <div className="input_box">
            <input type="text" placeholder="Name" />
          </div>

          <div className="input_box">
            <input type="number" placeholder="Rating" max={5} />
          </div>

          <div className="input_box">
            <textarea placeholder="Your comment"></textarea>
          </div>

          <button>send</button>
        </form>
      </div>

      <div className="reviews_wrapper">
        <div className="box_con">
          {reviews.map((i, key) => {
            return (
              <div className="box" key={key}>
                <div className="header">
                  <h4>- {i.name}</h4>

                  <p>
                    {i.rating}{" "}
                    <span>
                      <FaStar />
                    </span>
                  </p>
                </div>

                <p className="txt">{i.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
