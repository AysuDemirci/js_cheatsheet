import React, { useState } from "react";
import "./Style.css";
import CheatSheet from "./Components/CheatSheet";
import { Button } from "reactstrap";

export default function App() {
  const [style, setStyle] = useState();
  function DarkTheme() {
    setStyle({
      backgroundColor: "#1A1819",
      color: "white",
    });
  }
  return (
    <div style={style} className="pagestyle">
      <div
        style={{
          backgroundColor: "#7f76aa",
          height: "60px",
          color: "white",
        }}
      >
        <h3 style={{ textAlign: "center", padding: "11px" }}>
          {" "}
          Javascript Cheatsheet
        </h3>
      </div>

      <Button
        onClick={DarkTheme}
        style={{
          marginTop: "-89px",
          marginLeft: "200px",
          backgroundColor: "gray",
        }}
      >
        Dark Theme
      </Button>
      <CheatSheet />
      <br />
    </div>
  );
}
