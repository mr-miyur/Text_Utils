import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/ +(?= )/g, "");
    setText(newText);
  };

  const handleCamleCase = () => {
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
  };

  const handleClearText = () => {
        setText('');
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
