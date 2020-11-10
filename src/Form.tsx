import React, { useState, useRef } from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Navbar from "./Navbar";
import axios from "axios";
import { API_URL } from "./config";

export default function Form() {
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
        <form onSubmit={handleSubmit}>
          <input type="url" ref={textInputRef} />
          <button type="submit">Get Short url</button>
          {shortUrl}
        </form>
      </Container>
    </div>
  );
}
