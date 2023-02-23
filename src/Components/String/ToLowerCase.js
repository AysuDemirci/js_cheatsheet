import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function CharExm() {
    let text = "Hello world!";
    let result = text.toLowerCase();

    setResult(result);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "490px", height: "270px" }}
      >
        <h6 className="namestyle">
          toLowerCase() : Convert strings to lowercase string
        </h6>
        <pre className="namestyle">
          let text = "Hello world!";
          <br />
          let result = text.toLowerCase();
          <br />
          =&gt;hello world!
        </pre>
        <Button
          onClick={CharExm}
          style={{ marginLeft: "180px", marginTop: "10px" }}
        >
          Click Me
        </Button>
        <div style={{ marginLeft: "180px", marginTop: "10px" }}>{result}</div>
      </Col>
    </div>
  );
}
