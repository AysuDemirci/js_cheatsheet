import React from "react";
import Concat from "./Concat";
import IndexOf from "./IndexOf";
import Join from "./Join";
import { Col, Row } from "reactstrap";
import LastIndexOf from "./LastIndexOf";
import Pop from "./Pop";
import Push from "./Push";
import Reverse from "./Reverse";
import Shift from "./Shift";
import Splice from "./Splice";
import ToString from "./ToString";
import Unshift from "./Unshift";
import ValueOf from "./ValueOf";
import Alert from "./Functions/OutputtingData/Alert";
import Confirm from "./Functions/OutputtingData/Confirm";
import ConsoleLog from "./Functions/OutputtingData/ConsoleLog";
import DocumentWrite from "./Functions/OutputtingData/DocumentWrite";
import Prompt from "./Functions/OutputtingData/Prompt";

export default function CheatSheet() {
  return (
    <div style={{ marginTop: "40px", marginLeft: "150px" }}>
      <Row>
        <Col md="3">
          <h2 style={{ marginBottom: "20px" }}>Getting Started</h2>
          <Col className="cheatsheet-style">
            <h4 style={{ marginTop: "10px" }}>Console</h4>

            <pre>
              //Hello world!
              <br />
              console.log("Hello World!")
              <br />
              =&gt; Hello World!
            </pre>
            <h4 style={{ marginTop: "10px" }}>Variables</h4>
            <h6 style={{ marginTop: "10px" }}>Data Types</h6>
            <pre>
              var age = 23 =&gt; Number
              <br />
              var x =&gt; Variables
              <br />
              var a = "text" =&gt; Strings
              <br />
              var b = 1 + 2 + 3 =&gt; Operations
              <br />
              var c = true =&gt; True/False Statements
              <br />
              const PI = 3.14 =&gt; Constant Numbers
              <br />
              var name = [firstName:"Amy",lastName:"Cole"]
              <br />
              =&gt; Objects
            </pre>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <h2 style={{ marginBottom: "20px" }}>Arrays</h2>
          <Col>
            <Col className="cheatsheet-style">
              <h4>Array </h4>
              <pre>
                <code>var fruit = ["Banana","Apple","Cherry"]</code>
              </pre>
            </Col>
            <h4 style={{ marginTop: "20px",marginBottom:"20px" }}>Array Methods</h4>
            
            <Col>
            <ul style={{display:"flex",listStyle:"none",gap:"50px",marginLeft:"-40px"}}>
              <li ><Concat /></li>
              <li><IndexOf /></li>
              <li><Join /></li>
             
            </ul>

            <ul style={{display:"flex",listStyle:"none",gap:"50px",marginLeft:"-40px"}}>
              <li><LastIndexOf /></li>
              <li><Reverse /></li>
              <li><Shift /></li>
              
              
            </ul>

            <ul style={{display:"flex",listStyle:"none",gap:"50px",marginLeft:"-40px"}}>
             <li><Pop /></li
             ><li><Push /></li> 
             <li><ToString /></li>
             
            </ul>
            <ul style={{display:"flex",listStyle:"none",gap:"50px",marginLeft:"-40px"}}>
            <li><Unshift /></li> 
            <li><ValueOf /></li>
            <li><Splice /></li> 
            </ul>
            </Col>
            

            
          </Col>
        </Col>
      </Row>

      <Row>
        <Col md="3">
          <h2 style={{ marginBottom: "20px" }}>Functions</h2>
          <Col>
            <Col className="cheatsheet-style">
              <pre>
                function name(parameter1,parameter2,parameter3)
                <br />
                &#123; what the function does &#125;
              </pre>
            </Col>
            <Alert />
            <Confirm />
            <ConsoleLog />
            <DocumentWrite />
            <Prompt />
          </Col>
        </Col>
      </Row>
    </div>
  );
}
