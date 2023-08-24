import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const clean = ()=>{
        setText("");
    }
    const handleCopy = ()=>{
        props.showAlert('Copied to clipboard', 'success');
        var txt = document.getElementById("mybox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }
    const RemoveExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
    <>
    <div>
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'} pt-5 pb-3`}><b>{props.heading}</b></h1>
        <div className="mb-3">
        <textarea className="form-control my-2 border-1 border-black" style = {{backgroundColor: props.mode === 'light' ? 'white':'#222222', color:props.mode === 'light' ? 'black': props.hackermode}} value = {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-1`} onClick={handleUpClick}><b>Convert To Upper Case</b></button>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-1`} onClick={handlelowClick}><b>Convert To Lower Case</b></button>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-1`} onClick={handleCopy}><b>Copy Text</b></button>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-1`} onClick={RemoveExtraSpaces}><b>Remove Extra Spaces</b></button>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-1`} onClick={clean}><b>Clear Text</b></button>
        </div>
    </div>
    <div className="container">
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Text Summary</h1>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
    </div>
    <div className="container">
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h1>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length === 0 ? "Nothing to preview" : text}</p>
    </div>
    </>
  )
}
