import React, { useState } from "react";
import { Button, Col } from "reactstrap";

export default function Concat() {
  
    const[result,setResult]=useState([])

    function ClickMe (){
      const names1 =["Amy",",","Emily"]
      const names2=[",","Roxenne",",","Todd"]
      const children = names1.concat(names2)
     setResult(children)
    }
   
  return (
    <div>
      <h4 style={{ marginTop: "10px" }}>Array Methods</h4>
      <Col className="cheatsheet-style">
        <h6>concat() : Join several arrays into one</h6>
        <pre>
          const names1= ["Amy","Emily"]
          <br />
          const names2 =["Roxenne","Todd"]
          <br />
          const children = names1.concat(names2)
          <br />
          console.log(children)
          <br />
          =&gt; ["Amy","Emily","Roxenne","Todd"]
        </pre>
        <Button onClick={ClickMe}>Click Me</Button>
        
        <div>{result}</div>
      </Col>
    </div>
  );
}
