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
      <Col className="cheatsheet-style">
        <h6>valueOf(): Returns the primitive value of the specified object</h6>
        <pre>
          const fruits = ["Apple","Pear","Lemon","Cherry"]
          <br />
          const value = fruits.valueOf()
          <br />
          console.log(value)
          <br />
          =&gt;["Apple","Pear","Lemon","Cherry"]
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
        <div>{result}</div>
      </Col>
    </div>
  );
}
