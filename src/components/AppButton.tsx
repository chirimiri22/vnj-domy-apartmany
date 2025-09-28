import { type ReactNode } from "react";
import { Button } from "@mui/material";

type Props = {
  onClick: () => void;
  title: string;
  icon?: ReactNode;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
};

export const AppButton = ({ onClick, title, icon, variant = "outlined", size }: Props) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      // disableTouchRipple
      // color={"primary"}
      size={size}
      // sx={{
      //   borderRadius: 3,
      // }}
      endIcon={icon}
    >
      {title}
    </Button>
  );
};
