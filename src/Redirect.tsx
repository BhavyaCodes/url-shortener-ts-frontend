import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./config";

function Redirect() {
  const { shortUrl } = useParams<{ shortUrl: string }>();
  console.log(shortUrl);

  useEffect(() => {
    const getUrl = async () => {
      const response = await axios.get(`${API_URL}/${shortUrl}`);
      console.log(response.data);
      window.location.href = response.data;
    };
    getUrl();
  }, [shortUrl]);

  return <div></div>;
}

export default Redirect;
