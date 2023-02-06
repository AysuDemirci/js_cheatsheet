import React, { useState } from "react";
import Concat from "./Concat"
import IndexOf from "./IndexOf"
import {Col, Row } from "reactstrap";

export default function CheatSheet() {

 

  return (
    <div style={{ marginTop: "40px", marginLeft: "150px" }}>
      <Row style={{ columnGap: "70px" }}>
        <Col md="3">
          <h2 style={{ marginBottom: "20px" }}>Getting Started</h2>
          <Col
            className="cheatsheet-style"
          >
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

        <Col md="4">
          <h2 style={{ marginBottom: "20px" }}>Arrays</h2>
          <Col>
            <Col className="cheatsheet-style">
              <h4>Array </h4>
              <pre>
                <code>var fruit = ["Banana","Apple","Cherry"]</code>
              </pre>
              xxx
            </Col>

           <Concat/>
            
            <IndexOf/>
           
            <Col className="cheatsheet-style">
              <h6>
                join() : Combine elements of an array into a single string and
                return the string
              </h6>
              <pre>
                const lessons = ["Math","History","PE"]
                <br />
                let texts = lessons.join()
                <br />
                =&gt;Math,History,PE
              </pre>
            </Col>
            
            <Col className="cheatsheet-style">
              <h6>
                lastIndexOf() : Gives the last position at which a given element
                appears in an array
              </h6>
              <pre>
                const fruits = ["Apple","Pear","Cherry","Mango","Pear"]
                <br />
                let index = fruits.lastIndexOf("Pear")
                <br />
                console.log(index)
                <br />
                =&gt;4
              </pre>
            </Col>
           
            <Col className="cheatsheet-style">
              <h6>pop() : Removes the last element of an array</h6>
              <pre>
                const fruits = ["Apple","Pear","Cherry","Mango","Pear"]
                <br />
                const popped = fruits.pop()
                <br />
                console.log(fruits)
                <br />
                =&gt; ["Apple","Pear","Cherry","Mango"]
              </pre>
            </Col>

            
            <Col className="cheatsheet-style">
              <h6>push(): Add a new element at the end</h6>
              <pre>
                const animals =["Cow","Horse","Sheep"]
                <br />
                const total = animals.push("Chicken","Snake")
                <br />
                console.log(animals)
                <br />
                =&gt;["Cow","Horse","Sheep","Chicken","Snake"]
              </pre>
            </Col>
            
            <Col className="cheatsheet-style">
              <h6>reverse(): Reverse the order of the elements in an array</h6>
              <pre>
                const numbers =["1","2","3","4"]
                <br />
                const reserved = numbers.reverse()
                <br />
                console.log(reserved)
                <br />
                =&gt;["4","3","2","1"]
              </pre>
            </Col>
            
            <Col className="cheatsheet-style">
              <h6>shift(): Remove the first element of an array</h6>
              <pre>
                const myFish = ["Angel","Clown","Mandarin","Surgeon"]
                <br />
                const shifted = myFish.shift()
                <br />
                console.log(myFish)
                <br />
                =&gt; ["Clown","Mandarin","Surgeon"]
              </pre>
            </Col>
           
            <Col className="cheatsheet-style">
              <h6>splice(): Adds elements in a specified way and position</h6>
              <pre>
                const fruits = ["Apple","Pear","Cherry"]
                <br />
                const spliced = fruits.splice(2,0,"Lemon")
                <br />
                console.log(fruits)
                <br />
                =&gt;["Apple","Pear","Lemon","Cherry"]
                <br />
                <br />
                const fruits = ["Apple","Pear","Lemon","Cherry"]
                <br />
                const spliced = fruits.splice(2,2,"Lemon")
                <br />
                console.log(fruits)
                <br />
                =&gt;["Apple","Pear"]
              </pre>
            </Col>
            
            <Col className="cheatsheet-style">
              <h6>toString(): Converts elements to strings</h6>
              <pre>
                const array1 = ["1","2","a","2a"]
                <br />
                console.log(array1.toString)
                <br />
                =&gt;"1,2,a,2a"
              </pre>
            </Col>
            
            <Col className="cheatsheet-style">
              <h6>toString(): Converts elements to strings</h6>
              <pre>
                const array1 = ["1","2","a","2a"]
                <br />
                console.log(array1.toString)
                <br />
                =&gt;"1,2,a,2a"
              </pre>
            </Col>
            
            <Col className="cheatsheet-style">
              <h6>unshift(): Adds a new element to the beginning</h6>
              <pre>
                const numbers = ["3","4","5","6"]
                <br />
                console.log(numbers.unshift(1,2))
                <br />
                =&gt; ["1","2","3","4","5","6"]
              </pre>
            </Col>
            
            <Col className="cheatsheet-style">
              <h6>
                valueOf(): Returns the primitive value of the specified object
              </h6>
              <pre>
                const fruits = ["Apple","Pear","Lemon","Cherry"]
                <br />
                const value = fruits.valueOf()
                <br />
                console.log(value)
                <br />
                =&gt;["Apple","Pear","Lemon","Cherry"]
              </pre>
            </Col>
          </Col>
        </Col>
        <Col md="3" style={{ border: "1px solid black", height: "250px" }}>
          <h4>sss</h4>
          <Col style={{ border: "1px solid black" }}></Col>
        </Col>
      </Row>
    </div>
  );
}
