import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function CharExm() {
    const str = "The quick brown fox jumps over the lazy dog.";
    const sliced = str.slice(31);

    setResult(sliced);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "490px", height: "270px" }}
      >
        <h6 className="namestyle">
          slice() : Extracts a section of a string and returns it as a new
          string
        </h6>
        <pre className="namestyle">
          const str = "The quick brown fox jumps over the lazy dog."
          <br />
          const sliced = str.slice(31)
          <br />
          =&gt;"the lazy dog."
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
