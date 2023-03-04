import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function For() {
  const [result, setResult] = useState();

  function WhileExm() {
    let text = "";
    let i = 0;
    while (i < 2) {
      text += "The number is " + i + " ";
      i++;
    }
    setResult(text);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "460px", height: "320px", marginTop: "20px" }}
      >
        <h6 className="namestyle">
          while : Sets up conditions under which a loop executes
        </h6>
        <pre className="namestyle">
          let text= ""
          <br />
          let i =0;
          <br />
          while(i&lt;2) &#123;
          <br />
          text += "The number is"+ i;
          <br />
          i++ &#125;
          <br />
         
        </pre>
        <Button style={{marginLeft:"170px",marginTop:"25px"}} onClick={WhileExm}>Try Me</Button>
        <div style={{marginLeft:"110px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
