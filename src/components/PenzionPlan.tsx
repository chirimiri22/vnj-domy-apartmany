import { useState } from "react";
import NP1 from "../assets/NP.png";
import { Stack,  Select, MenuItem, Box } from "@mui/material";
import { PenzionKonvaStage } from "./PenzionKonvaStage";

const isMobile = window.innerWidth <= 768;
const width = window.innerWidth * (isMobile ? 1.05 : 0.8);
const height = width / 2;

const penzionPoints = [
  {
    id: 0,
    title: "Penzion - NP 1",
    description: "První nadpodlaží",
    img: NP1,
  },
  {
    id: 1,
    title: "Penzion - NP 2",
    description: "Druhé nadpodlaží",
    img: NP1,
  },
  {
    id: 2,
    title: "Celá budova",
    description: "Druhé nadpodlaží",
    img: null,
  },
];

export const PenzionPlan = () => {

  const [selectedPoint, setSelectedPoint] = useState(2);






  // Handler for both circle click and select change
  const handleShowImage = (id: number) => {
    setSelectedPoint(id); // Toggle image display

    // setShowImage(idx !== 2); // Show image only for specific points
  };

  return (
    <Stack position="relative" width={width} height={height} mb={6}>
      {selectedPoint !== 2 ? (
        <Box
          width={width}
          height={height}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >

          <img
            src={penzionPoints[selectedPoint].img || undefined}
            alt={penzionPoints[selectedPoint].title}
            style={{
              maxWidth: "100%",
              maxHeight: height - 60,
              borderRadius: 16,
              boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
            }}
          />
        </Box>
      ) : (
        <PenzionKonvaStage
          penzionPoints={penzionPoints}
          width={width}
          height={height}

          onCircleClick={handleShowImage}
        />
      )}
      <Box position="absolute" left={150} bottom={0} p={2}>
        <Select
          value={selectedPoint}


        >
          {penzionPoints.map((point, idx) => (
            <MenuItem key={idx} value={point.id} onClick={() => handleShowImage(point.id)}>
              {point.title}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Stack>
  );
};
