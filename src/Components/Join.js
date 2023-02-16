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
      <Col className="cheatsheet-style" style={{width:"490px",height:"250px"}}>
        <h6 className="namestyle">
          join() : Combine elements of an array into a single string and return
          the string
        </h6>
        <pre className="namestyle">
          const lessons = ["Math","History","PE"]
          <br />
          let texts = lessons.join()
          <br />
          =&gt;Math,History,PE
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"180px",marginTop:"10px"}}>Click Me</Button>
        <div style={{marginLeft:"170px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
