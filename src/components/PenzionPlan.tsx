import { Layer, Stage, Image as KonvaImage } from "react-konva";
import { useEffect, useState } from "react";
import useImage from "use-image";
import penzion1 from "../assets/penzion-tr.png";
import { Circle } from "react-konva";
import { Colors } from "../theme/colors.ts";
import { Html } from "react-konva-utils";
import { Stack, Typography, Select, MenuItem, Box } from "@mui/material";

const isMobile = window.innerWidth <= 768;
const width = window.innerWidth * (isMobile ? 1.05 : 0.8);
const height = width / 2;

const penzionPoints = [
  {
    title: "Penzion - NP 1",
    description: "První nadpodlaží",
  },
  {
    title: "Penzion - NP 2",
    description: "Druhé nadpodlaží",
  },
  {
    title: "Celá budova",
    description: "Druhé nadpodlaží",
  },
];

export const PenzionPlan = () => {
  const [backgroundImage] = useImage(penzion1);
  const [imgDims, setImgDims] = useState<{ w: number; h: number } | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(2);

  useEffect(() => {
    if (backgroundImage) {
      setImgDims({ w: backgroundImage.width, h: backgroundImage.height });
    }
  }, [backgroundImage]);

  let drawWidth = width;
  let drawHeight = height;
  let offsetX = 0;
  let offsetY = 0;

  if (imgDims) {
    const imgRatio = imgDims.w / imgDims.h;
    const stageRatio = width / height;
    if (imgRatio > stageRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }
  }

  return (
    <Stack position="relative" width={width} height={height} mb={4}>
      <Stage width={width} height={height} style={{ margin: "auto", cursor: isPointer ? "pointer" : "default" }}>
        <Layer>
          <KonvaImage x={offsetX} y={offsetY} image={backgroundImage} width={drawWidth} height={drawHeight} />
          {/* Add two points (circles) on the image, similar to Plan.tsx */}
          <Circle
            x={offsetX + drawWidth * 0.15}
            y={offsetY + drawHeight * 0.6}
            radius={isMobile ? 15 : 20}
            fill={Colors.primary}
            strokeWidth={4}
            stroke="#000"
            onMouseOver={() => {
              setHoveredPoint(0);
              setIsPointer(true);
            }}
            onMouseOut={() => {
              setHoveredPoint(null);
              setIsPointer(false);
            }}
          />
          <Circle
            x={offsetX + drawWidth * 0.15}
            y={offsetY + drawHeight * 0.4}
            radius={isMobile ? 15 : 20}
            fill={Colors.primary}
            strokeWidth={4}
            stroke="#000"
            onMouseOver={() => {
              setHoveredPoint(1);
              setIsPointer(true);
            }}
            onMouseOut={() => {
              setHoveredPoint(null);
              setIsPointer(false);
            }}
          />
          {/* Tooltip for hovered point */}
          {hoveredPoint === 0 && !isMobile && (
            <Html
              groupProps={{
                x: offsetX + drawWidth * 0.15 - 100,
                y: offsetY + drawHeight * 0.6 - 80,
              }}
              divProps={{
                style: {
                  background: "transparent",
                  color: "white",
                  borderRadius: "8px",
                  fontSize: "14px",
                  pointerEvents: "none",
                  width: "200px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <Stack spacing={1} sx={{ padding: 2, backgroundColor: Colors.black, opacity: 0.8 }}>
                <Typography fontSize="16px">
                  <b>{penzionPoints[0].title}</b>
                </Typography>
                <Typography variant="body2">{penzionPoints[0].description}</Typography>
              </Stack>
            </Html>
          )}
          {hoveredPoint === 1 && !isMobile && (
            <Html
              groupProps={{
                x: offsetX + drawWidth * 0.15 - 100,
                y: offsetY + drawHeight * 0.4 - 80,
              }}
              divProps={{
                style: {
                  background: "transparent",
                  color: "white",
                  borderRadius: "8px",
                  fontSize: "14px",
                  pointerEvents: "none",
                  width: "200px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <Stack spacing={1} sx={{ padding: 2, backgroundColor: Colors.black, opacity: 0.8 }}>
                <Typography fontSize="16px">
                  <b>{penzionPoints[1].title}</b>
                </Typography>
                <Typography variant="body2">{penzionPoints[1].description}</Typography>
              </Stack>
            </Html>
          )}
        </Layer>
      </Stage>
      <Box position="absolute" left={150} bottom={20}>
        <Select value={selectedPoint} onChange={(e) => setSelectedPoint(Number(e.target.value))} size="small">
          {penzionPoints.map((point, idx) => (
            <MenuItem key={idx} value={idx}>
              {point.title}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Stack>
  );
};
