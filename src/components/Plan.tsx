import { Circle, Image, Layer, Stage } from "react-konva";
import { useState } from "react";
import useImage from "use-image";
import plan from "../assets/plan.png";
import type { HouseDetail } from "../model/HouseDetail.ts";
import { data } from "../constants/data.ts";
import { Colors } from "../theme/colors.ts";
import { Html } from "react-konva-utils";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { ApartmentStatus } from "../model/ApartmentStatus.ts";
import CircleIcon from "@mui/icons-material/Circle";

type Props = {
  onSelectedHouse: (house: HouseDetail) => void;
};

const width = window.innerWidth * 0.8;
const height = width / 2;

const getData = (): HouseDetail[] => {
  return data.map((house) => ({
    ...house,
    position: { x: width / house.position.x, y: height / house.position.y },
  }));
};
// todo: hovering doesnt work on mobile, need to use touch events and
export const Plan = (props: Props) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const [hoveredArea, setHoveredArea] = useState<HouseDetail>();
  const [backgroundImage] = useImage(plan);

  const areas = getData();

  const handleMouseOver = (area: HouseDetail) => {
    setHoveredArea(area);
  };

  const handleMouseClick = (house: HouseDetail) => {
    setHoveredArea(house);
    props.onSelectedHouse(house);
  };

  const handleMouseOut = () => {
    setHoveredArea(undefined);
  };

  return (
    <Stage width={width} height={height} style={{ margin: "auto" }}>
      <Layer>
        <Image x={1} y={0} image={backgroundImage} width={width} height={height} />
      </Layer>
      <Layer>
        {areas.map((area) => (
          <Circle
            key={area.id}
            x={area.position.x}
            y={area.position.y}
            radius={20}
            fill={Colors.primary}
            strokeWidth={4}
            stroke={hoveredArea?.id === area.id ? "none" : Colors.black}
            onMouseOver={() => handleMouseOver(area)}
            onMouseOut={handleMouseOut}
            onClick={() => handleMouseClick(area)}
          />
        ))}
      </Layer>
      <Layer>
        {hoveredArea && (
          <Html
            groupProps={
              isMobile
                ? {
                    x: width / 2 - 100,
                    y: height / 2 - 125, // Adjust position based on number of apartments
                  }
                : {
                    x: hoveredArea.position.x - 100,
                    y:
                      hoveredArea.position.y -
                      125 -
                      30 * hoveredArea.apartments.filter((x) => x.status === ApartmentStatus.Free).length, // Adjust position based on number of apartments
                  }
            }
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
                <b> {hoveredArea.name} </b>
              </Typography>

              <Stack direction={"row"} gap={1}>
                volné: {hoveredArea.apartments.filter((x) => x.status === ApartmentStatus.Free).length} z{" "}
                {hoveredArea.apartments.length}
              </Stack>

              {hoveredArea.apartments
                .filter((x) => x.status === ApartmentStatus.Free)
                .map((apt) => (
                  <Stack key={apt.id} height={"20px"}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <CircleIcon fontSize="small" sx={{ color: Colors.primary }} />
                      <Typography variant="body2">
                        <b> {apt.number} </b>, {apt.layout}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
            </Stack>
          </Html>
        )}
      </Layer>
    </Stage>
  );
};
