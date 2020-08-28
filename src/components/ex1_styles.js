import React from "react";
import "./styles.css";

export default function ex1_styles() {
  const styles = {
    container: { backgroundColor: "#ff0", height: 100 },
  };
  return (
    <div style={styles.container}>
      <h1 className="root">Style Example </h1>
    </div>
  );
}
