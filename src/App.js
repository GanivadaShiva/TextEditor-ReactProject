import React, { useState } from "react"
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
/*import About from "./components/About";*/

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <div>
      <NavBar title="RGUKT" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter Text" mode={mode}/>
      {/*<About/>*/}
    </div>
  );
}
export default App;
