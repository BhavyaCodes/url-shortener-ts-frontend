import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./config";
import Image404 from "./images/404.svg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
    illustration404: {
      width: "40%",
      [theme.breakpoints.down("md")]: {
        width: "80%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    text: {
      ...theme.typography.button,
      padding: theme.spacing(5),
      fontSize: "24px",
    },
    button: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      "& *": {
        textDecoration: "none",
      },
    },
  })
);

function Redirect() {
  const classes = useStyles();
  const { shortUrl } = useParams<{ shortUrl: string }>();
  console.log(shortUrl);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const getUrl = async () => {
      try {
        const response = await axios.get(`${API_URL}/${shortUrl}`);
        window.location.href = response.data;
      } catch (error) {
        setIs404(true);
      }
    };
    getUrl();
  }, [shortUrl]);

  return (
    <div>
      {is404 ? (
        <div className={classes.root}>
          <div className={classes.text}>Error 404</div>
          <img className={classes.illustration404} src={Image404} alt="404" />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Back To Home
            </Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default Redirect;
