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
      <Col className="cheatsheet-style" style={{width:"490px",height:"250px"}}>
        <h6 className="namestyle">pop() : Removes the last element of an array</h6>
        <pre className="namestyle">
          const fruits = ["Apple","Cherry","Mango","Pear"]
          <br />
          const popped = fruits.pop()
          <br />
          console.log(fruits)
          <br />
          =&gt; ["Pear"]
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"180px",marginTop:"10px"}}>Click Me</Button>
        <div style={{marginLeft:"210px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
