import React from "react";
import { Button, Col } from "reactstrap";

export default function Confirmed() {
  function myFunc() {
    window.confirm("Press OK to close this option");
  }

  return (
    <div>
      <Col className="cheatsheet-style">
        <h6>confirm(): Opens up yes/no dialog and returns true/false depending on user click</h6>
        <pre>
          function myFunc() &#123;
          <br />
          window.confirm("Press OK to close this option")&#125;
        </pre>
        <Button onClick={myFunc}>Click Me</Button>
      </Col>
    </div>
  );
}
