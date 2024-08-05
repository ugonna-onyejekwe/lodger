"use client";
import "./styles.scss";
import Image from "next/image";
import { useParams } from "next/navigation";
import { houseData } from "@/components/data";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { BiCheckDouble } from "react-icons/bi";
import { PiShareFatBold } from "react-icons/pi";
import avatar from "@/assets/avatar.jpg";
import { ContactAgent } from "@/components/contact_agent";

import {
  ForRentBtn,
  ForSaleBtn,
  RoommateWantedBtn,
} from "@/components/buttons/buttons";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { OverlayImage } from "@/components/overlayImage/overlayImage";
import { useState } from "react";

export default function HomeDetails({ params }: { params: string }) {
  const [imageIsActive, setImageIsActive] = useState(false);

  const { id } = useParams();
  const house: HouseType | undefined = houseData.find(
    (i) => i.houseId === Number(id)
  );

  return (
    <div className="home_details_page">
      <div className="container">
        <div className="img_wrapper" onClick={() => setImageIsActive(true)}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="img_swiper_con"
          >
            {house?.images?.map((image) => {
              return (
                <SwiperSlide>
                  <img src={image} alt="image" />
                </SwiperSlide>
              );
            })}

            <div className="tag">
              {house?.forSale === true ? <ForSaleBtn /> : <ForRentBtn />}
            </div>
          </Swiper>

          <div className="img_box_con">
            <div className="img_box">
              <img src={house?.images[1]} alt="house image" />
            </div>
            <div className="img_box">
              <img src={house?.images[2]} alt="house image" />

              <div className="overlay">
                <p>
                  +{house?.images?.length ? house?.images?.length - 2 : null}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="detail_wrapper">
          <div className="txt_con">
            <div className="price_con">
              <h3>
                <span>
                  <TbCurrencyNaira />
                </span>
                {house?.price.toLocaleString()}
                {house?.forSale ? "" : <small>/{house?.durationOfPay}</small>}
              </h3>

              <span className="share_btn">
                <PiShareFatBold />
              </span>
            </div>

            <p className="name">{house?.name}</p>

            <p className="address">
              <span>
                <IoLocationOutline />
              </span>

              {house?.address}
            </p>

            {house?.roommateWanted && (
              <div className="roomate_wanted_con">
                <RoommateWantedBtn />
                <p> Actively looking for roomate</p>
              </div>
            )}
            <div className="house_category">
              {house?.category?.map((i, key) => (
                <span key={key}>{i}</span>
              ))}
            </div>

            <div className="txt">
              <h4>house details</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                corporis doloremque sit porro praesentium optio deleniti fuga
                tempore, in pariatur amet earum sint sequi debitis ipsa harum
                cumque atque nam.
              </p>
            </div>

            <div className="facilities">
              <h4>facilities and amenities</h4>

              <ul>
                <li>
                  <span>
                    {" "}
                    <BiCheckDouble />
                  </span>
                  Runing water
                </li>

                <li>
                  <span>
                    {" "}
                    <BiCheckDouble />
                  </span>
                  Runing water
                </li>

                <li>
                  <span>
                    {" "}
                    <BiCheckDouble />
                  </span>
                  Runing water
                </li>

                <li>
                  <span>
                    {" "}
                    <BiCheckDouble />
                  </span>
                  Runing water
                </li>

                <li>
                  <span>
                    {" "}
                    <BiCheckDouble />
                  </span>
                  Runing water
                </li>

                <li>
                  <span>
                    {" "}
                    <BiCheckDouble />
                  </span>
                  Runing water
                </li>
              </ul>
            </div>
          </div>

          <div className="agent_con">
            <h4> agent details</h4>
            <div className="main_con">
              <div className="wrapper">
                <div className="avatar_con">
                  <Image src={avatar} alt="agent image" />
                </div>

                <div className="txt_con">
                  <h5>ugonna onyejekwe</h5>
                  <p>
                    <span>
                      <IoLocationOutline />
                    </span>{" "}
                    behind flat, nsukka
                  </p>
                </div>
              </div>

              <ContactAgent />
            </div>
          </div>
        </div>
      </div>
      <OverlayImage
        images={house?.images}
        setImageIsActive={setImageIsActive}
        openOverlayImages={imageIsActive}
      />
    </div>
  );
}
