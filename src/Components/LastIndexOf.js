import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function LastIndexOf() {
  const [result, setResult] = useState([]);

  function ClickMe() {
    const fruits = ["Apple", "Pear", "Cherry", "Mango", "Pear"];
    let index = fruits.lastIndexOf("Pear");

    setResult(index);
  }

  return (
    <div>
      <Col className="cheatsheet-style">
        <h6>
          lastIndexOf() : Gives the last position at which a given element
          appears in an array
        </h6>
        <pre>
          const fruits = ["Apple","Pear","Cherry","Mango","Pear"]
          <br />
          let index = fruits.lastIndexOf("Pear")
          <br />
          console.log(index)
          <br />
          =&gt;4
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
        <div>{result}</div>
      </Col>
    </div>
  );
}
