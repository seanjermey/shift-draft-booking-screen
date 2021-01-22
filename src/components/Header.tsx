import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export interface HeaderProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    justifyContent: "center",
    padding: "1.5em",
  },
}));

export const Header = ({ title }: HeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
