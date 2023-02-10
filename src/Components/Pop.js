import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function Pop() {
  const [result, setResult] = useState([]);

  function ClickMe() {
    const fruits = ["Apple", "Pear", "Cherry", "Mango", "Pear"];
    const popped = fruits.pop();

    setResult(popped);
  }

  return (
    <div>
      <Col className="cheatsheet-style">
        <h6>pop() : Removes the last element of an array</h6>
        <pre>
          const fruits = ["Apple","Cherry","Mango","Pear"]
          <br />
          const popped = fruits.pop()
          <br />
          console.log(fruits)
          <br />
          =&gt; ["Pear"]
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
        <div>{result}</div>
      </Col>
    </div>
  );
}
