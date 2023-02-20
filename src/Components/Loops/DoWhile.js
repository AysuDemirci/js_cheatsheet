import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function For() {
  const [result, setResult] = useState();

  function WhileExm() {
    let text = "";
    let i =0;
    do{
        text+=i + ",";
        i++
    }
    while(i<3)
    setResult(text);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "490px", height: "350px", marginTop: "20px" }}
      >
        <h6 className="namestyle">
        do while : Similar to the while loop, however, it executes at least once and performs a check at the end to
see if the condition is met to execute again
        </h6>
        <pre className="namestyle">
          let text= ""
          <br />
          let i =0;
          <br />
          do &#123;
          <br />
          text +=i + ",";
          <br/>
           i++
          <br />
           &#125;
          <br />
          while(i &lt; 3)
          <br/>
          =&gt;0,1,2
        </pre>
        <Button onClick={WhileExm}>Click Me</Button>
        <div>{result}</div>
      </Col>
    </div>
  );
}