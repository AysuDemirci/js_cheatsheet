import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function Join() {
  const [result, setResult] = useState([]);

  function ClickMe() {
    const lessons = ["Math", "History", "PE"];
    let texts = lessons.join();
    setResult(texts);
  }

  return (
    <div>
      <Col className="cheatsheet-style" style={{width:"490px",height:"220px"}}>
        <h6>
          join() : Combine elements of an array into a single string and return
          the string
        </h6>
        <pre>
          const lessons = ["Math","History","PE"]
          <br />
          let texts = lessons.join()
          <br />
          =&gt;Math,History,PE
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
        <div>{result}</div>
      </Col>
    </div>
  );
}
