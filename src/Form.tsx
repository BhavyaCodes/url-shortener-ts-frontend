import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { API_URL } from "./config";

export default function Form() {
  const [data, setData] = useState();
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const textInput = textInputRef.current?.value;
    console.log(textInput);
    const response = await axios.post(`${API_URL}`, { url: textInput });
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={textInputRef} />
      <button type="submit">Get Short url</button>
    </form>
  );
}
