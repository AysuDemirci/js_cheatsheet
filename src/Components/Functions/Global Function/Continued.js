import React from "react";
import { Col, Table } from "reactstrap";

export default function URI() {
  return (
    <div>
      <h4 style={{ marginTop: "10px",marginBottom:"20px" }} >Global Functions</h4>
      <Col
        className="cheatsheet-style"
        style={{ width: "460px", height: "280px"}}
      >
        
        <table className="namestyle">
          <tr>
            <td className="td-style">eval()</td>
            <td>
            Evaluates JavaScript code represented as a string
            </td>
          </tr>
          <br/>
          <tr>
            <td className="td-style">isFinite()</td>
            <td>Determines whether a passed value is a finite number</td>
          </tr>
          <br/>
          <tr>
            <td className="td-style">isNaN()</td>
            <td>Determines whether a value is NaN or not</td>
          </tr>
          <br/>
          <tr>
            <td className="td-style">encodeURIComponent()&nbsp;</td>
            <td >Same but for URI components</td>
          </tr>
          <br/>
          <tr>
            <td className="td-style">decodeURIComponent()</td>
            <td >Decodes a URI component</td>
          </tr>
          
          
        </table>
      </Col>
    </div>
  );
}