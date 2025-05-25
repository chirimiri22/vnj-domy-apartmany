import { Circle, Image, Label, Layer, Stage, Tag, Text } from "react-konva";
import { useState } from "react";
import useImage from "use-image";
import plan from "../assets/plan.png";

const getData = (width: number, height: number) => ({
  "1st BD": {
    key: "1st-bd",
    x: width / 12,
    y: height / 3,
  },
  "2nd BD": {
    key: "2nd-bd",
    x: width / 3.5,
    y: height / 8,
  },
  "3rd BD": {
    key: "3rd-bd",
    x: width / 1.9,
    y: height / 6,
  },
  "4th BD": {
    key: "4th-bd",
    x: width / 1.3,
    y: height / 6,
  },
  "5th BD": {
    key: "5th-bd",
    x: width / 1.3,
    y: height / 1.7,
  },
});

export const Plan = () => {
  const [tooltipProps, setTooltipProps] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });
  const [hoveredArea, setHoveredArea] = useState(null);
  const [backgroundImage] = useImage(plan);

  const areas = getData(window.innerWidth, window.innerHeight);

  const handleMouseOver = (e, key) => {
    setHoveredArea(key);
  };

  const handleMouseClick = (key) => {
    setHoveredArea(key);
  };

  const handleMouseOut = () => {
    setHoveredArea(null);
    setTooltipProps((prev) => ({ ...prev, visible: false }));
  };

  const handleMouseMove = (e, key) => {
    const stage = e.target.getStage();
    const mousePos = stage.getPointerPosition();
    setTooltipProps({
      visible: true,
      x: mousePos.x,
      y: mousePos.y - 5,
      text: key,
    });
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image x={1} y={0} image={backgroundImage} width={window.innerWidth} height={window.innerHeight} />
      </Layer>
      <Layer>
        {Object.entries(areas).map(([key, area]) => (
          <Circle
            key={key}
            x={area.x}
            y={area.y}
            radius={20}
            strokeWidth={4}
            fill="white"
            stroke={hoveredArea === key ? "none" : "white"}
            opacity={hoveredArea === key ? 0.5 : 0.25}
            onMouseOver={(e) => handleMouseOver(e, key)}
            onMouseOut={handleMouseOut}
            onMouseMove={(e) => handleMouseMove(e, key)}
            onClick={() => handleMouseClick(key)}
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
