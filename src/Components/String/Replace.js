import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function CharAt() {
  const [result, setResult] = useState();

  function CharExm() {
    const coding = "I learned how to code from TV";
    const replace = coding.replace("TV", "Internet");

    setResult(replace);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "460px", height: "240px" }}
      >
        <h6 className="namestyle">
          replace() : Find and replace specific text in a string
        </h6>
        <pre className="namestyle">
          const coding = "I learned how to code from TV"
          <br />
          const replace = coding.replace("TV","Internet")
          <br />
         
        </pre>
        <Button
          onClick={CharExm}
          style={{ marginLeft: "175px", marginTop: "10px" }}
        >
          Try Me
        </Button>
        <div style={{marginLeft:"110px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
