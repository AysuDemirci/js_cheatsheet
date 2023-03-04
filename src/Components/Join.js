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
      <Col className="cheatsheet-style" style={{width:"440px",height:"260px"}}>
        <h6 className="namestyle">
          join() : Combine elements of an array into a single string and return
          the string
        </h6>
        <pre className="namestyle">
          const lessons = ["Math","History","PE"]
          <br />
          let texts = lessons.join()
          <br />
         
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"160px",marginTop:"10px"}}>Try Me</Button>
        <div style={{marginLeft:"150px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
