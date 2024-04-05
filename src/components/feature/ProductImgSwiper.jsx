import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Button from "@/components/base/Button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductImgSwiper = ({ images }) => {
  const ref = useRef();

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (ref.current = swiper)}
      >
        {images?.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="light"
          onClick={() => ref.current.slidePrev()}
        >
          Önceki
        </Button>
        <Button
          size="sm"
          variant="light"
          onClick={() => ref.current.slideNext()}
        >
          Sonraki
        </Button>
      </div>
    </>
  );
};

export default ProductImgSwiper;
