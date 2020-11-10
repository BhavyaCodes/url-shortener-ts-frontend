import React from "react";

// import Typography from "@material-ui/core/Typography";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      top: "auto",
      bottom: 0,
    },
    footerIcons: {
      display: "flex",
      justifyContent: "space-between",
    },
    a: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
    },
    footerText: {
      display: "flex",
      alignItems: "center",
    },
    heartIcon: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      color: theme.palette.secondary.main,
    },
  })
);

function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="absolute" color="primary" className={classes.footer}>
      <Toolbar className={classes.footerIcons}>
        <div>
          {/* <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.footerText}
          >
            <span>Made with </span>
            <FavoriteIcon className={classes.heartIcon} />
            <span> by Bhavya Tomar</span>
          </Typography> */}
        </div>
        <div>
          <Link
            href="https://github.com/Juggernaut9"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton
              aria-label="Github"
              aria-haspopup="true"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link
            href="https://twitter.com/BhavyaCodes"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton
              aria-label="Github"
              aria-haspopup="true"
              color="inherit"
            >
              <TwitterIcon />
            </IconButton>
          </Link>
          <Link
            href="mailto:fullmernstack@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton
              aria-label="Github"
              aria-haspopup="true"
              color="inherit"
            >
              <EmailIcon />
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
