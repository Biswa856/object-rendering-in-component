import React from "react";
import "./style.css";
import obj from "./data.js"
export default function App() {

  console.log(obj)
  return (
    <div>
      {
        obj.map((ele,index)=>{
          console.log(ele);
           return(<div key={index}>
            <h1>{ele.name}</h1>
            <p>{ele.age}</p>
            <p>{ele.add}</p>
          </div>)
        })
      }
    
    </div>
  );
}
