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
      <Col className="cheatsheet-style" style={{width:"490px",height:"250px"}}>
        <h6 className="namestyle">toString(): Converts elements to strings</h6>
        <pre className="namestyle">
          const array1 = ["1","2","a","2a"]
          <br />
          console.log(array1.toString)
          <br />
          =&gt;"1,2,a,2a"
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"180px",marginTop:"10px"}}>Click Me</Button>
        <div style={{marginLeft:"200px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
