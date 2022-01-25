import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  function checkNullValidation() {
      console.log('Length: '+text.length);
    if (text.length > 0) {

      return true;
    } else {
      props.showAlert("Please Enter the text in text box", "warning");
      return false;
    }
  }

  const handleUpperCase = () => {

    if(checkNullValidation()){
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to UpperCase", "success");
    }

  };

  const handleLowerCase = () => {
    if(checkNullValidation()){
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to LowerCase", "success");
    }
  };

  const handleExtraSpaces = () => {
    if(checkNullValidation()){
    let newText = text.replace(/ +(?= )/g, "");
    setText(newText);
    props.showAlert("Removed Extra Space's", "success");
    }
  };

  const handleCamleCase = () => {
    if(checkNullValidation()){
    let str = text;
    str = CamleCase(str);
    function CamleCase(str) {
      return str
        .replace(/\s(.)/g, function ($1) {
          return $1.toUpperCase();
        })
        .replace(/\s/g, "")
        .replace(/^(.)/, function ($1) {
          return $1.toLowerCase();
        });
    }

    setText(str);
    props.showAlert("Text Converted to Camel Case", "success");
}
  };

  const handleClearText = () => {
    if(checkNullValidation()){
    setText("");
    props.showAlert("Text Cleared", "success");
    }
  };

  return (
    <>
      <div className="container my-3">
        <div className=" form-group">
          <h3>Enter the text below</h3>
          <textarea
            className="form-control"
            placeholder="Enter Text Here"
            value={text}
            onInput={(e) => setText(e.target.value)}
            id="textid"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleUpperCase}
          className="btn btn-outline-secondary mx-1"
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          onClick={handleLowerCase}
          className="btn btn-outline-secondary mx-1"
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          onClick={handleCamleCase}
          className="btn btn-outline-warning mx-1"
        >
          Convert to CamleCase
        </button>
        <button
          type="button"
          onClick={handleExtraSpaces}
          className="btn btn-outline-info mx-1"
        >
          Remove Extra Space's
        </button>
        <button
          type="button"
          onClick={handleClearText}
          className="btn btn-outline-danger mx-1"
        >
          Clear Text
        </button>
      </div>
    </>
  );
}
