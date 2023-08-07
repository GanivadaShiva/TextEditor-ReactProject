import { useState } from "react";

export default function TextForm(props){
    const [text,setText]=useState("");
    const handleUpperCase=()=>{
        let newtext=text.toLocaleUpperCase();
        setText(newtext)
    }
    const handleChange=(event)=>{
        setText(event.target.value)
    }
    const handleLoCase=()=>{
        let newtext=text.toLocaleLowerCase();
        setText(newtext)
    }
    const handleClText=()=>{
        setText("");
    }
    return(
        <>
<div className=" container mb-3" style={{color:props.mode==='light'?'black':'white'}}>
  <h2>{props.heading}</h2>
  <textarea className="form-control" id="Box" rows="5" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'dark':'white'}}value={text} onChange={handleChange}></textarea><br/>
  <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Upper Case</button>
  <button className="btn btn-primary mx-2" onClick={handleLoCase}>Lower Case</button>
  <button className="btn btn-primary mx-2" onClick={handleClText}>Clear Text</button>
</div>
<div className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Your text summery</h2>
    <p>No.of word:- {text.split(" ").length} and No.of characters:- {text.length}</p>
    <p>Time to read:- {0.08 * text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
</div>
        </>
    );
}