import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function For() {
  const [result, setResult] = useState();

  function DoWhileExm() {
    let text = "";
    let i =0;
    do{
        text+=i + " ";
        i++
    }
    while(i<3)
    setResult(text);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "460px", height: "320px", marginTop: "20px" }}
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
          text +=i + ","; i++;
          <br />
           &#125;
          <br />
          while(i &lt; 3)
          <br/>
         
        </pre>
        <Button style={{marginLeft:"170px",marginTop:"-30px"}} onClick={DoWhileExm}>Try Me</Button>
        <div style={{marginLeft:"190px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}