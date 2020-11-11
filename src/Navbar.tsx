import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { ThemeContext, DispatchThemeContext } from "./ThemeContext";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "flex",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500,
    },
    logoImage: {
      height: "32px",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const darkMode = useContext(ThemeContext);
  const dispatchTheme = useContext(DispatchThemeContext);

  const handleThemeChangeMenu = () => {
    dispatchTheme({ type: darkMode === "dark" ? "light" : "dark" });
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shorts
          </Typography>
          <IconButton
            aria-label="toggle dark mode"
            aria-controls="toggle dark mode"
            aria-haspopup="false"
            onClick={handleThemeChangeMenu}
            color="inherit"
          >
            {darkMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <IconButton
            aria-label="view source code"
            aria-controls="open source code menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <CodeIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
