import { useState } from "react";
import "./App.css";

function App() {
  const generateColors = () =>
    Array.from(
      { length: 5 },
      () => `#${Math.floor(Math.random() * 16777115).toString(16)}`
    );

  const colors = generateColors();

  return (
    <>
      <div>
        <h1>Color Palette</h1>
        <div style={{ display: "flex" }}>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                background: color,
                width: "100px",
                height: "100px",
                margin: "5px",
              }}
            >
              {" "}
              <p style={{ color: "#fff", textAlign: "center" }}> {color} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
