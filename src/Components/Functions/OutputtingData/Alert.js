import React from "react";
import { Button, Col } from "reactstrap";

export default function Alert(){

function ShowAlert(){
  alert("Hello Users")
}

    return(

        <div>
        <h4 style={{ marginTop: "10px" }}>Outputting Data</h4>
        <Col className="cheatsheet-style">
          <h6>alert(): Output data in an alert box in the browser window</h6>
         <pre>
          function ShowAlert()
          <br/>
          &#123; alert("Hello Users")&#125;
         </pre>
         <Button onClick={ShowAlert}>Click Me</Button>
        </Col>
      </div>
    )
}