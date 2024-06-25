import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(": Converted to Uppercase!", "success")
  };
  const handleLoClick = () => {
    // console.log("Upper Case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(": Converted to LowerCase!", "success")
  };
  const handleCaClick = () => {
    // console.log("Upper Case was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert(": Clear all text!", "success")
  };
 
  const handleOnChange = (event) => {
    console.log("On changed");
    setText(event.target.value)
  };

  const handleCopy = ()=>{
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(": Copy text!", "success")
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
   setText(newText.join(" "));
   props.showAlert(": Remove all spaces!", "success")
  }



  const [text, setText] = useState("");
  // text = "New text"; //wrong way to change state
  // setText = ("New text"); //correct way to change state

  return (
    <>
    
    <div className="container"  style={{color: props.mode==='dark'?'white':'#1908a1'}}>
      {/* <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div> */}
      <div className="mb-3" >
        <h1>{props.heading}</h1>
        {/* <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows={8} placeholder="Type Here"
          style={{backgroundColor: props.mode==='dark'?'#1908a1':'white', color: props.mode==='dark'?'white':'#1908a1'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase{" "}
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to Lower{" "}
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCaClick}>
        Clear All{" "}
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text{" "}
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        Remove Extra Space{" "}
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#1908a1'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes To Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text in the TextBox Above to preview it here"}</p>
    </div>
    </>
  )
}