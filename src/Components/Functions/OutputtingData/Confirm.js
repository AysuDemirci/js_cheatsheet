import React from "react";
import { Button, Col } from "reactstrap";

export default function Confirmed() {
  function myFunc() {
    window.confirm("Press OK to close this option");
  }

  return (
    <div>
      <Col className="cheatsheet-style" style={{ width: "450px", height: "250px",marginTop:"45px" }}>
        <h6 className="namestyle">confirm(): Opens up yes/no dialog and returns true/false depending on user click</h6>
        <pre className="namestyle">
          function myFunc() &#123;
          <br />
          window.confirm("Press OK to close this option")&#125;
        </pre>
        <Button onClick={myFunc} style={{marginLeft:"160px",marginTop:"20px"}}>Click Me</Button>
      </Col>
    </div>
  );
}
