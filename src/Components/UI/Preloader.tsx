import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "600px",
      }}
    >
      <ClipLoader loading={true} size={80} />
    </div>
  );
};

export default Preloader;
