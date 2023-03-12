import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function SubExm() {
    let text = "Hello world!";
    let result = text.substr(1, 4);

    setResult(result);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "460px", height: "240px" }}
      >
        <h6 className="namestyle">
          substr() : Similar to slice() but extracts a substring depended on a
          specified number of characters string
        </h6>
        <pre className="namestyle">
          let text = "Hello world!";
          <br />
          let result = text.substr(1, 4);
          <br />
         
        </pre>
        <Button
          onClick={SubExm}
          style={{ marginLeft: "180px", marginTop: "10px" }}
        >
          Try Me
        </Button>
        <div style={{ marginLeft: "210px", marginTop: "10px" }}>{result}</div>
      </Col>
    </div>
  );
}
