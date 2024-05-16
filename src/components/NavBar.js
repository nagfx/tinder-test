import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import TinderImage from "Assets/pngwing.com.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    height: "40px",
  },
  iconButton: {
    color: "inherit",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" className={classes.iconButton}>
          <PersonIcon />
        </IconButton>
        <Box display="flex" justifyContent="center">
          <img src={TinderImage} alt="Tinder Logo" className={classes.logo} />
        </Box>
        <IconButton edge="end" className={classes.iconButton}>
          <ForumIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
