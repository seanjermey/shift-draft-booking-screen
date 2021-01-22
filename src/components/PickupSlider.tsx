import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { makeStyles, Theme } from "@material-ui/core/styles";

export interface PickupSliderProps {}

const useStyles = makeStyles((theme: Theme) => ({
  slider: {
    margin: "2em 0",
    "& .MuiSlider-rail": {
      height: ".6em",
    },
    "& .MuiSlider-track": {
      height: ".6em",
    },
    "& .MuiSlider-thumb": {
      background: theme.palette.background.default,
      border: `.4em solid ${theme.palette.primary.main}`,
      boxSizing: "content-box",
      width: "1.6em",
      height: "1.6em",
      transform: "translateY(-.6em)",
    },
    "& .MuiSlider-valueLabel": {
      transform: "scale(1) translateY(60px) !important",
      "& > span": {
        background: "transparent",
      },
    },
  },
}));

const getTimeLabel = (v: number) => {
  return v <= 12 ? `${v}am` : `${v - 12}pm`;
};

export const PickupSlider = (props: PickupSliderProps) => {
  const [value, setValue] = React.useState([14, 22]);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" align="center" gutterBottom>
        {`Your pickup will be between `}
        <Typography variant="h6" component="span" color="primary">
          {getTimeLabel(value[0])}
        </Typography>
        {` and `}
        <Typography variant="h6" component="span" color="primary">
          {getTimeLabel(value[1])}
        </Typography>
      </Typography>
      <Slider
        className={classes.slider}
        value={value}
        min={8}
        max={24}
        onChange={(e, v) => setValue(Array.isArray(v) ? v : [v])}
        valueLabelDisplay="on"
        valueLabelFormat={(v) => (
          <Typography variant="h6" color="primary">
            {getTimeLabel(v)}
          </Typography>
        )}
      />
    </React.Fragment>
  );
};
