import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

export const ContactAgent = () => {
  const [formIsActive, setFormIsActive] = useState(false);

  return (
    <div className="contact_section">
      {formIsActive ? (
        <h4>Send agent a message</h4>
      ) : (
        <p className="thanks_message">
          Thanks for your massage! <br />
          Our agent will get back to you as soon as possible <br />
          or
          <br />
          <b>You can still futher your conversation through;</b>
        </p>
      )}

      <div
        className="form_wrapper"
        style={{
          display: `${formIsActive ? "block" : "none"}`,
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input_con">
            <input type="text" placeholder="Name" />
          </div>

          <div className="input_con">
            <input type="text" placeholder="Number(whatsApp No. preferred)" />
          </div>

          <div className="input_con">
            <textarea placeholder="Message(optional)"></textarea>
          </div>

          <button type="submit" onClick={() => setFormIsActive(false)}>
            send
          </button>
        </form>
      </div>

      <div
        className="contact_btns"
        style={{
          display: `${formIsActive ? "none" : "flex"}`,
        }}
      >
        <button onClick={() => setFormIsActive(true)}>
          <FaWhatsapp />
        </button>

        <button className="trans" onClick={() => setFormIsActive(true)}>
          <IoCallOutline />
        </button>
      </div>
    </div>
  );
};
