import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function For() {
  const [forloop, setForloop] = useState();

  function ForLoop() {
    const cars = ["BMW", ",", "Volvo", ",", "Ford", ",", "Fiat", ",", "Audi"];
    let text = "";
    for (let i = 0; i < cars.length; i++) {
      text += cars[i];
      setForloop(text);
    }
  }

  return (
    <div>
      <Col
        className="cheatsheet-style "
        style={{ width: "490px", height: "350px", marginTop: "20px" }}
      >
        <h6 className="namestyle">
          for : The most common way to create a loop in Javascript
        </h6>
        <pre className="namestyle">
          const cars = ["BMW", "Volvo","Ford", "Fiat", "Audi"];
          <br />
          let text = "";
          <br />
          for(let i = 0; i &lt; cars&#46;length; i++) &#123;
          <br />
          console.log(i) &#125;
          <br />
          =&gt;BMW,Volvo,Ford,Fiat,Audi
        </pre>
        <Button onClick={ForLoop}>Click Me</Button>
        <div >{forloop}</div>
      </Col>
    </div>
  );
}
