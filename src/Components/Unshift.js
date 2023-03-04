import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function Unshift() {
  const [result, setResult] = useState([]);

  function ClickMe() {
    const numbers = [",","3",",", "4",",", "5",",", "6"];
    const add = numbers.unshift("1",",", "2");
    setResult(numbers);
  }

  return (
    <div>
      <Col className="cheatsheet-style" style={{width:"440px",height:"250px"}}>
        <h6 className="namestyle">unshift(): Adds a new element to the beginning</h6>
        <pre className="namestyle">
          const numbers = ["3","4","5","6"]
          <br />
          console.log(numbers.unshift(1,2))
          <br />
         
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"160px",marginTop:"10px"}}>Try Me</Button>
        <div style={{marginLeft:"165px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
