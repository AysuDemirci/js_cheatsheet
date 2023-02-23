import React, { useState } from "react";
import Concat from "./Concat";
import IndexOf from "./IndexOf";
import Join from "./Join";
import { Button, Col, Row, Table } from "reactstrap";
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
import Continued from "./Functions/Global Function/Continued";
import Parse from "./Functions/Global Function/Parse";
import For from "./Loops/For";
import While from "./Loops/While";
import DoWhile from "./Loops/DoWhile";
import Break from "./Loops/Break";
import Continue from "./Loops/Continue";
import CharAt from "./String/CharAt"
import CharCodeAt from "./String/CharCodeAt"
import FromCharCode from "./String/FromCharCode"
import Replace from "./String/Replace"
import Search from "./String/Search"
import Slice from "./String/Slice"
import Split from "./String/Split"
import Substr from "./String/Substr"
import Substring from "./String/Substring"
import ToLowerCase from "./String/ToLowerCase"
import ToUpperCase from "./String/ToUpperCase"

export default function CheatSheet() {
  function İfElse() {
    const number = prompt("Enter a number: ");
    if (number > 0) {
      alert("The number greater than 0");
    } else {
      alert("The number less than 0");
    }
  }

  return (
    <div style={{ marginTop: "40px", marginLeft: "130px" }}>
      <Row style={{ gap: "30px" }}>
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
          <Col
            className="cheatsheet-style"
            style={{ width: "500px", height: "390px" }}
          >
            <h4 style={{ marginTop: "10px" }}>Basic Operators</h4>
            <Table style={{ marginTop: "20px" }}>
              <tr>
                <td>+ </td>
                <td>Addition</td>
              </tr>
              <tr>
                <td> -</td>
                <td>Subtraction</td>
              </tr>
              <tr>
                <td>* </td>
                <td>Multiplication</td>
              </tr>
              <tr>
                <td>/ </td>
                <td>Division</td>
              </tr>
              <tr>
                <td> (..) </td>
                <td>Grouping operator</td>
              </tr>
              <tr>
                <td>% </td>
                <td>Modulus (remainder)</td>
              </tr>
              <tr>
                <td>++ </td>
                <td>Increment numbers</td>
              </tr>
              <tr>
                <td>-- </td>
                <td>Decrement numbers</td>
              </tr>
            </Table>
          </Col>
        </Col>
        <Col>
          <Col
            className="cheatsheet-style"
            style={{ width: "500px", marginTop: "60px", height: "390px" }}
          >
            <h4 style={{ marginTop: "10px" }}>Comparison Operators</h4>

            <Table style={{ marginTop: "20px" }}>
              <tr>
                <td> ==</td>
                <td>Equal to</td>
              </tr>
              <tr>
                <td> ===</td>
                <td>Equal value and equal type</td>
              </tr>
              <tr>
                <td> !=</td>
                <td> Not equal</td>
              </tr>
              <tr>
                <td> !==</td>
                <td>Not equal value or not equal type</td>
              </tr>
              <tr>
                <td>&gt; </td>
                <td>Greater than</td>
              </tr>
              <tr>
                <td> &lt;</td>
                <td>Less than</td>
              </tr>
              <tr>
                <td> &lt;=</td>
                <td> Greater than or equal to</td>
              </tr>
              <tr>
                <td> &lt;=</td>
                <td>Less than or equal to</td>
              </tr>
              <tr>
                <td> ?</td>
                <td>Ternary operator</td>
              </tr>
            </Table>
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
                <br />
                <Row>
                  <ul
                    style={{
                      display: "flex",
                      listStyle: "none",
                      gap: "100px",
                      marginLeft: "-10px",
                    }}
                  >
                    <li>
                      <DocumentWrite />
                    </li>
                    <li>
                      {" "}
                      <Prompt />
                    </li>
                  </ul>
                </Row>
                <Row>
                  <ul
                    style={{
                      display: "flex",
                      listStyle: "none",
                      gap: "100px",
                      marginLeft: "-10px",
                    }}
                  >
                    <li>
                      <Continued />
                    </li>
                    <li>
                      <Parse />
                    </li>
                  </ul>
                </Row>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
      <Row style={{ columnGap: "170px" }}>
        <h3>Loops </h3>
        <Col md="3">
          <Col className="cheatsheet-style" style={{ width: "500px" }}>
            <Col>
              <pre>
                <code>
                  for(before loop;condition for loop;execute after loop)
                  <br />
                  &#123; //what to do during the loop &#125;
                </code>
              </pre>
            </Col>
          </Col>
        </Col>
        <Row>
          <Col md="3">
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "100px",
                marginLeft: "-30px",
              }}
            >
              <li>
                {" "}
                <For />
              </li>
              <li>
                <While />
              </li>
              <li>
                <DoWhile />
              </li>
            </ul>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "100px",
                marginLeft: "-30px",
              }}
            >
              <li>
                <Break />
              </li>
              <li>
                <Continue />
              </li>
            </ul>
          </Col>
        </Row>
        <Row style={{ columnGap: "150px" }}>
          <Col md="3">
            <h3>If - Else</h3>
            <Col
              className="cheatsheet-style"
              style={{ width: "500px", height: "330px" }}
            >
              <pre>
                if(condition)&#123;
                <br />
                //what to do if condition is met
                <br />
                &#125;else&#123;
                <br />
                //what to do if condition is not met &#125;
              </pre>
              <h5>Example</h5>
              <pre>
                const number =prompt("Enter a number: ")
                <br />
                if(number &gt; 0)&#123;
                <br />
                alert("The number is greater than 0")
                <br />
                &#125;else&#123;
                <br />
                alert("The number is less than 0") &#125;
              </pre>
              <Button onClick={İfElse}>Click Me</Button>
            </Col>
          </Col>
        </Row>
      </Row>
      <Row>
        <Col md="3">
          <h3>Strings</h3>
          <ul  style={{
                    display: "flex",
                    listStyle: "none",
                    gap: "100px",
                    marginLeft: "-40px",
                  }}>
            <li><CharAt/></li>
            <li><CharCodeAt/></li>
            <li><FromCharCode/></li>
          </ul>
          <ul  style={{
                    display: "flex",
                    listStyle: "none",
                    gap: "100px",
                    marginLeft: "-40px",
                  }}>
            <li><Replace/></li>
            <li><Search/></li>
            <li><Slice/></li>
          </ul>
          <ul  style={{
                    display: "flex",
                    listStyle: "none",
                    gap: "100px",
                    marginLeft: "-40px",
                  }}>
            <li><Split/></li>
            <li><Substr/></li>
            <li><Substring/></li>
          </ul>
          <ul  style={{
                    display: "flex",
                    listStyle: "none",
                    gap: "100px",
                    marginLeft: "-40px",
                  }}>
            <li><ToLowerCase/></li>
            <li><ToUpperCase/></li>
            
          </ul>
            
          
        </Col>
      </Row>
    </div>
  );
}
