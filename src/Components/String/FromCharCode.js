import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function CharExm() {
    let text = String.fromCharCode(65);

    setResult(text);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "460px", height: "240px" }}
      >
        <h6 className="namestyle">
          fromCharCode()() : Returns a string created from the specified
          sequence of UTF-16 code units
        </h6>
        <pre className="namestyle">
          let text = String.fromCharCode(65)
          <br />
         
        </pre>
        <Button
          onClick={CharExm}
          style={{ marginLeft: "180px", marginTop: "10px" }}
        >
          Try Me
        </Button>
        <div style={{ marginLeft: "215px", marginTop: "10px" }}>{result}</div>
      </Col>
    </div>
  );
}
