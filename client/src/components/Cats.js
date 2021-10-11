import axios from "axios";
import React, { useState, useEffect } from "react";
const Cats = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    try {
      let res = await axios.get("/api/cats");
      setCats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {cats.map((c) => (
        <div>
          <h1>{c.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Cats;
