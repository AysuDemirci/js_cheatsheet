import React from "react";
import "./Style.css"
import CheatSheet from "./Components/CheatSheet";


export default function App() {
  return (
    <div style={{overflow:"hidden"}}>
      <div
        style={{
          backgroundColor: "#7f76aa",
          height: "50px",
          color: "white",

        }}
      >
       <h3 style={{textAlign:"center",padding:"6px"}}> Javascript Cheatsheet</h3>
       
      </div>
      
        <CheatSheet/>
      <br/>
    </div>
  );
}
