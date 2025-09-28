import { Swiper, SwiperSlide } from "swiper/react";
import { GlobalStyles, Stack } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Colors } from "../theme/colors.ts";
import { isMobile } from "../App.tsx";
import { HouseType } from "../constants/HouseTypes.ts";
import { getImagePathsA, getImagePathsB, getImagePathsHome } from "../utils/getImagePaths.ts";
import { AppButton } from "./AppButton.tsx";
import { useRef } from "react";

type Props = {
  houseType?: HouseType;
  showButtons?: boolean;
};

const getGalleryPicures = (houseType?: HouseType) => {
  switch (houseType) {
    case HouseType.A:
      return getImagePathsA();
    case HouseType.B:
      return getImagePathsB();
    default:
      return getImagePathsHome();
  }
};

export const Gallery = ({ houseType, showButtons }: Props) => {
  const [images, plans] = getGalleryPicures(houseType);
  const swiperRef = useRef<any>(null);

  const handleGoToFirstSlide = (index: number) => {
    const galleryElement = document.getElementById("gallery");
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: "smooth" });
    }

    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <Stack>
      {/* todo: add translation */}
      {showButtons && (
        <Stack direction={"row"} justifyContent={"center"} my={5} gap={2}>
          <>
            <AppButton onClick={() => handleGoToFirstSlide(0)} title={"Vizualizace interiéru"} />
            <AppButton onClick={() => handleGoToFirstSlide(images.length)} title={"Technický půdorys"} />
          </>
        </Stack>
      )}

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
        <Swiper navigation={true} modules={[Navigation]} spaceBetween={0} slidesPerView={1} loop={true} ref={swiperRef}>
          {images.map((image, i) => (
            <SwiperSlide
              key={i}
              style={
                isMobile
                  ? { width: "100vw", maxWidth: "100vw", height: "auto", aspectRatio: "4 / 3", overflow: "hidden" }
                  : { width: "100%", height: "100vh", overflow: "hidden" }
              }
            >
              <img
                src={image}
                alt={`Gallery image ${i + 1}`}
                style={
                  isMobile
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
    </Stack>
  );
};
