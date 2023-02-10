import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function Pop() {
  const [result, setResult] = useState([]);

  function ClickMe() {
    const animals = ["Cow", ",", "Horse", ",", "Sheep"];
    const total = animals.push(",", "Chicken", ",", "Snake");

    setResult(animals);
  }
  return (
    <div>
      <Col className="cheatsheet-style">
        <h6>push(): Add a new element at the end</h6>
        <pre>
          const animals =["Cow","Horse","Sheep"]
          <br />
          const total = animals.push("Chicken","Snake")
          <br />
          console.log(animals)
          <br />
          =&gt;["Cow","Horse","Sheep","Chicken","Snake"]
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
        <div>{result}</div>
      </Col>
    </div>
  );
}
