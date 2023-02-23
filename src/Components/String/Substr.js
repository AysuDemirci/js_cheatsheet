import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function CharExm() {
    let text = "Hello world!";
    let result = text.substr(1, 4);

    setResult(result);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "490px", height: "270px" }}
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
          =&gt;ello
        </pre>
        <Button
          onClick={CharExm}
          style={{ marginLeft: "180px", marginTop: "10px" }}
        >
          Click Me
        </Button>
        <div style={{ marginLeft: "210px", marginTop: "10px" }}>{result}</div>
      </Col>
    </div>
  );
}
