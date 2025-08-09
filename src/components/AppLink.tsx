import React from 'react';
import { Button } from '@mui/material';

type Props = {
  onClick?: () => void;
  title: React.ReactNode;
  active?: boolean;
  startIcon?: React.ReactNode;
};

export const AppLink = ({ onClick, title, active = false, startIcon} : Props) => {
  return (
    <Button
      onClick={onClick}
      disableRipple
      variant="text"
      sx={{
        textTransform: 'none',
        fontSize: '0.875rem', // text-sm
        color: active ? 'primary.main' : 'white',
        opacity: 0.7,
        '&:hover': {
          opacity: 0.8,
          backgroundColor: 'transparent',
        },
        minWidth: 0,
        padding: 0,
      }}
      startIcon={startIcon}
    >
      {title}
    </Button>
  );
};
