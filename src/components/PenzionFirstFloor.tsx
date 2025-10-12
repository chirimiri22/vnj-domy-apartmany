import { useState, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage, Circle } from "react-konva";
import useImage from "use-image";
import NP1 from "../assets/NP.png";
import { Html } from "react-konva-utils";
import { Stack, Typography } from "@mui/material";
import { Colors } from "../theme/colors";
import { base } from "../constants/constants.ts";
import { useNavigate } from "react-router";

const isMobile = window.innerWidth <= 768;
const width = window.innerWidth * (isMobile ? 1.05 : 0.8);
const height = width / 2;

const points = [
  { x: 0.25, y: 0.5, title: "Byt A1P1", description: "Popis bodu 1" },
  { x: 0.4, y: 0.35, title: "Byt A2P1", description: "Popis bodu 2" },
  { x: 0.5, y: 0.35,  title: "Byt A3P1", description: "Popis bodu 3" },
  { x: 0.4, y: 0.6, title: "Byt A4P1", description: "Popis bodu 4" },
  { x: 0.5, y: 0.6, title: "Byt A5P1", description: "Popis bodu 5" },

  { x: 0.7, y: 0.3, title: "Byt B1P1", description: "Popis bodu 2" },
  { x: 0.7, y: 0.5,  title: "Byt B2P1", description: "Popis bodu 3" },
  { x: 0.8, y: 0.3, title: "Byt B34P1", description: "Popis bodu 4" },
  { x: 0.8, y: 0.5, title: "Byt B4P1", description: "Popis bodu 5" },
];

export const PenzionFirstFloor = () => {
  const [backgroundImage] = useImage(NP1);
  const [imgDims, setImgDims] = useState<{ w: number; h: number } | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [clickedPoint, setClickedPoint] = useState<number | null>(null);
  const navigate = useNavigate();
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
    <Stage width={width} height={height} style={{ margin: "auto", cursor: hoveredPoint !== null ? "pointer" : "default" }}>
      <Layer>
        <KonvaImage x={offsetX} y={offsetY} image={backgroundImage} width={drawWidth} height={drawHeight} />
        {points.map((pt, idx) => (
          <Circle
            key={idx}
            x={offsetX + drawWidth * pt.x}
            y={offsetY + drawHeight * pt.y}
            radius={isMobile ? 12 : 16}
            fill={Colors.primary}
            strokeWidth={3}
            stroke={Colors.black}
            onMouseOver={() => setHoveredPoint(idx)}
            onMouseOut={() => setHoveredPoint(null)}
            onClick={ () => {navigate(`/${base}/alzbeta`)}}
          />
        ))}
        {hoveredPoint !== null && !isMobile && (
          <Html
            groupProps={{
              x: offsetX + drawWidth * points[hoveredPoint].x - 80,
              y: offsetY + drawHeight * points[hoveredPoint].y - 70,
            }}
            divProps={{
              style: {
                background: "transparent",
                color: "white",
                borderRadius: "8px",
                fontSize: "14px",
                pointerEvents: "none",
                width: "160px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <Stack spacing={1} sx={{ padding: 1.5, backgroundColor: Colors.black, opacity: 0.85 }}>
              <Typography fontSize="15px"><b>{points[hoveredPoint].title}</b></Typography>
              <Typography variant="body2">{points[hoveredPoint].description}</Typography>
            </Stack>
          </Html>
        )}
        {clickedPoint !== null && (
          <Html
            groupProps={{
              x: offsetX + drawWidth * points[clickedPoint].x - 80,
              y: offsetY + drawHeight * points[clickedPoint].y + 30,
            }}
            divProps={{
              style: {
                background: "#fff",
                color: Colors.black,
                borderRadius: "8px",
                fontSize: "14px",
                pointerEvents: "auto",
                width: "180px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                zIndex: 10,
                padding: 8,
              },

            }}
           />
        )}
      </Layer>
    </Stage>
  );
};
