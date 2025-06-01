import { Circle, Image, Label, Layer, Stage, Tag, Text } from "react-konva";
import { useState } from "react";
import useImage from "use-image";
import plan from "../assets/plan.png";
import type { HouseDetail } from "../model/HouseDetail.ts";
import { data } from "../constants/data.ts";
import { Colors } from "../theme/colors.ts";
import Konva from "konva";

type Props = {
  onSelectedHouse: (house: HouseDetail) => void;
};

const getData = (width: number, height: number): HouseDetail[] => {
  return data.map((house) => ({
    ...house,
    position: { x: width / house.position.x, y: height / house.position.y },
  }));
};

export const Plan = (props: Props) => {
  const [tooltipProps, setTooltipProps] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });
  const [hoveredArea, setHoveredArea] = useState<string>();
  const [backgroundImage] = useImage(plan);

  const areas = getData(window.innerWidth, window.innerHeight);

  const handleMouseOver = (id: string) => {
    setHoveredArea(id);
  };

  const handleMouseClick = (house: HouseDetail) => {
    setHoveredArea(house.id);
    props.onSelectedHouse(house);
  };

  const handleMouseOut = () => {
    setHoveredArea(undefined);
    setTooltipProps((prev) => ({ ...prev, visible: false }));
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>, house: HouseDetail) => {
    const stage = e.target.getStage();
    if (!stage) return;

    const mousePos = stage.getPointerPosition();
    if (!mousePos) return;

    setTooltipProps({
      visible: true,
      x: mousePos.x,
      y: mousePos.y - 5,
      text: house.name,
    });
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image x={1} y={0} image={backgroundImage} width={window.innerWidth} height={window.innerHeight} />
      </Layer>
      <Layer>
        {areas.map((area) => (
          <Circle
            key={area.id}
            x={area.position.x}
            y={area.position.y}
            radius={20}
            fill={Colors.primary}
            opacity={hoveredArea === area.id ? 0.5 : 1}
            strokeWidth={4}
            stroke={hoveredArea === area.id ? "none" : Colors.black}
            onMouseOver={() => handleMouseOver(area.id)}
            onMouseOut={handleMouseOut}
            onMouseMove={(e) => handleMouseMove(e, area)}
            onClick={() => handleMouseClick(area)}
          />
        ))}
      </Layer>
      <Layer>
        <Label x={tooltipProps.x} y={tooltipProps.y} opacity={0.75} visible={tooltipProps.visible}>
          <Tag
            fill="black"
            pointerDirection="down"
            pointerWidth={10}
            pointerHeight={10}
            lineJoin="round"
            shadowColor="black"
            shadowBlur={10}
            shadowOffsetX={10}
            shadowOffsetY={10}
            shadowOpacity={0.5}
          />
          <Text text={tooltipProps.text} fontFamily="Calibri" fontSize={18} padding={5} fill="white" />
        </Label>
      </Layer>
    </Stage>
  );
};
