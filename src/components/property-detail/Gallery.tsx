import bedroom from "../../assets/home-gallery/bedroom.jpg";
import flat_plan from "../../assets/home-gallery/flat_plan.jpg";
import kitchen from "../../assets/home-gallery/kitchen.jpg";
import living_room from "../../assets/home-gallery/living_room.jpg";
import panorama from "../../assets/home-gallery/panorama.bmp";
import one_house from "../../assets/home-gallery/one_house.jpg";
import house_plan from "../../assets/home-gallery/house_plan.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Stack } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Colors } from "../../theme/colors.ts";

export const Gallery = () => {
  const images = [living_room, bedroom, kitchen, panorama, one_house];
  const plans = [flat_plan, house_plan];
  return (
    <Stack id={"gallery"} display={"block"}>
      <Swiper navigation={true} modules={[Navigation]} spaceBetween={0} slidesPerView={1} loop={true}>
        {images.map((image, i) => (
          <SwiperSlide key={i} style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
            <img src={image} alt={`Gallery image ${i + 1}`} style={{ height: "auto", width: "100%" }} />
          </SwiperSlide>
        ))}

        {plans.map((plan, i) => (
          <SwiperSlide
            key={i}
            style={{ width: "100%", height: "100vh", textAlign: "center", backgroundColor: Colors.white }}
          >
            <img src={plan} alt={`Gallery image ${images.length + 1}`} style={{ height: "100%", width: "auto" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};
