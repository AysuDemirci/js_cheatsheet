import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function SubsExm() {
    let text = "Hello world!";
    let result = text.substring(2);

    setResult(result);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "460px", height: "240px" }}
      >
        <h6 className="namestyle">
          substring() : Also similar to slice() but cant accept negative indices
          string
        </h6>
        <pre className="namestyle">
          let text = "Hello world!";
          <br />
          let result = text.substring(2);
          <br />
          
        </pre>
        <Button
          onClick={SubsExm}
          style={{ marginLeft: "180px", marginTop: "10px" }}
        >
          Try Me
        </Button>
        <div style={{ marginLeft: "188px", marginTop: "10px" }}>{result}</div>
      </Col>
    </div>
  );
}
