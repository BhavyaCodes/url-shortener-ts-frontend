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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      "& a": {
        textDecoration: "none",
      },
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
    link: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
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
            <Link
              href="https://github.com/Juggernaut9/url-shortener-ts-frontend"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
              color="inherit"
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="Frontend" />
              </MenuItem>
            </Link>
            <Link
              href="https://github.com/Juggernaut9/url-shortener-ts-backend"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
              color="inherit"
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="Backend" />
              </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
