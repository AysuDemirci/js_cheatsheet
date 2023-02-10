import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function Pop() {
  const [result, setResult] = useState([]);

  function ClickMe() {
    const numbers = ["1", ",", "2", ",", "3", ",", "4"];
    const reserved = numbers.reverse();
    setResult(reserved);
  }

  return (
    <div>
      <Col className="cheatsheet-style">
        <h6>reverse(): Reverse the order of the elements in an array</h6>
        <pre>
          const numbers =["1","2","3","4"]
          <br />
          const reserved = numbers.reverse()
          <br />
          console.log(reserved)
          <br />
          =&gt;["4","3","2","1"]
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
        <div>{result}</div>
      </Col>
    </div>
  );
}
