import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function Unshift() {
  const [result, setResult] = useState([]);

  function ClickMe() {
    const numbers = ["3", "4", "5", "6"];
    const add = numbers.unshift(1, 2);
    setResult(numbers);
  }

  return (
    <div>
      <Col className="cheatsheet-style">
        <h6>unshift(): Adds a new element to the beginning</h6>
        <pre>
          const numbers = ["3","4","5","6"]
          <br />
          console.log(numbers.unshift(1,2))
          <br />
          =&gt; ["1","2","3","4","5","6"]
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
        <div>{result}</div>
      </Col>
    </div>
  );
}
