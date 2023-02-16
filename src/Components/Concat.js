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
      
      <Col className="cheatsheet-style " style={{width:"490px",height:"250px"}}>
        <h6 className="namestyle">concat() : Join several arrays into one</h6>
        <pre className="namestyle">
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
        <Button onClick={ClickMe} style={{marginLeft:"180px",marginTop:"10px"}}>Click Me</Button>
        
        <div style={{marginLeft:"130px",marginTop:"10px"}}>{result}</div>
      </Col>
    </div>
  );
}
