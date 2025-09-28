import { Container, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router";
import { data } from "../../constants/data.ts";
import { useEffect, useState } from "react";

import { TitleSection } from "./TitleSection.tsx";
import { Gallery } from "../Gallery.tsx";
import { Stats } from "./Stats.tsx";
import { Houses } from "../Houses.tsx";
import { PropertyList } from "../PropertyList.tsx";
import { contact } from "../../constants/constants.ts";
import { apartmentToCol } from "../../utils/apartmentToCol.ts";
import { useScrollToTopOnLoad } from "../../hook/useScrollToTopOnLoad.ts";
import type { Apartment } from "../../model/Apartment.ts";
import { Colors } from "../../theme/colors.ts";
import { ContactCard } from "./ContactCard.tsx";
import { useLanguage } from "../../contexts/LanguageContext";
import { AnimatedOnScroll } from "../AnimateOnScroll.tsx";
import { isMobile } from "../../App.tsx";

function getLastChar(str: string): string {
  return str.length > 0 ? str.charAt(str.length - 1) : "";
}

export const PropertyDetail = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();

  const getLanguageForLocale = () => {
    switch (language) {
      case "en":
        return "en-US";
      case "cz":
        return "cs-CZ";
    }
  };

  useScrollToTopOnLoad([id]);

  const house = data.find((property) => property.id === id);

  const [apartment, setApartment] = useState<Apartment>();

  useEffect(() => {
    if (house) {
      setApartment(house.apartments[0]);
    }
  }, [house]);

  const handleApartmentClick = (_: string, apartmentId: string) => {
    const selectedApartment = house?.apartments.find((ap) => ap.id === apartmentId);
    // console.log("Selected apartment:", apartmentId, house?.apartments.map(x => x.id));
    if (selectedApartment) {
      setApartment(selectedApartment);
    }
  };

  if (!id || !house) {
    return t("propertyDetail.propertyNotFound");
  }

  return (
    <Stack>
      <Container>
        <TitleSection house={house} />
        <PropertyList
          apartments={house.apartments.map((ap) => apartmentToCol(ap, house))}
          onClickProperty={handleApartmentClick}
          selectedApartmentId={apartment?.id}
        />

        {apartment && (
          <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }} pt={6} pb={0}>
            <Stack flex={1}>
              <AnimatedOnScroll key={apartment.id}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 6, md: 12 }}>
                    <Stack>
                      <Typography variant={isMobile ? "h5" : "h4"} fontWeight={600} sx={{ color: Colors.primary }}>
                        {apartment.number}
                      </Typography>
                      <Typography variant="body2" fontWeight={500} color={Colors.secondary}>
                        {t("propertyDetail.apartmentNumber")}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 6, md: 12 }}>
                    <Stack>
                      <Typography variant={isMobile ? "h5" : "h4"}  fontWeight={600} sx={{ color: Colors.primary }}>
                        {apartment.price.toLocaleString(getLanguageForLocale())} {t("common.currency")}
                      </Typography>
                      <Typography variant="body2" fontWeight={500} color={Colors.secondary}>
                        {t("propertyDetail.price")}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </AnimatedOnScroll>

              <ContactCard {...contact} sx={{ my: 4, display: { xs: "none", md: "flex" } }} />
            </Stack>
            <Stack flex={2}>
              <AnimatedOnScroll key={apartment.id}>
                <Stats stats={apartment} />
              </AnimatedOnScroll>
              <Typography mt={5} mb={{ md: 8, xs: 2 }}>
                {t("propertyDetail.houseDescription")}
              </Typography>
            </Stack>
            <ContactCard {...contact} sx={{ mb: 4, display: { xs: "flex", md: "none" } }} />
          </Stack>
        )}
      </Container>
      {apartment && <Gallery houseType={house.type} showButtons apartmentNumber={getLastChar(apartment.number)} />}

      <Houses title={t("navigation.otherHouses")} />
    </Stack>
  );
};
