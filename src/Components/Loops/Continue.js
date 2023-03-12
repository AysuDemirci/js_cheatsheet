import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function For() {
  const [result, setResult] = useState();

  function ContinueExm() {
    let text = "";
    for(let i =0; i<5;i++){
        if(i===3)continue;
        text +=i +" "
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
          
        </pre>
        <Button style={{marginLeft:"170px",marginTop:"30px"}} onClick={ContinueExm}>Try Me</Button>
        <div style={{marginLeft:"185px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}