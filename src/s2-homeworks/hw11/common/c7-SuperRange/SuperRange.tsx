import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: "200px",
        "& .MuiSlider-thumb": {
          pointerEvents: "auto !important",
          "&:hover": {
            cursor: "pointer",
          },
        },
        "& .MuiSlider-track": {
          pointerEvents: "auto !important",
        },
        "& .MuiSlider-rail": {
          pointerEvents: "auto !important",
        },
      }}
      {...props}
    />
  );
};

export default SuperRange;
