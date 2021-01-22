import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import { PriceCard } from "./PriceCard";

export interface PriceListProps {
  data: { title: string; date: string | Date; price: number }[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
  },
  item: {
    display: "flex",
  },
  gradient: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.1) 100%)",
    pointerEvents: "none",
  },
}));

export const PriceList = (props: PriceListProps) => {
  const classes = useStyles();
  const bestPrice = props.data.reduce(
    (acc, val) => (acc === 0 ? val.price : val.price < acc ? val.price : acc),
    0
  );

  return (
    <Box mx={4}>
      <Grid container spacing={3} className={classes.root}>
        {props.data.map((d) => (
          <Grid item key={d.title} xs={4} className={classes.item}>
            <PriceCard
              title={d.title}
              date={d.date}
              price={d.price}
              bestPrice={d.price === bestPrice}
            />
            <div className={classes.gradient}></div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
