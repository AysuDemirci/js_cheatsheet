import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function ToString() {
  const [result, setResult] = useState([]);

  function ClickMe() {
    const array1 = ["1", "2", "a", "2a"];
    const string = array1.toString();
    setResult(string);
  }

  return (
    <div>
      <Col className="cheatsheet-style" style={{width:"440px",height:"250px"}}>
        <h6 className="namestyle">toString(): Converts elements to strings</h6>
        <pre className="namestyle">
          const array1 = ["1","2","a","2a"]
          <br />
          console.log(array1.toString)
          <br />
          
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"160px",marginTop:"10px"}}>Try Me</Button>
        <div style={{marginLeft:"175px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
