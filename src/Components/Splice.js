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
      <Col className="cheatsheet-style" style={{width:"440px"}}>
        <h6 className="namestyle">splice(): Adds elements in a specified way and position</h6>
        <pre className="namestyle">
          const fruits = ["Apple","Pear","Cherry"]
          <br />
          const spliced = fruits.splice(2,0,"Lemon")
          <br />
          console.log(fruits)
          <br />
          
          <br />
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"160px",marginTop:"10px"}}>Click Me</Button>
        <div style={{marginLeft:"120px",marginTop:"10px"}}>{result}</div>
        <pre className="namestyle">
          <br />
          const fruits = ["Apple","Pear","Lemon","Cherry"]
          <br />
          const spliced = fruits.splice(2,2,"Lemon")
          <br />
          console.log(fruits)
          <br />
          
        </pre>
        <Button onClick={ClickMe2} style={{marginLeft:"160px",marginTop:"10px"}}>Try Me</Button>
        <div style={{marginLeft:"145px",marginTop:"10px"}}>{result2}</div>
      </Col>
    </div>
  );
}
