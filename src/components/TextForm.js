import { useState } from "react";

export default function TextForm(props){
    const [text,setText]=useState("");
    const handleUpperCase=()=>{
        let newtext=text.toLocaleUpperCase();
        setText(newtext)
        props.showAlert("Converted to  uppercase","success");
    }
    const handleChange=(event)=>{
        setText(event.target.value)
    }
    const handleLoCase=()=>{
        let newtext=text.toLocaleLowerCase();
        setText(newtext)
        props.showAlert("Converted to  lowercase","success");
    }
    const handleClText=()=>{
        setText("");
        props.showAlert("Text cleared","success");
    }
    return(
        <>
<div className=" container mb-3" style={{color:props.mode==='light'?'black':'white'}}>
  <h2>{props.heading}</h2>
  <textarea className="form-control" id="Box" rows="7" style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}}value={text} onChange={handleChange}></textarea><br/>
  <button disabled={text.length===0}className="btn btn-primary mx-2" onClick={handleUpperCase}>Upper Case</button>
  <button disabled={text.length===0}className="btn btn-primary mx-2" onClick={handleLoCase}>Lower Case</button>
  <button disabled={text.length===0}className="btn btn-primary mx-2" onClick={handleClText}>Clear Text</button>
</div>
<div className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Your text summery</h2>
    <p>Words = {text.split(/\s+/).filter((e) => e.length !== 0).length} And Characters = {text.length}</p>
    <p>Time to read:- {0.08 * text.split(" ").filter( (e) => { return e.length !==0}).length}</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
</div>
        </>
    );
}