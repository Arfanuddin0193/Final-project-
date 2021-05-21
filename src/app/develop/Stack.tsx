import React, { SyntheticEvent, useEffect, useState } from "react";
import "./Stack.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Stack = () => {
  const [checked, changeChecked] = useState({ name: "html" });

  const onChangeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget;
    changeChecked({ name: name });
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="stack-body" data-aos="fade-down">
      <div id="scene">
        <div id="left-zone">
          <ul className="list">
            <li className="item">
              <input
                onChange={(e) => onChangeHandler(e)}
                checked={checked.name === "html"}
                type="radio"
                id="html"
                name="html"
                value="HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!"
              />
              <label className="label_html" htmlFor="html">
                html
              </label>
              <div className="contentd contentd_html">
                <span className="picto"></span>
                <div className="stack-header">html</div>
                <p>
                  HTML is the standard markup language for Web pages. With HTML
                  you can create your own Website. HTML is easy to learn - You
                  will enjoy it!
                </p>
              </div>
            </li>
            <li className="item">
              <input
                onChange={(e) => onChangeHandler(e)}
                checked={checked.name === "css"}
                type="radio"
                id="css"
                name="css"
                value="A css is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."
              />
              <label className="label_css" htmlFor="css">
                css
              </label>
              <div className="contentd contentd_css">
                <span className="picto"></span>
                <div className="stack-header">css</div>
                <p>
                  CSS stands for Cascading Style Sheets. CSS describes how HTML
                  elements are to be displayed on screen, paper, or in other
                  media. CSS saves a lot of work. It can control the layout of
                  multiple web pages all at once. External stylesheets are
                  stored in CSS files.
                </p>
              </div>
            </li>
            <li className="item">
              <input
                onChange={(e) => onChangeHandler(e)}
                checked={checked.name === "javaScript"}
                type="radio"
                id="javaScript"
                name="javaScript"
                value="The javaScript tree (Malus domestica) is a deciduous tree in the rose family best known htmlFor its sweet, pomaceous fruit, the javaScript. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."
              />
              <label className="label_javaScript" htmlFor="javaScript">
                javaScript
              </label>
              <div className="contentd contentd_javaScript">
                <span className="picto"></span>
                <div className="stack-header">javaScript</div>
                <p>
                  JavaScript, often abbreviated as JS, is a programming language
                  that conforms to the ECMAScript specification. JavaScript is
                  high-level, often just-in-time compiled, and multi-paradigm.
                </p>
              </div>
            </li>
            <li className="item">
              <input
                onChange={(e) => onChangeHandler(e)}
                checked={checked.name === "react"}
                type="radio"
                id="react"
                name="react"
                value="The react (specifically, the sweet react) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
              />
              <label className="label_react" htmlFor="react">
                react
              </label>
              <div className="contentd contentd_react">
                <span className="picto"></span>
                <div className="stack-header">react</div>
                <p>
                  React. js is an open-source JavaScript library that is used
                  for building user interfaces specifically for single-page
                  applications. It's used for handling the view layer for web
                  and mobile apps. React also allows us to create reusable UI
                  components. The main purpose of React is to be fast, scalable,
                  and simple.
                </p>
              </div>
            </li>
            <li className="item">
              <input
                onChange={(e) => onChangeHandler(e)}
                checked={checked.name === "typescript"}
                type="radio"
                id="typescript"
                name="typescript"
                value="The react (specifically, the sweet react) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
              />
              <label className="label_typescript" htmlFor="typescript">
                typescript
              </label>
              <div className="contentd contentd_typescript">
                <span className="picto"></span>
                <div className="stack-header">typescript</div>
                <p>
                  TypeScript is an open-source language which builds on
                  JavaScript, one of the world's most used tools, by adding
                  static type definitions. Types provide a way to describe the
                  shape of an object, providing better documentation, and
                  allowing TypeScript to validate that your code is working
                  correctly.
                </p>
              </div>
            </li>
            <li className="item">
              <input
                onChange={(e) => onChangeHandler(e)}
                checked={checked.name === "dotnet"}
                type="radio"
                id="dotnet"
                name="dotnet"
                value="The react (specifically, the sweet react) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
              />
              <label className="label_dotnet" htmlFor="dotnet">
                dotnet core
              </label>
              <div className="contentd contentd_dotnet">
                <span className="picto"></span>
                <div className="stack-header">dotnet core</div>
                <p>
                  .NET is a free and open-source, managed computer software
                  framework for Windows, Linux, and macOS operating systems. It
                  is a cross-platform successor to .NET Framework.
                </p>
              </div>
            </li>
            <li className="item">
              <input
                onChange={(e) => onChangeHandler(e)}
                checked={checked.name === "flutter"}
                type="radio"
                id="flutter"
                name="flutter"
                value="The react (specifically, the sweet react) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
              />
              <label className="label_flutter" htmlFor="flutter">
                flutter
              </label>
              <div className="contentd contentd_flutter">
                <span className="picto"></span>
                <div className="stack-header">flutter</div>
                <p>
                  Flutter is an open-source UI software development kit created
                  by Google. It is used to develop applications for Android,
                  iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a
                  single codebase.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div id="middle-border"></div>
        <div id="right-zone"></div>
      </div>
    </div>
  );
};

export default Stack;
