import React, { useState } from "react";

export default function Contentarea(props) {
  const [text, setText] = useState("Enter your text");

  const handleUpClick = (event) => {
    console.log("uppercase clicked");
    let newtext = text.toUpperCase();

    props.showAlert("Converted to uppercase","success");

    setText(newtext);
  };
  const handleLoClick = (event) => {
   
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase","success");
     
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleCopy = (event) => {
    // console.log("on change");
    var text = document.getElementById("my box");
    text.select();
    navigator.clipboard.writeText(text.value);

    props.showAlert("Copy to clip board","info");

  };
  const handleClear = () => {
    setText("");

    props.showAlert("Cleared the text","warning");

  };
  return (
    <>
      <div className={`text-${props.mode==='light'?'dark':'light'}`}>
        <div className="container">
          <h1 className="my-3"> {props.heading}</h1>
          <div className="mb-3"></div>
          <textarea
            className="form-control my-4"
            style={{backgroundColor: props.mode==='light'?'#899fe8a8':'#0254a7' , color: props.mode==='light'?'black':'whitesmoke'}} 
            value={text}
            onChange={handleOnChange}
            id="my box"
            rows="10"
          ></textarea>
          <div className="conatiner my-3">
            <button className="btn btn-primary mx-1"  disabled={text.length===0} onClick={handleUpClick}>
              Convert to Uppercase
            </button>

            <button className="btn btn-primary mx-1" disabled={text.length===0}  onClick={handleLoClick}>
              Convert to Lowercase
            </button>

            <button className="btn btn-primary mx-1" disabled={text.length===0}  onClick={handleClear}>
              Clear Text
            </button>

            <button className="btn btn-primary mx-1"  disabled={text.length===0}  onClick={handleCopy}>
              Copy Text
            </button>
          </div>
        </div>
        <div className="container my-2 ">
          <h2>your text summery</h2>
          <p>
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} charecters ,{" "}
            {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read
          </p>
        </div>
      </div>
    </>
  );
}
