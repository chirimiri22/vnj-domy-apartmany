import { Layer, Stage, Image as KonvaImage, Circle } from "react-konva";
import { useEffect, useState } from "react";
import useImage from "use-image";
import { Html } from "react-konva-utils";
import { Stack, Typography } from "@mui/material";
import { Colors } from "../theme/colors";
import planImg from "../assets/penzion-tr.png";

type PenzionKonvaStageProps = {
  penzionPoints: { title: string; description: string; img: string | null }[];
  width: number;
  height: number;

  onCircleClick: (idx: number) => void;
}

const isMobile = window.innerWidth <= 768;

export const PenzionKonvaStage = ({ penzionPoints, width, height, onCircleClick }: PenzionKonvaStageProps) => {
  const [backgroundImage] = useImage(planImg);
  const [imgDims, setImgDims] = useState<{ w: number; h: number } | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [isPointer, setIsPointer] = useState(false);

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
    <Stage
      width={width}
      height={height}
      style={{ margin: "auto", padding: 40, cursor: isPointer ? "pointer" : "default" }}
    >
      <Layer>
        <KonvaImage x={offsetX} y={offsetY} image={backgroundImage} width={drawWidth} height={drawHeight} />
        {/* Circles */}
        <Circle
          x={offsetX + drawWidth * 0.15}
          y={offsetY + drawHeight * 0.6}
          radius={isMobile ? 15 : 20}
          fill={Colors.primary}
          strokeWidth={4}
          stroke="#000"
          onMouseOver={() => { setHoveredPoint(0); setIsPointer(true); }}
          onMouseOut={() => { setHoveredPoint(null); setIsPointer(false); }}
          onClick={() => onCircleClick(0)}
        />
        <Circle
          x={offsetX + drawWidth * 0.15}
          y={offsetY + drawHeight * 0.4}
          radius={isMobile ? 15 : 20}
          fill={Colors.primary}
          strokeWidth={4}
          stroke="#000"
          onMouseOver={() => { setHoveredPoint(1); setIsPointer(true); }}
          onMouseOut={() => { setHoveredPoint(null); setIsPointer(false); }}
          onClick={() => onCircleClick(1)}
        />
        {/* Tooltips */}
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
              <Typography fontSize="16px"><b>{penzionPoints[0].title}</b></Typography>
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
              <Typography fontSize="16px"><b>{penzionPoints[1].title}</b></Typography>
              <Typography variant="body2">{penzionPoints[1].description}</Typography>
            </Stack>
          </Html>
        )}
      </Layer>
    </Stage>
  );
};

