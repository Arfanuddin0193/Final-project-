import React, { useEffect, useRef } from "react";
import "./terminal.css";

const Terminal = () => {
  const textRef = useRef<any>(null);
  const consoleRef = useRef<any>(null);

  useEffect(() => {
    function consoleText(words: any) {
      var visible = true;
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          if (textRef.current !== null) {
            textRef.current.innerHTML = words[0].substring(0, letterCount);
          }
          setTimeout(function () {
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          setTimeout(function () {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          if (textRef.current !== null) {
            textRef.current.innerHTML = words[0].substring(0, letterCount);
          }
          letterCount += x;
        }
      }, 80);
      setInterval(function () {
        if (consoleRef.current !== null) {
          if (visible === true) {
            consoleRef.current.className = "console-underscore hidden";
            visible = false;
          } else {
            consoleRef.current.className = "console-underscore";
            visible = true;
          }
        }
      }, 400);
    }
    consoleText(["Brand Frictionless Initiatives", 
    "Envisioneer Global Deliverables", "Evolve Seamless Applications", 
    "Syndicate Efficient Systems","Grow real-time models","Deliver Scalabale Functionalities"]);
  }, []);

  return (
    <div className="terminal">
      <div className="console-container">
        <span
          id="text"
          style={{ color: "#0a7d7d" }}
          ref={textRef}
        ></span>
        <div className="console-underscore" id="console" ref={consoleRef}>
          &#95;
        </div>
      </div>
    </div>
  );
};

export default Terminal;
