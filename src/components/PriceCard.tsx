import React from "react";
import moment from "moment";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import ChevronRight from "@material-ui/icons/ChevronRight";

export interface PriceCardProps {
  title: string;
  date: string | Date;
  price: number;
  bestPrice?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    display: "flex",
    borderRadius: "1em",
    minHeight: "120px",
    flex: 1,
  },
  content: { flex: "1 0" },
  chip: {
    borderRadius: ".75em",
    marginTop: "1em",
    height: "26px",
  },
  actions: {
    position: "absolute",
    bottom: 0,
    right: 0,
    alignItems: "flex-end",
  },
  price: {
    fontWeight: "bold",
    "&:before": {
      content: '"£"',
    },
  },
  chevron: {
    width: "2em",
    height: "2em",
    marginBottom: "-.6em",
    marginLeft: "-.4em",
  },
}));

export const PriceCard = ({
  title,
  date,
  bestPrice = false,
  price,
}: PriceCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent className={classes.content}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {moment(date).format("Do MMMM")}
        </Typography>
        {bestPrice && (
          <Chip label="Best Price" color="primary" className={classes.chip} />
        )}
      </CardContent>
      <CardActions className={classes.actions}>
        <Typography
          variant={"h5"}
          className={classes.price}
          align="right"
          color="primary"
          gutterBottom
        >
          {price}
          <ChevronRight color="primary" className={classes.chevron} />
        </Typography>
      </CardActions>
    </Card>
  );
};
