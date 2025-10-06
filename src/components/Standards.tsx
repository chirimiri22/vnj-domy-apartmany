import { Container, Stack, Typography } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { type StandardItem, StandartsGrid } from "./StandartsGrid.tsx";

export const Standards = () => {
  const { t } = useLanguage();

  const houseStandardsData: StandardItem[] = [
    {
      category: t("standards.categories.foundation.title"),
      description: t("standards.categories.foundation.description"),
    },
    {
      category: t("standards.categories.exteriorWalls.title"),
      description: t("standards.categories.exteriorWalls.description"),
    },
    {
      category: t("standards.categories.partitions.title"),
      description: t("standards.categories.partitions.description"),
    },
    { category: t("standards.categories.ceiling.title"), description: t("standards.categories.ceiling.description") },
    { category: t("standards.categories.roof.title"), description: t("standards.categories.roof.description") },
    {
      category: t("standards.categories.interiorPlaster.title"),
      description: t("standards.categories.interiorPlaster.description"),
    },
    { category: t("standards.categories.facades.title"), description: t("standards.categories.facades.description") },
    { category: t("standards.categories.openings.title"), description: t("standards.categories.openings.description") },
    {
      category: t("standards.categories.sheetMetal.title"),
      description: t("standards.categories.sheetMetal.description"),
    },
    { category: t("standards.categories.floors.title"), description: t("standards.categories.floors.description") },
    {
      category: t("standards.categories.pavedAreas.title"),
      description: t("standards.categories.pavedAreas.description"),
    },
  ];

  const apartmentStandardsData: StandardItem[] = [
    {
      category: t("standards.categories.waterMeters.title"),
      description: t("standards.categories.waterMeters.description"),
    },
    { category: t("standards.categories.heating.title"), description: t("standards.categories.heating.description") },
    {
      category: t("standards.categories.electrical.title"),
      description: t("standards.categories.electrical.description"),
    },
    {
      category: t("standards.categories.ventilation.title"),
      description: t("standards.categories.ventilation.description"),
    },
    { category: t("standards.categories.tiles.title"), description: t("standards.categories.tiles.description") },
    {
      category: t("standards.categories.laminateFloors.title"),
      description: t("standards.categories.laminateFloors.description"),
    },
    { category: t("standards.categories.stairs.title"), description: t("standards.categories.stairs.description") },
    { category: t("standards.categories.doors.title"), description: t("standards.categories.doors.description") },
    { category: t("standards.categories.sanitary.title"), description: t("standards.categories.sanitary.description") },
  ];

  const paragraphs = ["freedom", "familySpace", "activeLife", "quietLife", "newHome"];

  // Local animated paragraph component
  const AnimatedParagraph = ({ paragraphKey }: { paragraphKey: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (
      <Stack ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Typography variant="h3" color={"primary"}>
            {t(`standards.paragraphs.${paragraphKey}.title`)}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <Typography>{t(`standards.paragraphs.${paragraphKey}.paragraph`)}</Typography>
        </motion.div>
      </Stack>
    );
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, pb: 4, pt: 4 }}>
      <Typography variant={"h2"}>{t("standards.meaning")}</Typography>
      <Stack>
        {paragraphs.map((key) => (
          <AnimatedParagraph key={key} paragraphKey={key} />
        ))}
      </Stack>
      <StandartsGrid standartItems={houseStandardsData} title={t("standards.houseGridTitle")} />
      <StandartsGrid standartItems={apartmentStandardsData} title={t("standards.apartmentGridTitle")} />
      <Typography sx={{mt: 2}}>{t("standards.notice")}</Typography>
    </Container>
  );
};
