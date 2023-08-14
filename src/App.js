import React, { useState } from "react"
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
    }
  }
  const[alert,setalert]=useState(null);
  const showAlert = ( message ,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  return (
    <Router>  
    <NavBar title="RGUKT" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
      <Route exact path="/about">
      <About mode={mode}/>
      </Route>
      <Route exact path="/">
      <TextForm heading="Enter Text" mode={mode} showAlert={showAlert}/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}
export default App;
