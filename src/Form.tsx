import React, { useState, useRef } from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import CopyToClipboard from "react-copy-to-clipboard";

import Navbar from "./Navbar";
import axios from "axios";
import { API_URL } from "./config";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    inputContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
      padding: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      width: "100%",
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    shortUrlContainer: {
      cursor: "pointer",
      display: "inline-block",
      "&:hover": {
        "& svg": {
          color: theme.palette.secondary["main"],
        },
      },
      padding: theme.spacing(2),
      marginTop: theme.spacing(5),
    },
    shortUrlDiv: {
      display: "flex",
    },
    copyIcon: {
      color: theme.palette.grey[500],
      marginLeft: theme.spacing(4),
    },
  })
);

export default function Form() {
  const classes = useStyles();
  const [shortUrl, setShortUrl] = useState<string>("");
  const baseUrl = window.location.origin;
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const textInput = textInputRef.current?.value;
    console.log(textInput);
    const response = await axios.post(`${API_URL}`, { url: textInput });
    setShortUrl(`${baseUrl}/${response.data.url.short}`);
  };

  return (
    <div>
      <Navbar />
      <Container className={classes.root}>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          className={classes.title}
        >
          Shorts - URL Shortening Service
        </Typography>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          className={classes.inputContainer}
        >
          <InputBase
            className={classes.input}
            placeholder="Enter Long URL"
            inputProps={{ "aria-label": "Enter Long URL" }}
            type="url"
            inputRef={textInputRef}
          />
          <Button color="primary" type="submit">
            Generate
          </Button>
        </Paper>
        {shortUrl ? (
          <CopyToClipboard text="ok">
            <Tooltip title="Click to copy">
              <Paper
                component="div"
                elevation={1}
                className={classes.shortUrlContainer}
              >
                <div className={classes.shortUrlDiv}>
                  <Typography>{shortUrl}</Typography>
                  <FileCopyIcon className={classes.copyIcon} />
                </div>
              </Paper>
            </Tooltip>
          </CopyToClipboard>
        ) : null}
      </Container>
    </div>
  );
}
