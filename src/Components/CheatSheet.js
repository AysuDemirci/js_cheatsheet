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
    <div style={{ marginTop: "40px", marginLeft: "130px" }}>
      <Row style={{ gap: "50px" }}>
        <Col>
          <h2 style={{ marginBottom: "20px" }}>Getting Started</h2>
          <Col className="cheatsheet-style" style={{ width: "500px" }}>
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
        <Col>
          <h2 style={{ marginBottom: "20px" }}>Operators</h2>
          <Col className="cheatsheet-style" style={{ width: "500px" }}>
            <h4 style={{ marginTop: "10px" }}>Basic Operators</h4>
            + &nbsp;&nbsp;&nbsp;Addition
            <br />
            - &nbsp;&nbsp;&nbsp;Subtraction
            <br />
            * &nbsp;&nbsp;&nbsp;Multiplication
            <br />
            / &nbsp;&nbsp;&nbsp;Division
            <br />
            (..) &nbsp;&nbsp;&nbsp;Grouping operator
            <br />
            % &nbsp;&nbsp;&nbsp;Modulus (remainder)
            <br />
            ++ &nbsp;&nbsp;&nbsp;Increment numbers
            <br />
            -- &nbsp;&nbsp;&nbsp;Decrement numbers
            <br />
          </Col>
        </Col>
        <Col>
          <Col
            className="cheatsheet-style"
            style={{ width: "500px", marginTop: "60px" }}
          >
            <h4 style={{ marginTop: "10px" }}>Comparison Operators</h4>
            == &nbsp;&nbsp;&nbsp; Equal to
            <br />
            === &nbsp;&nbsp;&nbsp; Equal value and equal type
            <br />
            != &nbsp;&nbsp;&nbsp; Not equal
            <br />
            !== &nbsp;&nbsp;&nbsp; Not equal value or not equal type
            <br />
            &gt; &nbsp;&nbsp;&nbsp; Greater than
            <br />
            &lt; &nbsp;&nbsp;&nbsp;Less than
            <br />
            &gt;= &nbsp;&nbsp;&nbsp; Greater than or equal to
            <br />
            &lt;= &nbsp;&nbsp;&nbsp; Less than or equal to
            <br />
            ? &nbsp;&nbsp;&nbsp;Ternary operator
            <br />
          </Col>
        </Col>
        <Col></Col>
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
            <Row>
              <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
                Array Methods
              </h4>

              <Col>
                <ul
                  style={{
                    display: "flex",
                    listStyle: "none",
                    gap: "100px",
                    marginLeft: "-40px",
                  }}
                >
                  <li>
                    <Concat />
                  </li>
                  <li>
                    <IndexOf />
                  </li>
                  <li>
                    <Join />
                  </li>
                </ul>

                <ul
                  style={{
                    display: "flex",
                    listStyle: "none",
                    gap: "100px",
                    marginLeft: "-40px",
                  }}
                >
                  <li>
                    <LastIndexOf />
                  </li>
                  <li>
                    <Reverse />
                  </li>
                  <li>
                    <Shift />
                  </li>
                </ul>

                <ul
                  style={{
                    display: "flex",
                    listStyle: "none",
                    gap: "100px",
                    marginLeft: "-40px",
                  }}
                >
                  <li>
                    <Pop />
                  </li>
                  <li>
                    <Push />
                  </li>
                  <li>
                    <ToString />
                  </li>
                </ul>
                <ul
                  style={{
                    display: "flex",
                    listStyle: "none",
                    gap: "100px",
                    marginLeft: "-40px",
                  }}
                >
                  <li>
                    <Unshift />
                  </li>
                  <li>
                    <ValueOf />
                  </li>
                  <li>
                    <Splice />
                  </li>
                </ul>
              </Col>
            </Row>
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
            <Row>
              <Col>
                {" "}
                <ul
                  style={{
                    display: "flex",
                    listStyle: "none",
                    gap: "100px",
                    marginLeft: "-40px",
                  }}
                >
                  <li>
                    <Alert />
                  </li>
                  <li>
                    <Confirm />
                  </li>
                  <li>
                    <ConsoleLog />
                  </li>
                  
                 
                </ul>
                <br/>
                <Row>
                  <ul style={{
                    display: "flex",
                    listStyle: "none",
                    gap: "100px",
                    marginLeft: "-10px",
                    
                  }}>
                  <li>
                    <DocumentWrite />
                  </li>
                  <li>
                    {" "}
                    <Prompt />
                  </li>
                  </ul>
                </Row>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </div>
  );
}
