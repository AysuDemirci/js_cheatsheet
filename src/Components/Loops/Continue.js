import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function For() {
  const [result, setResult] = useState();

  function WhileExm() {
    let text = "";
    for(let i =0; i<5;i++){
        if(i===3)continue;
        text +=i +","
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
          continue : Skip parts of the cycle if certain conditions are met
        </h6>
        <pre className="namestyle">
          let text= ""
          <br />
          for(let i =0; i&lt;5, i++)
          &#123;
          <br />
         if(i===3)continue;
          <br />
         text += i + ","&#125;
          <br />
          =&gt; 0,1,2,4
        </pre>
        <Button onClick={WhileExm}>Click Me</Button>
        <div>{result}</div>
      </Col>
    </div>
  );
}