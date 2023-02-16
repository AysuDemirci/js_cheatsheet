import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function ValueOf() {

  const[result,setResult]=useState([])

  function ClickMe(){
    const fruits = ["Apple",",","Pear",",","Lemon",",","Cherry"]
    const value = fruits.valueOf()
    setResult(value)
  }



  return (
    <div>
      <Col className="cheatsheet-style " style={{width:"490px",height:"250px"}}>
        <h6 className="namestyle">valueOf(): Returns the primitive value of the specified object</h6>
        <pre className="namestyle">
          const fruits = ["Apple","Pear","Lemon","Cherry"]
          <br />
          const value = fruits.valueOf()
          <br />
          console.log(value)
          <br />
          =&gt;["Apple","Pear","Lemon","Cherry"]
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"180px",marginTop:"10px"}}>Click Me</Button>
        <div style={{marginLeft:"130px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
