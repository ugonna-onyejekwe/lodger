import "./styles.scss";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const OverlayImage = ({
  images,
  openOverlayImages,
  setImageIsActive,
}: {
  images?: string[];
  openOverlayImages: boolean;
  setImageIsActive: any;
}) => {
  return (
    <section
      className={
        openOverlayImages
          ? "overlay_image_wrapper active"
          : "overlay_image_wrapper"
      }
    >
      <div className="container">
        <div className="close_btn" onClick={() => setImageIsActive(false)}>
          <IoMdClose />
        </div>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".next_btn",
            prevEl: ".prev_btn",
          }}
          pagination={{ clickable: true }}
          className="img_swiper"
        >
          {images?.map((image) => {
            return (
              <SwiperSlide>
                <img src={image} alt="image" />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="nav_btns">
          <span className="next_btn">
            <FaArrowRight />
          </span>
          <span className="prev_btn">
            <FaArrowLeft />
          </span>
        </div>
      </div>
    </section>
  );
};
