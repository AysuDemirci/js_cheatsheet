import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function ToLowExm() {
    let text = "Hello world!";
    let result = text.toLowerCase();

    setResult(result);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "460px", height: "240px" }}
      >
        <h6 className="namestyle">
          toLowerCase() : Convert strings to lowercase string
        </h6>
        <pre className="namestyle">
          let text = "Hello world!";
          <br />
          let result = text.toLowerCase();
          <br />
          
        </pre>
        <Button
          onClick={ToLowExm}
          style={{ marginLeft: "180px", marginTop: "10px" }}
        >
          Try Me
        </Button>
        <div style={{ marginLeft: "180px", marginTop: "10px" }}>{result}</div>
      </Col>
    </div>
  );
}
