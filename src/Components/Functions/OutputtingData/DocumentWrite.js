import React from "react";
import { Button, Col } from "reactstrap";

export default function DocumentWrite() {
  function ClickMe() {
    const lessons = ["Math", "History", "PE"];
    let texts = lessons.join();
    document.write(texts);
  }
  return (
    <div>
      <Col className="cheatsheet-style" style={{ width: "450px", height: "250px" }}>
        <h6 className="namestyle">document.write(): write directly to the HTML document</h6>

        <pre className="namestyle">
          function ConsoleLog() &#123;
          <br />
          const lessons = ["Math", "History", "PE"];
          <br />
          let texts = lessons.join();
          <br />
          document.write(texts); &#125;
        </pre>
        <Button onClick={ClickMe} style={{marginLeft:"160px",marginTop:"20px"}}>Click Me</Button>
      </Col>
    </div>
  );
}
