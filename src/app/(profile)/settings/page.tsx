import "./style.scss";

export default function Settings() {
  return (
    <section className="settings_wrapper">
      <div className="profile_section con">
        <h3>profile </h3>

        <div className="form_con">
          <form action="#">
            <div className="input_con">
              <input type="text" placeholder="First name" />
            </div>

            <div className="input_con">
              <input type="text" placeholder="Last name" />
            </div>

            <div className="input_con">
              <input type="email" placeholder="Email" />
            </div>

            <div className="input_con">
              <input type="number" placeholder="Phone Number" />
            </div>
          </form>

          <div className="btn">
            <button>update</button>
          </div>
        </div>
      </div>

      <div className="profile_section con">
        <h3>personal infomation</h3>

        <div className="form_con">
          <form action="#">
            <div className="input_con">
              <input type="text" placeholder="Country" />
            </div>

            <div className="input_con">
              <input type="text" placeholder="State" />
            </div>

            <div className="input_con">
              <input type="email" placeholder="Address" />
            </div>

            <div className="input_con">
              <input type="number" placeholder="WhatsApp Number" />
            </div>
          </form>

          <div className="btn">
            <button>update</button>
          </div>
        </div>
      </div>

      <div className="profile_section con">
        <h3>authentication</h3>

        <div className="form_con">
          <form action="#">
            <div className="input_con">
              <input type="password" placeholder="Password" />
            </div>

            <div className="input_con">
              <input type="password" placeholder="Confirm Password" />
            </div>
          </form>

          <div className="btn">
            <button>change password</button>
          </div>
        </div>
      </div>
    </section>
  );
}
