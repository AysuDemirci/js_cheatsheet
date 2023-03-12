import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function SliceExm() {
    const str = "The quick brown fox jumps over the lazy dog.";
    const sliced = str.slice(31);

    setResult(sliced);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "460px", height: "240px" }}
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
          
        </pre>
        <Button
          onClick={SliceExm}
          style={{ marginLeft: "180px", marginTop: "10px" }}
        >
          Try Me
        </Button>
        <div style={{ marginLeft: "178px", marginTop: "10px" }}>{result}</div>
      </Col>
    </div>
  );
}
