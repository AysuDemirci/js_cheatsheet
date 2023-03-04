import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function CharExm() {
    let text = "Hello World";
    let letter = text.charCodeAt(0);
    setResult(letter);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "460px", height: "240px" }}
      >
        <h6 className="namestyle">
          charCodeAt() : Gives you the unicode of character at that position
        </h6>
        <pre className="namestyle">
          let text = "Hello World"
          <br />
          let letter = text.charCodeAt(0)
          <br />
          
        </pre>
        <Button
          onClick={CharExm}
          style={{ marginLeft: "180px", marginTop: "10px" }}
        >
          Try Me
        </Button>
        <div style={{ marginLeft: "210px", marginTop: "10px" }}>{result}</div>
      </Col>
    </div>
  );
}
