import React from "react";
import { Button, Col } from "reactstrap";

export default function Confirmed() {
  function myFunc() {
    prompt("Please enter your name");
  }

  return (
    <div>
      <Col className="cheatsheet-style" style={{ width: "450px", height: "250px" }}>
        <h6 className="namestyle">prompt(): creates an dialogue for user input</h6>
        <pre className="namestyle">
          function myFunc() &#123;
          <br />
          prompt("Please enter your name")&#125;
        </pre>
        <Button onClick={myFunc} style={{marginLeft:"160px",marginTop:"50px"}}>Click Me</Button>
      </Col>
    </div>
  );
}