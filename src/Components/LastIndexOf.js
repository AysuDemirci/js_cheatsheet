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
      <Col className="cheatsheet-style" style={{width:"490px",height:"250px"}}>
        <h6 className="namestyle">
          lastIndexOf() : Gives the last position at which a given element
          appears in an array
        </h6>
        <pre className="namestyle">
          const fruits = ["Apple","Pear","Cherry","Mango","Pear"]
          <br />
          let index = fruits.lastIndexOf("Pear")
          <br />
          console.log(index)
          <br />
          =&gt;4
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"180px",marginTop:"10px"}}>Click Me</Button>
        <div style={{marginLeft:"220px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
