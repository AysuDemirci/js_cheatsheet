import React from "react";
import { Col, Table } from "reactstrap";

export default function URI() {
  return (
    <div>
      
      <Col
        className="cheatsheet-style"
        style={{ width: "520px", height: "250px",marginTop:"55px" }}
      >
        
        <Table className="namestyle">
          <tr>
            <td className="td-style">Number()</td>
            <td>
            Returns a number converted from its argument
            </td>
          </tr>
          <tr>
            <td className="td-style">parseFloat()</td>
            <td>Parses an argument and returns a floating point number</td>
          </tr>
          <tr>
            <td className="td-style">parseInt()</td>
            <td>Parses its argument and returns an integer</td>
          </tr>
          <tr>
            <td className="td-style">decodeURI()</td>
            <td >
              Decodes a Uniform Resource Identifier (URI) created by encodeURI
              or similar
            </td>
          </tr>
          <tr>
            <td className="td-style">encodeURI()</td>
            <td>Encodes a URI into UTF-8</td>
          </tr>
          
        </Table>
      </Col>
    </div>
  );
}