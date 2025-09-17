import { Container, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router";
import { data } from "../../constants/data.ts";
import { useEffect, useState } from "react";

import visualisation from "../../assets/houses/A1-transparent.png";
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
        <TitleSection house={house} image={visualisation} />

        <PropertyList
          apartments={house.apartments.map((ap) => apartmentToCol(ap, house))}
          onClickProperty={handleApartmentClick}
          selectedApartmentId={apartment?.id}
        />
        {apartment && (
          <Stack direction={{ xs: "column", md: "row" }} gap={10} py={6}>
            <Stack flex={1}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 6, md: 12 }}>
                  <Stack>
                    <Typography variant="h4" fontWeight={600} sx={{ color: Colors.primary }}>
                      {apartment.number}
                    </Typography>
                    <Typography variant="body2" fontWeight={500} color={Colors.secondary}>
                      {t("propertyDetail.apartmentNumber")}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 6, md: 12 }}>
                  <Stack>
                    <Typography variant="h4" fontWeight={600} sx={{ color: Colors.primary }}>
                      {apartment.price.toLocaleString(getLanguageForLocale())} {t("common.currency")}
                    </Typography>
                    <Typography variant="body2" fontWeight={500} color={Colors.secondary}>
                      {t("propertyDetail.price")}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
              <ContactCard {...contact} sx={{ my: 4, display: { xs: "none", md: "flex" } }} />
            </Stack>
            <Stack flex={2}>
              <Stats stats={apartment} />
              <Typography mt={5} mb={{ md: 8, xs: 2 }}>
                {t("propertyDetail.houseDescription")}
              </Typography>
            </Stack>
            <ContactCard {...contact} sx={{ mb: 4, display: { xs: "flex", md: "none" } }} />
          </Stack>
        )}
      </Container>

      <Gallery />
      <Houses title={t("navigation.otherHouses")} />
    </Stack>
  );
};
