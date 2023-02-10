import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function ToString() {
  const [result, setResult] = useState([]);

  function ClickMe() {
    const array1 = ["1", "2", "a", "2a"];
    const string = array1.toString();
    setResult(string);
  }

  return (
    <div>
      <Col className="cheatsheet-style">
        <h6>toString(): Converts elements to strings</h6>
        <pre>
          const array1 = ["1","2","a","2a"]
          <br />
          console.log(array1.toString)
          <br />
          =&gt;"1,2,a,2a"
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
        <div>{result}</div>
      </Col>
    </div>
  );
}
