import React from "react";
import { Button, Col } from "reactstrap";

export default function Confirmed() {
  function myFunc() {
    prompt("Please enter your name");
  }

  return (
    <div>
      <Col className="cheatsheet-style">
        <h6>prompt(): creates an dialogue for user input</h6>
        <pre>
          function myFunc() &#123;
          <br />
          prompt("Please enter your name")&#125;
        </pre>
        <Button onClick={myFunc}>Click Me</Button>
      </Col>
    </div>
  );
}