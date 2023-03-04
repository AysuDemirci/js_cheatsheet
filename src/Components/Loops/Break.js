import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function For() {
  const [result, setResult] = useState();

  function WhileExm() {
    let text = "";
    for(let i =0; i<5;i++){
        if(i===3)break;
        text +=i+" " ;
       
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
          break : Used to stop and exit the cycle at certain conditions
        </h6>
        <pre className="namestyle">
          let text= ""
          <br />
          for(let i =0; i&lt;5, i++)
          &#123;
          <br />
         if(i===3)break;
          <br />
         text += i + ","&#125;
          <br />
        
        </pre>
        <Button style={{marginLeft:"170px",marginTop:"30px"}} onClick={WhileExm}>Try Me</Button>
        <div style={{marginLeft:"190px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}