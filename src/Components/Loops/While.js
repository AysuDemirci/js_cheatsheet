import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function For() {
  const [result, setResult] = useState();

  function WhileExm() {
    let text = "";
    let i = 0;
    while (i < 2) {
      text += "The number is " + i + ",";
      i++;
    }
    setResult(text);
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "490px", height: "350px", marginTop: "20px" }}
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
          =&gt;The number is 0, The number is 1
        </pre>
        <Button style={{marginLeft:"180px",marginTop:"10px"}} onClick={WhileExm}>Click Me</Button>
        <div style={{marginLeft:"110px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
