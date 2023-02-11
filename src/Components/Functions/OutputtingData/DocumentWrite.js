import React from "react";
import { Button, Col } from "reactstrap";

export default function Confirmed() {
  function ClickMe() {
    const lessons = ["Math", "History", "PE"];
    let texts = lessons.join();
    document.write(texts);
  }
  return (
    <div>
      <Col className="cheatsheet-style">
        <h6>document.write(): write directly to the HTML document</h6>

        <pre>
          function ConsoleLog() &#123;
          <br />
          const lessons = ["Math", "History", "PE"];
          <br />
          let texts = lessons.join();
          <br />
          document.write(texts); &#125;
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
      </Col>
    </div>
  );
}
