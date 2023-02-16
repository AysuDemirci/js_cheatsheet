import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function Pop() {
  const [result, setResult] = useState([]);

  function ClickMe() {
    const myFish = ["Angel", "Clown", ",", "Mandarin", ",", "Surgeon"];
    const shifted = myFish.shift();
    setResult(myFish);
  }

  return (
    <div>
      <Col className="cheatsheet-style" style={{width:"490px",height:"250px"}}>
        <h6 className="namestyle">shift(): Remove the first element of an array</h6>
        <pre className="namestyle">
          const myFish = ["Angel","Clown","Mandarin","Surgeon"]
          <br />
          const shifted = myFish.shift()
          <br />
          console.log(myFish)
          <br />
          =&gt; ["Clown","Mandarin","Surgeon"]
        </pre>

        <Button onClick={ClickMe} style={{marginLeft:"180px",marginTop:"10px"}}>Click Me</Button>
        <div style={{marginLeft:"130px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
