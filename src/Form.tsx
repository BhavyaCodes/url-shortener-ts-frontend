import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Form() {
  const [data, setData] = useState();
  const textInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {}, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const textInput = textInputRef.current?.value;
    console.log(textInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={textInputRef} />
      <button type="submit">Get Short url</button>
    </form>
  );
}
