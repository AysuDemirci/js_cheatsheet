import React, { useEffect, useState } from "react";
import "./Style.css";
import CheatSheet from "./Components/CheatSheet";
import { Button } from "reactstrap";
import { FaMoon } from "react-icons/fa";

export default function App() {
  const [style, setStyle] = useState();
  const [data, setData] = useState(false);

  function DarkTheme() {
    setData(!data);
    localStorage.setItem("DARK_THEME_ON", JSON.stringify(!data));

    if (!data) {
      setStyle({
        backgroundColor: "#1A1819",
        color: "white",
      });
    } else {
      setStyle({
        backgroundColor: "",
        color: "black",
      });
    }
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("DARK_THEME_ON"));
    if (stored) {
      setStyle({
        backgroundColor: "#1A1819",
        color: "white",
      });
    }
  }, []);

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
          backgroundColor: "black",
        }}
      >
        Dark Theme
        <FaMoon
          style={{ marginLeft: "5px", marginBottom: "5px", color: "yellow" }}
        />
      </Button>

      <CheatSheet />
      <br />
    </div>
  );
}
