import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alerts from './components/Alerts';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [hackermode, setHackerMode] = useState('white');
  const [Alert, setAlert] = useState(null);
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#333333';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  const toggleHackerMode = ()=>{
    if(mode === 'light'){
      showAlert('Hacker mode available in dark mode only', 'warning');
    }
    else{
      if(hackermode === 'white'){
        setHackerMode('lime');
        showAlert('Hacker Mode enabled', 'warning');
      }
      else{
        setHackerMode('white');
        showAlert('Hacker Mode disabled', 'warning');
      }
    }
  }
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  } 
  return (
    <>
    <Navbar title = "Text-Utils" mode = {mode} toggleMode = {toggleMode} hackermode = {hackermode} toggleHackerMode = {toggleHackerMode} showAlert = {showAlert}/>
    <Alerts Alert = {Alert}/>
    <div className="container my-5">
    {/* <BrowserRouter>
        <Routes> */}
          {/* <Route exact path="/about" element = {<About />}></Route> */}
        {/* </Routes>
    </BrowserRouter> */}
    <TextForm heading = "Analyze the text !" mode = {mode} showAlert = {showAlert} hackermode = {hackermode} />
    </div>
    </>
  );
}

export default App;
