import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function CharExm() {
    let text = "How are you doing today?";
    const myArray = text.split(" ");

    setResult(myArray);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "460px", height: "240px" }}
      >
        <h6 className="namestyle">
          split() : Splits a string object into an array of strings at a
          specified position string
        </h6>
        <pre className="namestyle">
          let text = "How are you doing today?";
          <br />
          const myArray = text.split(" ");
          <br />
          
        </pre>
        <Button
          onClick={CharExm}
          style={{ marginLeft: "180px", marginTop: "10px" }}
        >
          Try Me
        </Button>
        <div style={{ marginLeft: "140px", marginTop: "10px" }}>{result}</div>
      </Col>
    </div>
  );
}
