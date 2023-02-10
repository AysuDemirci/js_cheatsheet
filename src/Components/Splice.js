import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function Splice() {
  const [result, setResult] = useState([]);
  const [result2, setResult2] = useState([]);

  function ClickMe() {
    const fruits = ["Apple", ",", "Pear", ",", "Cherry"];
    const spliced = fruits.splice(2, 0, "Lemon", ",");
    setResult(fruits);
  }

  function ClickMe2() {
    const fruits = ["Apple", "Pear", "Lemon", "Cherry"];
    const spliced = fruits.splice(2, 2, "Lemon");
    setResult2(fruits);
  }

  return (
    <div>
      <Col className="cheatsheet-style">
        <h6>splice(): Adds elements in a specified way and position</h6>
        <pre>
          const fruits = ["Apple","Pear","Cherry"]
          <br />
          const spliced = fruits.splice(2,0,"Lemon")
          <br />
          console.log(fruits)
          <br />
          =&gt;["Apple","Pear","Lemon","Cherry"]
          <br />
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
        <div>{result}</div>
        <pre>
          <br />
          const fruits = ["Apple","Pear","Lemon","Cherry"]
          <br />
          const spliced = fruits.splice(2,2,"Lemon")
          <br />
          console.log(fruits)
          <br />
          =&gt;["Apple","Pear","Lemon"]
        </pre>
        <Button onClick={ClickMe2}>Click Me</Button>
        <div>{result2}</div>
      </Col>
    </div>
  );
}
