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
      <Col className="cheatsheet-style" style={{width:"490px",height:"250px"}}>
        <h6 className="namestyle">unshift(): Adds a new element to the beginning</h6>
        <pre className="namestyle">
          const numbers = ["3","4","5","6"]
          <br />
          console.log(numbers.unshift(1,2))
          <br />
          =&gt; ["1","2","3","4","5","6"]
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"180px",marginTop:"10px"}}>Click Me</Button>
        <div style={{marginLeft:"195px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
