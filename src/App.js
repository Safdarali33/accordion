import React from "react";
import "./style.css";
import Accordion from "./Accordion";

let data = [
  {
    id: 1,
    title: "What are you doing?",
    description: "hoijfpoj ojpjojvoiwoij oiijoiaaoicoi oioijcv",
    open: false
  },
  {
    id: 2,
    title: "What are you doing?",
    description: "hoijfpoj ojpjojvoiwoij oiijoiaaoicoi oioijcv",
    open: false
  },
  {
    id: 3,
    title: "What are you doing?",
    description: "hoijfpoj ojpjojvoiwoij oiijoiaaoicoi oioijcv",
    open: false
  },
]

export default function App() {
  return (
    <div>
      {/* <div>hello</div> */}
      <Accordion dataArray= {data}/>
    </div>
  );
}
