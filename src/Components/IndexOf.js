import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function IndexOf() {
  
    const [fruit ,setFruit]= useState([])

    function ClickMe(){
        const fruits = ["Apple","Pear","Cherry","Mango"]
        let index = fruits.indexOf("Pear")
        setFruit(index)
    }

  return (
    <div>
      <Col className="cheatsheet-style" style={{width:"490px",height:"250px"}}>
        <h6 className="namestyle">
          indexOf() : Returns the first position at which a given element
          appears in an array
        </h6>
        <pre className="namestyle">
          const fruits = ["Apple","Pear","Cherry","Mango"]
          <br />
          let index = fruits.indexOf("Pear")
          <br />
          console.log(index)
          <br />
          =&gt; 1
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"180px",marginTop:"10px"}}>Click Me</Button>
        <div style={{marginLeft:"220px",marginTop:"10px"}}>{fruit}</div>
      </Col>
    </div>
  );
}
