import React from "react";
import { Col, Table } from "reactstrap";

export default function URI() {
  return (
    <div>
      <Col
        className="cheatsheet-style"
        style={{ width: "460px", height: "280px", marginTop: "55px" }}
      >
        <table className="namestyle">
          <tr>
            <td className="td-style">Number()</td>
            <td>Returns a number converted from its argument</td>
          </tr>
          <br />
          <tr>
            <td className="td-style">parseFloat()</td>
            <td>Parses an argument and returns a floating point number</td>
          </tr>
          <br />
          <tr>
            <td className="td-style">parseInt()</td>
            <td>Parses its argument and returns an integer</td>
          </tr>
          <br />
          <tr>
            <td className="td-style">decodeURI()&nbsp;</td>
            <td>
              Decodes a Uniform Resource Identifier (URI) created by encodeURI
              or similar
            </td>
          </tr>
          <br />
          <tr>
            <td className="td-style">encodeURI()</td>
            <td>Encodes a URI into UTF-8</td>
          </tr>
        </table>
      </Col>
    </div>
  );
}
