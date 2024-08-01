import { TbCurrencyNaira } from "react-icons/tb";
import { OnOffBtn } from "../buttons/buttons";
import "./styles.scss";

export const FilterContainer = () => {
  return (
    <div className="filter_container">
      <div className="wrapper">
        <div className="col active_roommate_col">
          <OnOffBtn />
          <h4>Actively looking for roommate</h4>
        </div>

        <div className="col house_type_col">
          <h3>type of house</h3>

          <div className="box_con">
            <div className="box">
              <label htmlFor="home">house</label>
              <input type="checkbox" id="home" />
            </div>

            <div className="box">
              <label htmlFor="condo">condo</label>
              <input type="checkbox" id="condo" />
            </div>

            <div className="box">
              <label htmlFor="townhome">townhome</label>
              <input type="checkbox" id="townhome" />
            </div>

            <div className="box">
              <label htmlFor="multi-family">multi-family</label>
              <input type="checkbox" id="multi-family" />
            </div>

            <div className="box">
              <label htmlFor="land">land</label>
              <input type="checkbox" id="land" />
            </div>

            <div className="box">
              <label htmlFor="self-con">self-con</label>
              <input type="checkbox" id="self-con" />
            </div>

            <div className="box">
              <label htmlFor="other">other</label>
              <input type="checkbox" id="other" />
            </div>
          </div>
        </div>

        <div className="col bedrooms_col">
          <h3>bedrooms</h3>

          <div className="box_con">
            <select>
              <option value="1 bedroom">1 bedroom</option>
              <option value="2 bedrooms">2 bedrooms</option>
              <option value="3 bedrooms">3 bedrooms</option>
              <option value="4 bedrooms">4 bedrooms</option>
              <option value="5+ bedrooms">5+ bedrooms</option>
            </select>
          </div>
        </div>

        <div className="col price_col">
          <h3>
            price (
            <span>
              <TbCurrencyNaira />
            </span>
            )
          </h3>

          <div className="box_con">
            <div className="input_box">
              <input type="number" placeholder="min" />
            </div>
            -
            <div className="input_box">
              <input type="number" placeholder="max" />
            </div>
          </div>
        </div>

        <div className="col amen_col">
          <h3>amenities & facilities</h3>

          <div className="box_con">
            <div className="box">
              <label htmlFor="runing-water">runing water</label>
              <input type="checkbox" id="runing-water" />
            </div>

            <div className="box">
              <label htmlFor="prepaid"> Uses prepaid</label>
              <input type="checkbox" id="prepaid" />
            </div>
            <div className="box">
              <label htmlFor="balcony"> Has balcony</label>
              <input type="checkbox" id="balcony" />
            </div>
            <div className="box">
              <label htmlFor="school-area"> Within School area</label>
              <input type="checkbox" id="school-area" />
            </div>
          </div>
        </div>
      </div>

      <div className="btn_con">
        <button>Apply filter</button>
        <button className="trans">clear filter</button>
      </div>
    </div>
  );
};
