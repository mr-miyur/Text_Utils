import React, { useState } from 'react';



export default function TextForm() {
    const [text, setText] = useState('Enter Text Here');

const handleUpperCase=()=>{
let newText=text.toUpperCase();
setText(newText);
}

    return (
        <>
            <div className="form-group">
                <h3>Enter the text below</h3>
                <textarea className="form-control" value={text} onInput={e => setText(e.target.value)} id="textid" rows="8"></textarea>
            </div>
            <button type="button" onClick={handleUpperCase} className="btn btn-primary">Convert to UpperCase</button>
        </>
    );
}
