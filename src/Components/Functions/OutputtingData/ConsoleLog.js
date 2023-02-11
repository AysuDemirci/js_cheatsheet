import React from "react";
import { Button, Col } from "reactstrap";

export default function Confirmed() {
  function ClickMe() {
    const lessons = ["Math", "History", "PE"];
    let texts = lessons.join();
    console.log(texts);
  }
  return (
    <div>
      <Col className="cheatsheet-style">
        <h6>
          console.log(): writes information to the browser console, good for
          debugging purposes
        </h6>
        (Look at the browser console)
        <pre>
          function ConsoleLog() &#123;
          <br />
          const lessons = ["Math", "History", "PE"];
          <br />
          let texts = lessons.join();
          <br />
          console.log(texts); &#125;
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
      </Col>
    </div>
  );
}
