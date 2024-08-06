export const SignUpForm = () => {
  return (
    <form action="#">
      <section>
        <h3>personal info</h3>
        <div className="box_con">
          <div className="col">
            <div className="box">
              <div className="input_con">
                <input type="text" placeholder="First name" />
              </div>
            </div>

            <div className="box">
              <div className="input_con">
                <input type="text" placeholder="Last name" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="input_con">
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <div className="col">
            <div className="box">
              <div className="input_con">
                <input type="number" placeholder="Phone No." />
              </div>
            </div>

            <div className="box">
              <div className="input_con">
                <input type="number" placeholder="WhatsApp No." />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="box">
              <div className="input_con">
                <input type="password" placeholder="Password" />
              </div>
            </div>

            <div className="box">
              <div className="input_con">
                <input type="password" placeholder="Confirm password" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>location</h3>

        <div className="box_con">
          <div className="col">
            <div className="box">
              <div className="input_con">
                <input type="text" placeholder="Address" />
              </div>
            </div>

            <div className="box">
              <div className="input_con">
                <input type="text" placeholder="Town" />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="box">
              <div className="input_con">
                <input type="text" placeholder="State" />
              </div>
            </div>

            <div className="box">
              <div className="input_con">
                <input type="text" placeholder="Country" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="btn_section">
        <button>next</button>
      </div>
    </form>
  );
};
