import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function CharExm() {
    let text = "Mr. Demirci has a blue car";
    let searched = text.search("blue");

    setResult(searched);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "490px", height: "270px" }}
      >
        <h6 className="namestyle">
          search() : Executes a search for a matching text and returns its
          position
        </h6>
        <pre className="namestyle">
          let text = "Mr. Demirci has a blue car"
          <br />
          let searched = text.search("blue")
          <br />
          =&gt;18
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
