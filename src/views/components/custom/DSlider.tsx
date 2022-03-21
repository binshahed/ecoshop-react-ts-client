import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import "scss/DSlider.css";

const DSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        className="mySwiper text-center"
      >
        <SwiperSlide style={{ width: "100%" }}>
          <div className="header slide-1">
            <h1 className="page-heading">
              <span className="page-heading-primary">Arison Designs</span>
              <span className="page-heading-secondary">
                Your future awaits!
              </span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header slide-2">
            <h1 className="page-heading">
              <span className="page-heading-primary">Arison Designs</span>
              <span className="page-heading-secondary">
                Your future awaits!
              </span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header slide-3">
            <h1 className="page-heading">
              <span className="page-heading-primary">Arison Designs</span>
              <span className="page-heading-secondary">
                Your future awaits!
              </span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header slide-4">
            <h1 className="page-heading">
              <span className="page-heading-primary">Arison Designs</span>
              <span className="page-heading-secondary">
                Your future awaits!
              </span>
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DSlider;
