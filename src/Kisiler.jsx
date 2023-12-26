import React from "react";
import data from "./Data.js";
import Kisi from "./Kisi.jsx";

const Kisiler = () => {
  return (
    <div>
      {data.map((kisi) => (
        <Kisi key={kisi.id} kisi={kisi} />
      ))}
    </div>
  );
};

export default Kisiler;
