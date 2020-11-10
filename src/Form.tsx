import React, { useState, useRef } from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

import Navbar from "./Navbar";
import axios from "axios";
import { API_URL } from "./config";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    inputContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
      padding: theme.spacing(1),
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
    const response = await axios.post(`${API_URL}`, { url: textInput });
    setShortUrl(`${baseUrl}/${response.data.url.short}`);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h3" gutterBottom align="center">
          Shorts - URL Shortening Service
        </Typography>
        <Paper component="form" className={classes.inputContainer}>
          <InputBase
            className={classes.input}
            placeholder="Enter Long URL"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Button color="primary">Generate</Button>
        </Paper>
        <form onSubmit={handleSubmit}>
          <input type="url" ref={textInputRef} />
          <button type="submit">Get Short url</button>
          {shortUrl}
        </form>
      </Container>
    </div>
  );
}
