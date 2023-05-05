import { useState } from "react"
import Hassan from "./Hassan"
import './App.css'
function App() {
  const [show,setShow]=useState(false)
  function handleShow(){
    setShow(true);
  }
  console,console.log(show);

  return (
    
    <div className="content">
      {show === true && <Hassan />}
      {show ? (
        <div></div>
      ) : (<>
        <h1 style={{ textAlign: "center" }}>raadi madax weynaha 🔥</h1>
        <img
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginLeft: "auto",
          margin: "auto"
        }}
         src="data:image/jpeg;base64,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" alt="" />
        <h1 style={{textAlign:"center"}}>Hassan Sheikh Mohamud</h1>
    <button className="btn" onClick={handleShow} style={{display:"flex",justifyContent:"center",alignContent:"center",marginLeft:"auto",margin:"auto",marginTop:100}}>start the game 🔼</button>
    </>
      )}
      
      
    </div>
   

  )
}


export default App
