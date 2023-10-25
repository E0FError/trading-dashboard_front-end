import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { setTitle } from "../../redux/headerSlice";
import { toggleShowTrades } from "../../redux/tradesSlice";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const title = useSelector((state) => state.header.title);

  const handleToggleTrades = () => {
    dispatch(toggleShowTrades());
  };

  // This is just a demo of dispatching an action. In a real-world scenario, you'd probably set the title in response to some user interaction or lifecycle event.
  React.useEffect(() => {
    dispatch(setTitle("Watchmen"));
  }, [dispatch]);

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" style={{ marginRight: "15px" }}>
            {title}
          </Typography>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit" style={{ marginLeft: "15px" }}>
            Watchlist
          </Button>
          <Button
            color="inherit"
            onClick={handleToggleTrades}
            style={{ marginLeft: "15px" }}
          >
            Trades
          </Button>
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        {/* Add more buttons or controls as needed */}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
