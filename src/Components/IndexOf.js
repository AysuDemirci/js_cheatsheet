import React from "react";
import { Col } from "reactstrap";

export default function indexOf() {
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
      </Col>
    </div>
  );
}
