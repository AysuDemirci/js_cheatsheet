import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function Pop() {
  const [result, setResult] = useState([]);

  function ClickMe() {
    const numbers = ["1", ",", "2", ",", "3", ",", "4"];
    const reserved = numbers.reverse();
    setResult(reserved);
  }

  return (
    <div>
      <Col className="cheatsheet-style" style={{width:"440px",height:"260px"}}>
        <h6 className="namestyle">reverse(): Reverse the order of the elements in an array</h6>
        <pre className="namestyle">
          const numbers =["1","2","3","4"]
          <br />
          const reserved = numbers.reverse()
          <br />
          console.log(reserved)
          <br />
          
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"160px",marginTop:"10px"}}>Try Me</Button>
        <div style={{marginLeft:"175px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
