import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./config";

function Redirect() {
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

  return <div>{is404 ? <h2>404 - page not found</h2> : null}</div>;
}

export default Redirect;
