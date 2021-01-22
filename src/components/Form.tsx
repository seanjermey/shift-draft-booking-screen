import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Chip from "@material-ui/core/Chip";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

export interface FormProps {}

const useStyles = makeStyles((theme: Theme) => ({
  control: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: ".5em",
  },
  label: {
    flexGrow: 1,
    justifyContent: "space-between",
    marginRight: ".75em",
  },
  chip: {
    padding: "0 .5em",
    fontSize: "1.1em",
    boxShadow: theme.shadows[2],
  },
  checkbox: {
    color: `${theme.palette.primary.main} !important`,
  },
}));

export const Form = (props: FormProps) => {
  const classes = useStyles();

  return (
    <form>
      <FormGroup>
        <FormControl className={classes.control}>
          <FormControlLabel
            label="Inventory"
            labelPlacement="start"
            className={classes.label}
            control={
              <Chip label="2x Items" color="primary" className={classes.chip} />
            }
          />
          <Chip label="Edit" color="primary" className={classes.chip} />
        </FormControl>
        <FormControl className={classes.control}>
          <FormControlLabel
            label="Pickup"
            labelPlacement="start"
            className={classes.label}
            control={
              <Chip
                label="The Old Shippen, Ivybridge"
                color="primary"
                className={classes.chip}
              />
            }
          />
          <Chip label="Edit" color="primary" className={classes.chip} />
        </FormControl>
        <FormControl className={classes.control}>
          <FormControlLabel
            label="Drop off"
            labelPlacement="start"
            className={classes.label}
            control={
              <Chip
                label="Broadmoor Farm, Beworth"
                color="primary"
                className={classes.chip}
              />
            }
          />
          <Chip label="Edit" color="primary" className={classes.chip} />
        </FormControl>
        <FormControl className={classes.control}>
          <FormControlLabel
            label="Do you require two people?"
            labelPlacement="start"
            className={classes.label}
            control={
              <Checkbox
                color={"primary"}
                className={classes.checkbox}
                icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                checkedIcon={<CheckBoxIcon fontSize="large" />}
                name="checkedI"
              />
            }
          />
        </FormControl>
      </FormGroup>
    </form>
  );
};
