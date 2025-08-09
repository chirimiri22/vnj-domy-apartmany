import bedroom from "../../assets/home-gallery/bedroom.jpg";
import flat_plan from "../../assets/home-gallery/flat_plan.jpg";
import kitchen from "../../assets/home-gallery/kitchen.jpg";
import living_room from "../../assets/home-gallery/living_room.jpg";
import panorama from "../../assets/home-gallery/panorama.bmp";
import one_house from "../../assets/home-gallery/one_house.jpg";
import house_plan from "../../assets/home-gallery/house_plan.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { GlobalStyles, Stack } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Colors } from "../../theme/colors.ts";

const isMobile = window.innerWidth <= 768; // Adjust this value based on your mobile breakpoint

export const Gallery = () => {
  const images = [living_room, bedroom, kitchen, panorama, one_house];
  const plans = [flat_plan, house_plan];
  return (
    <Stack
      id={"gallery"}
      display={"block"}
      sx={
        {
          // "--swiper-navigation-color": Colors.primary,
          // "--swiper-navigation-size": "20px", // optional
        }
      }
    >
      <GlobalStyles
        styles={{
          ".swiper-button-next, .swiper-button-prev": {
            backgroundColor: "black",
            fontWeight: 900,
            color: Colors.primary, // this is fallback, overridden by the CSS var
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            zIndex: 10,
          },
          ".swiper-button-next::after, .swiper-button-prev::after": {
            fontSize: "16px",
          },
        }}
      />
      <Swiper navigation={true} modules={[Navigation]} spaceBetween={0} slidesPerView={1} loop={true}>
        {images.map((image, i) => (
          <SwiperSlide
            key={i}
            style={
              window.innerWidth <= 768
                ? { width: "100vw", maxWidth: "100vw", height: "auto", aspectRatio: "4 / 3", overflow: "hidden" }
                : { width: "100%", height: "100vh", overflow: "hidden" }
            }
          >
            <img
              src={image}
              alt={`Gallery image ${i + 1}`}
              style={
                window.innerWidth <= 768
                  ? { width: "100%", height: "100%", objectFit: "cover", aspectRatio: "4 / 3", maxWidth: "100vw" }
                  : { height: "auto", width: "100%" }
              }
            />
          </SwiperSlide>
        ))}

        {plans.map((plan, i) => (
          <SwiperSlide
            key={i}
            style={
              window.innerWidth <= 768
                ? {
                    width: "100vw",
                    maxWidth: "100vw",
                    height: "auto",
                    aspectRatio: "4 / 3",
                    textAlign: "center",
                    backgroundColor: Colors.white,
                  }
                : { width: "100%", height: "100vh", textAlign: "center", backgroundColor: Colors.white }
            }
          >
            <img
              src={plan}
              alt={`Gallery image ${images.length + 1}`}
              style={
                window.innerWidth <= 768
                  ? { width: "100%", height: "100%", objectFit: "contain", aspectRatio: "4 / 3", maxWidth: "100vw" }
                  : { height: "100%", width: "auto" }
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};
