import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function CharExm() {
    let text = "Hello world!";
    let result = text.toUpperCase();

    setResult(result);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "460px", height: "240px" }}
      >
        <h6 className="namestyle">
          toUpperCase() : Convert strings to uppercase
        </h6>
        <pre className="namestyle">
          let text = "Hello world!";
          <br />
          let result = text.toUpperCase();
          <br />
          
        </pre>
        <Button
          onClick={CharExm}
          style={{ marginLeft: "180px", marginTop: "10px" }}
        >
          Try Me
        </Button>
        <div style={{ marginLeft: "167px", marginTop: "10px" }}>{result}</div>
      </Col>
    </div>
  );
}
