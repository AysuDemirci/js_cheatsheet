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
      <Col className="cheatsheet-style">
        <h6>
          indexOf() : Returns the first position at which a given element
          appears in an array
        </h6>
        <pre>
          const fruits = ["Apple","Pear","Cherry","Mango"]
          <br />
          let index = fruits.indexOf("Pear")
          <br />
          console.log(index)
          <br />
          =&gt; 1
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
        <div>{fruit}</div>
      </Col>
    </div>
  );
}
