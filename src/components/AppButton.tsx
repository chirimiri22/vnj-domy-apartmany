import { type ReactNode } from "react";
import { Button, Icon, Typography } from "@mui/material";

type Props = {
  onClick: () => void;
  title: string;
  icon?: ReactNode;
};

export const AppButton = ({ onClick, title, icon }: Props) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      // disableTouchRipple
      // color={"primary"}
      size={"large"}
      // sx={{
      //   borderRadius: 3,
      // }}
      endIcon={icon}
    >
      {title}
    </Button>
  );
};
