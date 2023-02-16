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
      <Col className="cheatsheet-style" style={{width:"490px",height:"250px"}}>
        <h6 className="namestyle">push(): Add a new element at the end</h6>
        <pre className="namestyle">
          const animals =["Cow","Horse","Sheep"]
          <br />
          const total = animals.push("Chicken","Snake")
          <br />
          console.log(animals)
          <br />
          =&gt;["Cow","Horse","Sheep","Chicken","Snake"]
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"180px",marginTop:"10px"}}>Click Me</Button>
        <div style={{marginLeft:"110px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
