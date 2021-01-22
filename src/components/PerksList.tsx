import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

export interface PerksListProps {
  data: {
    label: string;
    asset: string;
  }[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  item: {},
  paper: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.1em",
  },
  label: {
    fontWeight: 500,
  },
}));

export const PerksList = ({ data }: PerksListProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3} wrap="nowrap">
      {data.map((d) => (
        <Grid item xs={4} key={d.label} className={classes.item}>
          <Paper className={classes.paper} elevation={0}>
            <img src={d.asset} />
            <Typography
              variant="body2"
              align="center"
              className={classes.label}
            >
              {d.label}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
